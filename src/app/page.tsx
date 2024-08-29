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
import OurTeamPage from "@/components/OurTeam";
import ContactUs from "@/components/ContactUs";
// import Services from "@/components/servicescomp";
function page() {
  return (
    <div className="bg-white">
      <SWRConfig value={swrConfig}>
        <HomePage />
        {/* <Services /> */}
        <Services />
        <ProductListPage />
        <WhyUs />
        <FAQ />
        <OurTeamPage />
        <ContactUs />
        <About />
      </SWRConfig>
    </div>
  );
}

export default page;
