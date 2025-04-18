"use client";

import Image from "next/image";
import CustomChevronDown from "./chevron-down";
import { useState } from "react";

interface ServicesItemProps {
  image: string;
  title: string;
  content: string;
}

const ServicesItem = ({ image, title, content }: ServicesItemProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div
      className={`flex w-1/3 flex-col space-y-10 rounded-[16px] border border-[#DADADA] p-8 ${
        !isOpened ? "h-52" : ""
      }`}
    >
      <Image
        src={image}
        alt="financial management icon"
        width={40}
        height={40}
      />
      <button
        className="flex flex-row items-center justify-between"
        onClick={() => setIsOpened(!isOpened)}
      >
        <p className="w-40 text-start text-2xl font-semibold">{title}</p>
        <CustomChevronDown
          className={`transition-transform duration-200 ${
            isOpened ? "rotate-180" : ""
          }`}
        />
      </button>
      <p
        className={`transition-opacity duration-300 ${
          isOpened ? "block" : "hidden"
        }`}
      >
        {content}
      </p>
    </div>
  );
};

export default ServicesItem;
