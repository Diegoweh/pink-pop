import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nongchatmakeup.com',
      },
    ],
  },
};

export default nextConfig;
