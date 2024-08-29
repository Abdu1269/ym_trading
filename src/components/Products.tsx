"use client";

import fetcher from "@/shared/utils/fetcher";
import React from "react";
import useSWR from "swr";
import { CollectionQuery } from "@/model/collection.model";
import { Product } from "@/model/product.model";
import Image from "next/image";
import Link from "next/link";
import LoadingPage from "@/components/LoadingPage";
// // import ErrorPage from "@/components/ErrorPage";
import ProductCard from "./product-card";
import { SeeMore } from "./CTA/cta";

const ProductListPage = () => {
  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "createdAt",
      },
    ],
    top: 6,
    skip: 0,
  };

  const {
    data: products,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-product-and-services/get-products`,
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
    <section className="bg-slate-50" id="product">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center py-10">
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
            Services We Offer
          </h2>

          <p className="mt-4 text-slate-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.data?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <SeeMore link="/products" />
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;
