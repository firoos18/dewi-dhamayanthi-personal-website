interface BlogLayoutProps {
  children: React.ReactNode;
}

import TopBar from "@/components/molecules/topbar";
import React from "react";

const layout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default layout;
