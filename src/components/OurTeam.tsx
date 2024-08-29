"use client";
import React from "react";

import { CollectionQuery } from "@/model/collection.model";
import { ourTeam } from "@/model/ourTeam.model";

import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";

import useSWR from "swr";
import Link from "next/link";
import { SeeMore } from "./CTA/cta";

function OurTeamPage() {
  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "createdAt",
      },
    ],
    top: 3,
    skip: 0,
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
    <div className=" bg-white py-10" title="Our Team" id="ourteam">
      <div className="text-amber-400 text-center text-3xl sm:text-4xl lg:text-5xl mb-10 font-serif mt-10">
        Meet Our Team
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 sm:mx-6 lg:mx-14">
        {ourTeam?.data?.map((item: ourTeam) => (
          <div key={item.id} className="flex justify-center py-6">
            <div className="card card-compact bg-white w-full sm:w-80 md:w-96 shadow-xl flex justify-center py-5">
              <div className="avatar justify-center">
                <div className="ring-emerald-700 ring-offset-amber-100 w-24 rounded-full ring ring-offset-2">
                  <Image
                    alt={item?.name || "Team member"}
                    src={item?.cover || "/default-trade.jpg"}
                    width={200} // adjust as needed
                    height={200} // adjust as needed
                    className="object-cover w-60 h-48"
                    style={{ objectFit: "cover" }} // ensure the image fits the container
                  />
                </div>
              </div>

              <div className="card-body mx-auto  text-white py-4">
                <h2 className="card-title text-black capitalize text-center">
                  {item?.name}
                </h2>
                <p className="text-black text-center">{item?.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-2 mx-28">
        <SeeMore link="/oure-team" />
      </div>
    </div>
  );
}

export default OurTeamPage;
