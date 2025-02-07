"use client";

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
      className={`w-full h-fit p-4 text-primary text-lg lg:text-xl font-bold leading-tight sticky top-0 ${
        isScrolled ? "shadow-top-bar" : "shadow-sm"
      } transition-shadow duration-300 bg-background z-50 flex flex-row justify-between items-center`}
    >
      <div className="flex flex-col -space-y-1">
        <p>Dewi</p>
        <p>Dhayamanthi.</p>
      </div>
      <div className="hidden lg:flex flex-row lg:text-lg font-normal space-x-10 mr-10">
        <button>Blog</button>
        <button>E-Book</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default TopBar;
