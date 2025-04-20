import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ftqsxzegpwlsdwhlasxi.supabase.co",
      },
    ],
  },
};

export default nextConfig;
