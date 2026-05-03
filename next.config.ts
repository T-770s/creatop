import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
  experimental: {
    optimizePackageImports: ['@react-three/drei', 'gsap', 'framer-motion'],
  },
  turbopack: {},
};

export default nextConfig;
