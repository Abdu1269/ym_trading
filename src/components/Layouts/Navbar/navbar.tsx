"use client";
import { cn } from "@/lib/_func/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { NavbarLinks } from "./link";
// import { PulseBeamsSecond } from "../../Portal/CTA/cta";
import ChevronRight from "@/public/svgs/chevron-right.svg";
// import { PulseBeamsSecond } from "@/src/components/CTA/cta";
export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        navbarRef.current?.classList.remove("bg-transparent");
        navbarRef.current?.classList.add("bg-white");
      } else {
        setScrolled(false);
        navbarRef.current?.classList.remove("bg-white");
        navbarRef.current?.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      ref={navbarRef}
      className={cn(
        `navbar fixed top-0 z-50 w-full bg-transparent`,
        scrolled && "rounded-bl-xl rounded-br-xl shadow-xl"
      )}
    >
      <div className="navbar-start">
        <div className="drawer z-999999">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-80 bg-white p-4 text-emerald-500">
              <li className="h-20">
                <div className="flex items-center justify-start">
                  <div className="px-2">
                    <Link href="/" className="">
                      <Image
                        src="/logo_1.png"
                        alt="menu"
                        width={80}
                        height={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-full"
                        priority={true}
                      />
                    </Link>
                  </div>
                  <h3 className="text-md font-bold">YM </h3>
                </div>
              </li>
              {NavbarLinks.map((link) => (
                <Link href={link.path} key={link.id}>
                  <li className="text-md my-1 flex flex-row items-center justify-between rounded-md bg-slate-700 px-3 py-3 font-semibold">
                    {link.title}
                    {/* <span>
                      <ChevronRight
                        className="h-5 w-5 text-white"
                        width={5}
                        height={5}
                      />
                    </span> */}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-10">
          <Link href="/" className="">
            <Image
              src="/logo_1.png"
              alt="menu"
              width={80}
              height={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full"
              priority={true}
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={cn(
            "menu menu-horizontal px-1 text-white",
            scrolled && "text-black"
          )}
        >
          {NavbarLinks.map((link) => (
            <li key={link.id} className="text-md px-2 font-semibold">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-5 md:px-5">
        {/* <PulseBeamsSecond
            title="Register"
            sx={"sm:w-20 sm:h-5 md:w-30 md:h-10 md:text-xs "}
            link="/register"
          /> */}
      </div>
    </div>
  );
}
