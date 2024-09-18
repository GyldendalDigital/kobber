const withLitSSR = require("@lit-labs/nextjs")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

module.exports = withLitSSR(nextConfig);
