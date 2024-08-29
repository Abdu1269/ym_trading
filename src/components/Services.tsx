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
import ServicesCard from "./servicescomp";
import { SeeMore } from "./CTA/cta";

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
      <section className="bg-slate-100" id="service">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center py-10">
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
              Services We Offer
            </h2>

            <p className="mt-4 text-slate-700">
              We offer a wide range of services to meet your needs. Our team of
              experts is dedicated to providing high-quality solutions to help
              you achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services?.data?.map((service: Service) => (
              <ServicesCard key={service.id} service={service} />
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <SeeMore link="/services" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
