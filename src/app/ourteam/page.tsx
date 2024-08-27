"use client";
import React from "react";

import { CollectionQuery } from "@/model/collection.model";
import { ourTeam } from "@/model/ourTeam.model";

import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";

import useSWR from "swr";

function OurTeamPage() {
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
    data: ourTeam,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-interactions/get-our-teams`,
      params: collection,
    },
    fetcher
  );

  if (isLoading) {
    return <div className="text-black">Loading...</div>;
  }

  if (error) {
    return <div className="text-black">Error occurred.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-10" title="Our Team">
      <div className="text-neutral-950 text-center text-3xl sm:text-4xl lg:text-5xl mb-10 font-serif">
        Meet Our Team
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 sm:mx-6 lg:mx-14">
        {ourTeam?.data?.map((item: ourTeam) => (
          <div key={item.id} className="flex justify-center">
            <div className="card card-compact bg-white w-full sm:w-80 md:w-96 shadow-xl">
              <figure>
                <Image
                  alt={item?.name || "Team member"}
                  src={item?.cover || "/default-trade.jpg"}
                  width={300} // adjust as needed
                  height={300} // adjust as needed
                  className="object-cover w-40 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-black">{item?.name}</h2>
                <p className="text-black">{item?.email}</p>
                <div className="card-actions justify-end">
                  {/* Optional actions */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeamPage;
