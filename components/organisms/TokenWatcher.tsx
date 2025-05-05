"use client";

import useAuthStore from "@/store/useAuthStore";
import { deleteToken, getToken, setToken } from "@/utils/cookies/cookies.data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { refreshToken } from "@/services/auth/api";
import { toast } from "react-toastify";

interface JwtPayload {
  exp: number;
}

const TokenWatcher = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  useEffect(() => {
    const setUpWatcher = async () => {
      const accessToken = await getToken();

      if (!accessToken) return;

      const decodedAccessToken = jwt.decode(accessToken) as JwtPayload;

      if (!decodedAccessToken || !decodedAccessToken.exp) {
        console.warn("Invalid token structure");
        await deleteToken();
        logout();
        router.push("/cms/auth?login=true");
        return;
      }

      const now = Date.now();
      const expiry = decodedAccessToken.exp * 1000;
      const timeUntilExpiry = expiry - now;

      if (timeUntilExpiry <= 0) {
        toast.info("Token already expired");
        await deleteToken();
        logout();
        router.push("/cms/auth?login=true");
        return;
      }

      const refreshTime = timeUntilExpiry - 10_000;

      const timer = setTimeout(async () => {
        try {
          const res = await refreshToken();

          if (res.status && res.data?.accessToken) {
            await setToken(res.data.accessToken);
            toast.info("Token refreshed");
            setUpWatcher();
          } else {
            throw new Error("Failed to refresh");
          }
        } catch (err) {
          toast.error(`Error refreshing token: ${err}`);
          await deleteToken();
          logout();
          router.push("/cms/auth?login=true");
        }
      }, refreshTime);
      return () => clearTimeout(timer);
    };

    setUpWatcher();
  }, [logout, router]);

  return null;
};

export default TokenWatcher;
