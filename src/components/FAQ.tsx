"use client";

import { CollectionQuery } from "@/model/collection.model";
import { faq } from "@/model/faq.model";
import fetcher from "@/shared/utils/fetcher";
import React from "react";
import useSWR from "swr";
// // import ErrorPage from "@/components/ErrorPage";
import LoadingPage from "@/components/LoadingPage";

const FAQ = () => {
  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "createdAt",
      },
    ],
    top: 4,
    skip: 0,
  };

  const {
    data: faqs,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-interactions/get-faqs`,
      params: collection,
    },
    fetcher
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <>error</>;
  }

  return (
    <div className="bg-gray-100 py-12 " title="FAQ" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-emerald-500 text-center mx-auto py-2 mb-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
          Frequently Asked Questions
        </div>
        {/* <div className="flex items-center justify-center"> */}
        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
        {
          <div className="space-y-4 px-10">
            {faqs?.data?.map((faq: faq) => (
              <details
                className="group [&_summary::-webkit-details-marker]:hidden"
                open
                key={faq.id}
                title={faq.question}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 py-6 text-gray-900">
                  <h2 className="font-medium">{faq?.question}</h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  {faq?.answer}
                </p>
              </details>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default FAQ;
