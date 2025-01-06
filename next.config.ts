import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //adopt Partial Prerendering (PPR) for specific routes
  experimental: {
    ppr: true
  },
};

export default nextConfig;
