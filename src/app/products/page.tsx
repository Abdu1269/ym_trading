"use client";

import fetcher from "@/shared/utils/fetcher";
import React from "react";
import useSWR from "swr";
import { CollectionQuery } from "@/model/collection.model";
import { Product } from "@/model/product.model";
import Image from "next/image";
import Link from "next/link";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";

const ProductListPage = () => {
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
    return <ErrorPage />;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
          Our Products
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16">
          Our company specializes in importing and exporting a diverse range of
          products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products?.data?.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                alt="product image"
                src={product.coverPage || "/trade.jpg"}
                width={500}
                height={350}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  <Link href={`/products/detail/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
