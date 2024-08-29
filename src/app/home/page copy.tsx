"use client";
import ErrorPage from "@/components/ErrorPage";
import LoadingPage from "@/components/LoadingPage";
import { CollectionQuery } from "@/model/collection.model";
import { home } from "@/model/home.model";
import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const HomePage = () => {
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

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <div
        className="relative bg-fixed min-h-[75vh] flex items-center justify-center overflow-hidden"
        title="Home"
      >
        {front_images?.data?.map((front_image: home) => (
          <div key={front_image.id} className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(spices.jpg)` }}
            >
              <div className="hero-overlay bg-opacity-10"></div>
            </div>
          </div>
        ))}

        <div className="relative z-10 text-center p-4 sm:p-8 md:p-12 lg:p-20">
          <div className="text-3xl sm:text-4xl md:text-5xl text-yellow-700 font-bold font-serif mb-4">
            YM TRADING
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-green-50 mb-4">
            Connecting global markets with seamless import and export solutions.
            Partner with us to navigate and expand your international business.
          </div>
          <Link href="/about">
            <button className="p-2 bg-yellow-700 text-white rounded-md cursor-pointer hover:bg-emerald-950">
              ABOUT OUR COMPANY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
