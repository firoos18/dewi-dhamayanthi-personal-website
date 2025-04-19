"use client";

import Link from "next/link";
import React from "react";

export interface ISidebarMenuItemProps {
  name: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  activePage: string;
  setActivePage: (name: string) => void;
}

const SidebarMenuItem: React.FC<ISidebarMenuItemProps> = ({
  name,
  icon,
  iconActive,
  activePage,
  setActivePage,
}) => {
  return (
    <div onClick={() => setActivePage(name)} className="w-full">
      <Link
        href={`/cms/dashboard/${name.toLowerCase()}`}
        className={`flex h-12 w-full cursor-pointer flex-row items-center space-x-2 px-3 py-2 ${activePage === name ? "rounded-md bg-[#F8F7F2]" : "bg-transparent"}`}
      >
        {activePage === name ? iconActive : icon}
        <p
          className={`${activePage === name ? "text-base font-medium text-[#0B414B]" : "text-sm font-light text-[#B1C0C0]"}`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
};

export default SidebarMenuItem;
