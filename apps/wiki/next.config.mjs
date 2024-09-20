/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Azure does not support optimized images
    unoptimized: true,
  },
};

export default nextConfig;
