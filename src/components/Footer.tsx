"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.jpg"; // Ensure the path is correct
import SocialMedias from "./SocialMedias";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-700 to-emerald-900 text-sky-900 p-6 lg:p-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-2">
          <Image src={logo} alt="Logo" width={150} height={150} className="mb-4" />
          <p className="text-xl text-neutral-950 font-semibold text-center lg:text-left">
            YM TRADING PLC
            <br />
            Since 1992
          </p>
          <SocialMedias />
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <nav className="flex flex-col text-white space-y-4 lg:space-y-2">
            <h6 className="text-lg  font-semibold text-neutral-100">Services</h6>
            <a className="link link-hover">Import</a>
            <a className="link link-hover">Export</a>
            <a className="link link-hover">Commission Works</a>
          </nav>

          <nav className="flex flex-col text-white space-y-4 lg:space-y-2">
            <h6 className="text-lg font-semibold text-neutral-100">Company</h6>
            <a className="link link-hover" href="/about">About Us</a>
            <a className="link link-hover"href="#contact-us">Contact</a>
          </nav>

          <nav className="flex flex-col text-white space-y-4 lg:space-y-2">
            <h6 className="text-lg font-semibold text-neutral-100">Legal</h6>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>
        </div>
        
        {/* Rating Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="rating rating-lg">
            <input
              type="radio"
              name="rating-9"
              className="rating-hidden"
              aria-label="rating-1"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
              aria-label="rating-2"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
              defaultChecked
              aria-label="rating-3"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
              aria-label="rating-4"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
            />
          </div>
          <h1 className="text-lg text-white font-semibold">Rate Us</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
