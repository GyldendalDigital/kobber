/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // Azure does not support optimized images
    unoptimized: true,
    dangerouslyAllowSVG: true, // ERROR (source: placeHolderImage (utils)):  The requested resource "https://placehold.co/600x400/eae0e1/691837?text=placeholder%5Cnimage" has type "image/svg+xml; charset=utf-8" but dangerouslyAllowSVG is disabled
  },
  images: {
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
    ],
  },
}

export default nextConfig

// export default withSentryConfig(nextConfig, {
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options

//   org: "kompaniet",
//   project: "javascript-nextjs",

//   // Only print logs for uploading source maps in CI
//   silent: !process.env.CI,

//   // For all available options, see:
//   // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//   // Upload a larger set of source maps for prettier stack traces (increases build time)
//   widenClientFileUpload: true,

//   // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//   // This can increase your server load as well as your hosting bill.
//   // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//   // side errors will fail.
//   // tunnelRoute: "/monitoring",

//   // Hides source maps from generated client bundles
//   hideSourceMaps: true,

//   // Automatically tree-shake Sentry logger statements to reduce bundle size
//   disableLogger: true,

//   telemetry: false,
// })
