/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // Azure does not support optimized images
    unoptimized: true,
    dangerouslyAllowSVG: true, // ERROR (source: placeHolderImage (utils)):  The requested resource "https://placehold.co/600x400/eae0e1/691837?text=placeholder%5Cnimage" has type "image/svg+xml; charset=utf-8" but dangerouslyAllowSVG is disabled
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "dam-p-gyldendal.pqcloud.eu",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
