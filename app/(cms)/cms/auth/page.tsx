import AuthPage from "@/components/organisms/AuthPage";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <AuthPage />
    </Suspense>
  );
};

export default Page;
