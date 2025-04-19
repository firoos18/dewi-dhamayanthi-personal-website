import SidebarMenu from "@/components/organisms/SidebarMenu";
import React from "react";

interface ICmsLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ICmsLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-row">
      <div className="w-1/6">
        <SidebarMenu />
      </div>
      <div className="h-full w-5/6 bg-[#F8F7F2]">{children}</div>
    </div>
  );
};

export default Layout;
