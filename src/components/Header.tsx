"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg"; // Assuming the logo is in the public folder

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-4 sm:px-6 lg:px-10 text-yellow-500">
      <div className="logo ml-4 sm:ml-8">
        <Image
          src={logo}
          alt="Logo"
          width={70}
          height={70}
          className="sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        />
      </div>

      <ul className="hidden h-full gap-3 lg:flex">
        {["Home", "About", "Products", "Services", "FAQ", "Our Team", "Blogs"].map((text) => (
          <Link
            key={text}
            className="mt-10 ml-6 lg:ml-10 font-serif hover:font-bold text-lg lg:text-xl"
            href={text === "Home" ? "/" : `/${text.replace(/\s+/g, '').toLowerCase()}`}
          >
            {text}
          </Link>
        ))}
      </ul>

      <div className="lg:hidden">
        <button
          aria-label="Menu"
          title="Menu"
          className="text-yellow-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-24 right-3 w-1/2 bg-emerald-900 shadow-md lg:hidden">
          <ul className="flex flex-col items-center py-4">
            {["Home", "About", "Products", "Services", "FAQ", "Our Team", "Blogs"].map((text) => (
              <Link
                key={text}
                className="mt-2 text-lg font-serif hover:font-bold"
                href={text === "Home" ? "/" : `/${text.replace(/\s+/g, '').toLowerCase()}`}
                onClick={toggleMenu}
              >
                {text}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
