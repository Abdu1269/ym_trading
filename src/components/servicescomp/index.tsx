import { Service } from "@/model/service.model";
import { truncate } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicesCard({ service }: { service: Service }) {
  const { name, description, coverPage } = service;
  return (
    <>
      <div>
        <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
          <Link
            target="_self"
            href={`services?id=${service.id}`}
            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
          ></Link>
          <div className="relative mb-4 rounded-2xl">
            <Image
              className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              src={coverPage}
              alt={name}
              width={300}
              height={300}
            />

            <Link
              className="flex justify-center items-center bg-emerald-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
              href={`services?id=${service.id}`}
              target="_self"
              rel="noopener noreferrer"
            >
              View Details
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex justify-between items-center w-full pb-4 mb-auto">
            <div className="flex items-center">
              <div className="flex flex-1">
                <div className="">
                  <p className="text-sm font-semibold ">{name}</p>
                  <p className="text-sm text-gray-500">
                    {truncate(description, { length: 40 })}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </article>
      </div>
    </>
  );
}
