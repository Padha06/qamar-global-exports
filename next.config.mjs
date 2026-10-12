import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [{ source: "/brands", destination: "/products", permanent: true }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
    formats: ["image/avif", "image/webp"],
    // Fewer device variants = fewer optimizer jobs + smaller payloads.
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [96, 128, 256, 384],
    qualities: [50, 55, 60, 65, 75],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
