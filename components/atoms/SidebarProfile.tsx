"use client";

import useAuthStore from "@/store/useAuthStore";
import React, { useEffect } from "react";

const SidebarProfile = () => {
  const { me, userData, isLoading } = useAuthStore();

  useEffect(() => {
    me();
  }, [me]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="flex flex-col items-start leading-none text-black">
          <p className="font-semibold">{userData?.name}</p>
          <p className="text-xs font-light">{userData?.email}</p>
        </div>
      )}
    </div>
  );
};

export default SidebarProfile;
