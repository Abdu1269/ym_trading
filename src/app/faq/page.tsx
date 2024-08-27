"use client";

import { CollectionQuery } from "@/model/collection.model";
import { faq } from "@/model/faq.model";
import fetcher from "@/shared/utils/fetcher";
import React from "react";
import useSWR from "swr";
import ErrorPage from "@/components/ErrorPage";
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
    return <ErrorPage />;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12" title="FAQ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-emerald-800 bg-gray-200 text-center mx-auto rounded-lg py-6 mb-12 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold shadow-lg">
          Frequently Asked Questions
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faqs?.data?.map((faq: faq) => (
            <div
              key={faq.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-yellow-400 text-xl font-semibold">
                  {faq?.question}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
