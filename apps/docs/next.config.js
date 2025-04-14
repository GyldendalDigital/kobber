/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    loader: "custom",
    loaderFile: "./lib/damImageLoader.ts",
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
      {
        protocol: "https",
        hostname: "dam-prod.gyldendaldigital.no",
        pathname: "**",
      },
    ],
  },
  turbopack: {
    // fixing "missing loader prop" error with turbopack
    resolveAlias: {
      "next/dist/shared/lib/image-loader": "./lib/damImageLoader.ts",
    },
  },
}

export default nextConfig
