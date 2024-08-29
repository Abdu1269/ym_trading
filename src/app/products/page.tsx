"use client";

import { SeeMore } from "@/components/CTA/cta";
import ErrorPage from "@/components/ErrorPage";
import LoadingPage from "@/components/LoadingPage";
import ProductsItem from "@/components/product-card";
import { CollectionQuery } from "@/model/collection.model";
import { Product } from "@/model/product.model";
import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";

function Products() {
  // const [ showServiece , setShowProduct] = useState(2)
  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "updatedAt",
      },
    ],
  };

  const pathname = usePathname();
  const {
    data: products,
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
    return <ErrorPage />;
  }

  console.log(products);
  return (
    <div>
      {pathname === "/products" && <div className="mt-24"></div>}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center mb-8">
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
              Products We Offer
            </h2>

            <p className="mt-4 text-slate-700">
              We are committed to providing exceptional products to our clients.
              Our team of experts is dedicated to delivering high-quality
              solutions that meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
            {products.data.map((product: Product) => (
              <ProductsItem key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <p className="text-xs text-gray-900">
                3<span className="mx-0.25">/</span>
                {products?.count}
              </p>

              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
