"use client";

import React, { useEffect, useState } from "react";
import SidebarMenuItem, {
  ISidebarMenuItemProps,
} from "../atoms/SidebarMenuItem";
import { BookIcon, BookOpenIcon, HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems: Pick<ISidebarMenuItemProps, "icon" | "name" | "iconActive">[] =
  [
    {
      icon: <HomeIcon color="#B1C0C0" size={20} />,
      name: "Home",
      iconActive: <HomeIcon color="#0B414B" size={20} />,
    },
    {
      icon: <BookIcon color="#B1C0C0" size={20} />,
      name: "EBook",
      iconActive: <BookIcon color="#0B414B" size={20} />,
    },
    {
      icon: <BookOpenIcon color="#B1C0C0" size={20} />,
      name: "Post",
      iconActive: <BookOpenIcon color="#0B414B" size={20} />,
    },
  ];

const SidebarMenuItems = () => {
  const path = usePathname();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const currentPage = menuItems.find((item) =>
      path.includes(item.name.toLowerCase()),
    );
    if (currentPage) {
      setActivePage(currentPage.name);
    }
  }, [path]);

  return (
    <div className="flex h-[108px] w-full flex-col">
      {menuItems.map((item, i) => {
        return (
          <SidebarMenuItem
            icon={item.icon}
            iconActive={item.iconActive}
            name={item.name}
            activePage={activePage}
            setActivePage={setActivePage}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default SidebarMenuItems;
