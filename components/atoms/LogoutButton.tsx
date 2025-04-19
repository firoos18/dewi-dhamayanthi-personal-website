"use client";

import React from "react";
import { Button } from "./button";
import { LogOutIcon } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    redirect("/cms/auth");
  };

  return (
    <Button
      type="button"
      variant={"destructive"}
      size={"sm"}
      onClick={handleLogout}
    >
      <LogOutIcon />
      Log Out
    </Button>
  );
};

export default LogoutButton;
