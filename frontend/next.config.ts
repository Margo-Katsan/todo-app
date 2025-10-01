import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  resolve: {
    alias: {
      "@components": "/src/app/components",
      "@store": "/src/app/store",
      "@hooks": "/src/app/hooks",
    },
  },
};

export default nextConfig;
