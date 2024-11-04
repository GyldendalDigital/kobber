/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   // Azure does not support optimized images
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
