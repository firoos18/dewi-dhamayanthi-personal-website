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
      className={`w-full h-fit p-4 text-primary text-lg font-bold leading-tight sticky top-0 ${
        isScrolled ? "shadow-top-bar" : "shadow-sm"
      } transition-shadow duration-300`}
    >
      <p>Dewi</p>
      <p>Dhayamanthi.</p>
    </div>
  );
};

export default TopBar;
