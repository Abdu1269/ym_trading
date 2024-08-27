"use client";

import { CollectionQuery } from "@/model/collection.model";
import { testimonials } from "@/model/testimonials.model";
import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import useSWR from "swr";
import LoadingPage from "./LoadingPage";

import IconStar from "@/public/svgs/star.svg";
import IconStarFilled from "@/public/svgs/star-filled.svg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hides arrows on small screens for better UX
        },
      },
    ],
  };

  const [more, setMore] = useState<number>(100);
  const [expandedTestimonialId, setExpandedTestimonialId] = useState<
    number | string | null
  >(null);

  const handleClick = (testimonialId: string) => {
    setExpandedTestimonialId(
      testimonialId === expandedTestimonialId ? null : testimonialId
    );
  };

  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "createdAt",
      },
    ],
  };

  const {
    data: testimonials,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-interactions/get-testimonials`,
      params: collection,
    },
    fetcher
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div className="bg-gray-100 py-12" title="Testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-emerald-800 bg-gray-200 glass text-center mx-auto mb-12 rounded-md py-6 text-4xl sm:text-5xl lg:text-6xl font-serif">
          Our Testimonials
          <p className="text-xl sm:text-2xl lg:text-3xl mt-2">
            What Our Clients Say
          </p>
        </div>

        <div className="relative">
          <Slider {...settings} className="testimonial-slider">
            {testimonials?.data?.map((item: testimonials) => (
              <div key={item.id} className="px-4 py-6">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                  <Image
                    src={item.cover}
                    alt={`${item.name}'s picture`}
                    width={100}
                    height={100}
                    className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover mb-4"
                  />
                  <h1 className="text-sky-900 text-xl sm:text-lg font-semibold">
                    {item.name}
                  </h1>
                  <h2 className="text-gray-600 text-md sm:text-sm mt-1">
                    {item.position}
                  </h2>
                  <div className="flex justify-center gap-1 mt-2">
                    {item.rating && (
                      <div className="flex gap-1">
                        {Array.from({ length: item.rating })?.map((_, i) => (
                          <IconStarFilled
                            key={i}
                            color="#FFC107"
                            className="w-4 h-4"
                          />
                        ))}
                        {Array.from({ length: 5 - item.rating })?.map(
                          (_, i) => (
                            <IconStar
                              key={i}
                              color="#FFC107"
                              className="w-4 h-4"
                            />
                          )
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 mt-4 sm:text-sm">
                    {expandedTestimonialId === item.id
                      ? item.message
                      : `${item.message.slice(0, more)}...`}
                  </p>
                  <button
                    className="mt-4 text-yellow-700 font-semibold"
                    onClick={() => handleClick(item.id)}
                  >
                    {expandedTestimonialId === item.id
                      ? "Show Less"
                      : "Read More"}
                  </button>
                  <p className="text-gray-500 mt-2 sm:text-xs">{item.email}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
