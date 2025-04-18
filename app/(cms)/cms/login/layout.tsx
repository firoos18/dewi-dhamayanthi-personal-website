import React from "react";

interface CmsLoginLayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<CmsLoginLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
