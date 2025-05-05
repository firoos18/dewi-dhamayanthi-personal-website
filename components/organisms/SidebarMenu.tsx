import React from "react";
import SidebarMenuItems from "../molecules/SidebarMenuItems";
import SidebarProfile from "../atoms/SidebarProfile";
import LogoutButton from "../atoms/LogoutButton";
const SidebarMenu = () => {
  return (
    <div className="flex h-screen w-full flex-col items-start justify-between border-r-[1px] border-[#E0E0E0] bg-white px-3 pb-9">
      <div className="flex w-full flex-col items-start space-y-10 pt-10">
        <SidebarProfile />
        <SidebarMenuItems />
      </div>
      <LogoutButton />
    </div>
  );
};

export default SidebarMenu;
