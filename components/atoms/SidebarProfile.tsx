"use client";

import useAuthStore from "@/store/useAuthStore";
import React, { useEffect } from "react";
import { Skeleton } from "./skeleton";

const SidebarProfile = () => {
  const { me, userData, isLoading } = useAuthStore();

  useEffect(() => {
    me();
  }, [me]);

  return (
    <div className="flex w-full">
      {isLoading && (
        <div className="flex w-full flex-col space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-2 w-full" />
        </div>
      )}
      {!isLoading && userData && (
        <div className="flex flex-col items-start space-y-1 leading-none text-black">
          <p className="font-semibold">{userData?.name}</p>
          <p className="text-xs font-light">{userData?.email}</p>
        </div>
      )}
    </div>
  );
};

export default SidebarProfile;
