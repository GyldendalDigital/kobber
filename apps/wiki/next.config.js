const withLitSSR = require("@lit-labs/nextjs")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Azure does not support optimized images
    unoptimized: true,
  },
};

module.exports = withLitSSR(nextConfig);
