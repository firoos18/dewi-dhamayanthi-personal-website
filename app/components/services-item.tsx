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
      className={`flex flex-col p-8 border-[#DADADA] rounded-[16px] border space-y-10 w-1/3 ${
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
        <p className="text-2xl font-semibold w-40 text-start">{title}</p>
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
