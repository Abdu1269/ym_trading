"use client";

import { CollectionQuery } from "@/model/collection.model";
import { whyUs as WhyUsType } from "@/model/whyUs.model";
import fetcher from "@/shared/utils/fetcher";
import useSWR from "swr";
// import ErrorPage from "./ErrorPage";
import Image from "next/image";
import LoadingPage from "./LoadingPage";

// Import the local image

const WhyUs = () => {
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
    data: whyUs,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-interactions/get-why-us`,
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
    <div
      className="bg-white bg-gradient-to-r from-white to-gray-100 min-h-screen py-10"
      title="Why Us"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-emerald-800 bg-gray-200 text-center mx-auto rounded-lg py-8 mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold border border-gray-300">
          Why you Choose YM Trading ?
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 lg:w-1/3">
            <Image
              src={`/transparency.jpg`}
              alt="Why Us"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-2/3 flex flex-col gap-6">
            {whyUs?.data?.map((item: WhyUsType) => (
              <div
                key={item.id}
                className="bg-emerald-800 glass text-primary-content p-6 rounded-lg shadow-md"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
