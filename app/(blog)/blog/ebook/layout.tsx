import BlogEbookSidebar from "@/components/molecules/BlogEbookSidebar";
import React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-row items-center">
      <div className="min-h-screen w-1/6">
        <BlogEbookSidebar />
      </div>
      <div className="min-h-screen w-5/6">{children}</div>
    </div>
  );
};

export default layout;
