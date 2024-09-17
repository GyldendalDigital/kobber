/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Azure static web apps does not support optimized images
    // https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid#unsupported-features-in-preview
    unoptimized: true,
  },
};

export default nextConfig;
