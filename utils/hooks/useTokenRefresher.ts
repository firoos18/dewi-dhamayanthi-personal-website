"use client";

import { refreshToken } from "@/services/auth/api";
import { useEffect } from "react";

export default function useTokenRefresher() {
  useEffect(() => {
    const interval = setInterval(
      async () => {
        try {
          await refreshToken();
        } catch (error) {
          console.error("Failed to refresh token", error);
          window.location.href = "/cms/auth?login=true";
        }
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);
}
