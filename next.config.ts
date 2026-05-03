import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const useBasePath = process.env.GITHUB_PAGES === 'true';
const basePath = useBasePath ? '/creatop' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: useBasePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
  experimental: {
    optimizePackageImports: ['@react-three/drei', 'gsap', 'framer-motion'],
  },
  turbopack: {},
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: isProd
      ? (useBasePath ? 'https://t-770s.github.io/creatop' : 'https://creatop.app')
      : 'http://localhost:3000',
  },
};

export default nextConfig;
