"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png"; // Ensure the path is correct
import SocialMedias from "./SocialMedias";
import Facebook from "@/public/svgs/facebook.svg";
import Instagram from "@/public/svgs/instagram.svg";
import Twitter from "@/public/svgs/twitter.svg";
const Footer = () => {
  return (
    <footer className="bg-emerald-700">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={150}
                className="mb-4"
              />
            </div>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className=" text-amber-400 font-bold">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-200 transition hover:opacity-75"
                  >
                    {" "}
                    Import{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-200 transition hover:opacity-75"
                  >
                    {" "}
                    Export{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-200 transition hover:opacity-75"
                  >
                    {" "}
                    Commission Works{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-amber-400">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-200 transition hover:opacity-75"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-amber-400">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-200 transition hover:opacity-75"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-200 transition hover:opacity-75"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-amber-400">Rate Us</p>

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
                  title="rating"
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  title="rating"
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-100">
          &copy; {new Date().getFullYear()}. YM Trading Plc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
