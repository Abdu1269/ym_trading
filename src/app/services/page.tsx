"use client";

import { CollectionQuery } from "@/model/collection.model";
import { Service } from "@/model/service.model";
import fetcher from "@/shared/utils/fetcher";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import ServiceSidebarItem from "./_components/service-sidebar-item";
import Image from "next/image";

function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const itemsPerPage = 2;

  const [collection, setCollection] = React.useState<CollectionQuery>({
    orderBy: [{ field: "createdAt", direction: "desc" }],
    skip: 0,
    top: itemsPerPage,
  });
  const {
    data: servicesData,
    error: servicesError,
    isLoading: servicesLoading,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-product-and-services/get-services`,
      params: collection,
    },
    fetcher
  );

  useEffect(() => {
    if (servicesData?.data) {
      const totalPages = Math.ceil(servicesData.count / itemsPerPage);
      setTotalPages(totalPages);

      if (id) {
        const service = servicesData.data.find(
          (s: Service) => s?.id?.toString() === id
        );
        setSelectedService(service || null);
      } else {
        setSelectedService(servicesData.data[0] || null);
      }
    }
  }, [servicesData, id, itemsPerPage]);

  const handleServiceClick = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handlePageChange = (page: number) => {
    setCollection((prevCollection: any) => ({
      ...prevCollection,
      skip: (page - 1) * prevCollection.top,
    }));
  };
  if (servicesError) return <div>Failed to load services</div>;
  if (servicesLoading) return <div>loading...</div>;
  if (!servicesData?.data) return <div>No services found</div>;

  // console.log(servicesData);

  console.log("🚀 ~ Services ~ servicesData:");

  return (
    // <div>
    //   {pathname === "/servicesData" && <div className="mt-24"></div>}
    //   <section className="bg-slate-100">
    //     <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    //       <div className="mx-auto max-w-lg text-center mb-8">
    //         <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
    //           Services We Offer
    //         </h2>

    //         <p className="mt-4 text-slate-700">
    //           We are committed to providing exceptional servicesData to our
    //           clients. Our team of experts is dedicated to delivering
    //           high-quality solutions that meet your unique needs.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
    //         {servicesData.data.map((service: Service) => (
    //           <ServicesItem key={service.id} service={service} />
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="mt-24 mb-14">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-auto rounded-lg bg-gray-200 py-5">
          <div>
            <h2 className="text-xl uppercase text-center text-slate-700 font-bold mt-5">
              Services We Offer
            </h2>
          </div>
          <ul className="menu bg-slate-200 w-full p-4">
            {servicesData?.data.map((service: Service) => (
              <ServiceSidebarItem
                key={service.id}
                currentData={service}
                setSelectedItem={handleServiceClick}
              />
            ))}
          </ul>
          <div className="join flex justify-center">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`btn btn-primary join-item border  border-slate-400 text-white ${
                  index + 1 ===
                  Math.ceil((collection?.skip ?? 0) / (collection?.top ?? 10)) +
                    1
                    ? "btn-active bg-slate-700"
                    : "bg-slate-300"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="h-auto rounded-lg bg-slate-50 lg:col-span-2 p-5">
          <div className="relative w-[100%] h-[400px] mx-auto rounded-lg overflow-hidden">
            <Image
              src={selectedService?.coverPage}
              alt={selectedService?.name}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {selectedService ? (
            <>
              <h2 className="text-xl uppercase text-center text-slate-700 font-bold">
                {selectedService?.name || "No name"}
              </h2>
              <div className="flex justify-center mt-10">
                <p className="text-md text-center text-gray-700">
                  {selectedService?.description || "No description"}
                </p>
              </div>
            </>
          ) : (
            <div>Select a service to see details</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
