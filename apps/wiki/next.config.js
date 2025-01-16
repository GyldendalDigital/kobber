/** @type {import('next').NextConfig} */
const nextConfig = {
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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig

// Sentry PR: https://github.com/GyldendalDigital/kobber/pull/111

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
