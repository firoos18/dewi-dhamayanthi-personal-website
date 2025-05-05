import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ftqsxzegpwlsdwhlasxi.supabase.co",
      },
      {
        protocol: "https",
        hostname: "ylbxvznekdzthkuttyzh.supabase.co",
      },
    ],
  },
};

export default nextConfig;
