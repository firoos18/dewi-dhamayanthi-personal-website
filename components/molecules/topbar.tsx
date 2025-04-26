"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 h-fit w-full p-4 text-lg font-bold leading-tight text-primary lg:text-xl ${
        isScrolled ? "shadow-top-bar" : "shadow-sm"
      } z-50 flex flex-row items-center justify-between bg-background transition-shadow duration-300`}
    >
      <div className="flex flex-col -space-y-1">
        <p>Dewi</p>
        <p>Dhayamanthi.</p>
      </div>
      <div className="mr-5 hidden flex-row space-x-8 font-semibold text-black lg:flex lg:text-lg">
        <Link href={"blog/ebook"} className="self-center">
          Blog
        </Link>
        <Link href={"blog/ebook"} className="self-center">
          EBook
        </Link>
        <button className="rounded-full border-2 border-black px-4 py-2">
          Book a Call
        </button>
        <button className="rounded-full bg-black px-4 py-2 text-white">
          Contact Me
        </button>
      </div>
      <div className="flex flex-row space-x-2 rounded-full border-[1px] border-[#D0D0D0] py-1 pl-1 pr-2 lg:hidden">
        <div className="rounded-full bg-black px-4 py-2">
          <p className="text-[12px] font-semibold text-white">Contact Me</p>
        </div>
        <button>
          <Image
            src={"/menu.png"}
            alt="Menu Icon"
            width={24}
            height={24}
            priority
            style={{ objectFit: "contain" }}
          />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
