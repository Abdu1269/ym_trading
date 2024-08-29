"use client";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import images from the public directory
// import banner1 from "/public/banner-1.jpeg";
// import banner2 from "/public/banner-2.jpeg";
// import banner3 from "/public/banner-3.png";
import ErrorPage from "@/components/ErrorPage";
import LoadingPage from "@/components/LoadingPage";
import { cn } from "@/lib/_func/cn";
import { CollectionQuery } from "@/model/collection.model";
import fetcher from "@/shared/utils/fetcher";
import useSWR from "swr";

export default function Hero() {
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
    data: front_images,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-interactions/get-front-images`,
      params: collection,
    },
    fetcher
  );

  // const bannerData = [
  //   {
  //     title: "Empowering Tech Companies to Thrive",
  //     description:
  //       "Join the leading business directory for tech companies. Boost your visibility, connect with clients, and grow your business with us.",
  //     image: banner2,
  //   },
  //   {
  //     title: "Unite with Tech Innovators Worldwide",
  //     description:
  //       "Discover a platform where tech companies enhance their reach, credibility, and connections. Get listed and grow your business today.",
  //     image: banner1,
  //   },
  //   {
  //     title: "Your Gateway to Tech Excellence",
  //     description:
  //       "Register your tech company and unlock opportunities for growth, networking, and industry insights. Elevate your business with our trusted directory.",
  //     image: banner3,
  //   },
  // ];

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <section className="relative z-0 h-full min-h-screen w-full bg-emerald-900 pb-0">
      <main className="relative h-full min-h-screen w-full px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {front_images.data.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="z-0 flex min-h-screen flex-col-reverse justify-center lg:flex-row">
                <section className="@md:px-2 flex w-full flex-col items-center justify-start lg:w-[50%] lg:translate-x-10 lg:p-10 lg:px-5 lg:pt-36">
                  <div className="h-auto w-full lg:pt-7">
                    <h1 className="__classNameName_e826f1 text-3xl font-extrabold text-white lg:text-7xl">
                      {item.title}
                    </h1>
                    <p className="max-w-sm py-5 text-slate-300 lg:text-lg">
                      {item.description}
                    </p>
                    <div className="flex w-full items-center justify-start gap-2 text-white">
                      <a
                        href="#_"
                        className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-amber-600 border border-transparent rounded-full md:w-auto hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </section>
                <section
                  className={cn(
                    "relative z-0 my-20 flex w-full items-center justify-center lg:w-1/2"
                  )}
                >
                  <Image
                    src={item.cover}
                    alt="Hero Image"
                    fill
                    // width={}
                    // height={400}
                    className="z-10 rounded-3xl object-cover"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
