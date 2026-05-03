import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
  experimental: {
    optimizePackageImports: ['@react-three/drei', 'gsap', 'framer-motion'],
  },
  turbopack: {},
};

export default nextConfig;
