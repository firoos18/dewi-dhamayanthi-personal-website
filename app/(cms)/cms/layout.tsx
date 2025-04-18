import React from "react";

interface CmsLayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<CmsLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
