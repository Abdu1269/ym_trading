"use client";

import Blogs from "@/components/Blog";
import FAQ from "@/components/FAQ";
import ProductListPage from "@/components/Products";
import Services from "@/components/Services";
import WhyUs from "@/components/whyUs";
import swrConfig from "@/shared/swrConfig";
import { SWRConfig } from "swr";
import About from "./about/page";
import HomePage from "./home/page";

function page() {
  return (
    <div className="bg-white">
      <SWRConfig value={swrConfig}>
        <HomePage />
        <Services />
        <ProductListPage />
        <WhyUs />
        <FAQ />
        <Blogs />
        <About />
      </SWRConfig>
    </div>
  );
}

export default page;
