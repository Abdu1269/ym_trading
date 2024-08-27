"use client";

import LoadingPage from "@/components/LoadingPage";
import { CollectionQuery } from "@/model/collection.model";
import { Service } from "@/model/service.model";
import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";

function Services() {
  // const [ showServiece , setShowService] = useState(2)
  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "updatedAt",
      },
    ],
    top: 3,
    skip: 0,
  };

  const pathname = usePathname();
  const {
    data: services,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-product-and-services/get-services`,
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
    <div>
      {pathname === "/services" && <div className="mt-24"></div>}
      <div className="bg-white min-h-fit glass" title="Services">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services?.data?.map((service: Service) => (
              <div key={service.id} className="w-full h-auto">
                <div className="card w-full h-full bg-white hover:bg-emerald-950 hover:text-white text-black shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                  <figure className="h-2/3">
                    <Image
                      src={service.coverPage}
                      alt={service?.name}
                      width={384}
                      height={256}
                      layout="responsive"
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <div className="card-body h-1/3 p-4">
                    <h2 className="card-title hover:font-semibold text-lg sm:text-xl md:text-2xl">
                      {service.name}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg">
                      {service.description}
                    </p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <Link href="/services">
              <button className="w-full md:w-auto p-2 bg-yellow-700 text-white rounded-md cursor-pointer hover:bg-emerald-950">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
