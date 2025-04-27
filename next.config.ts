import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // Optional: Add other Next.js config options here
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;