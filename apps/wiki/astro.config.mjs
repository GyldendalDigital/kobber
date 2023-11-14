import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: [
        "solid-use",
        "react-icons",
        "@gyldendal/kobber-base",
        "path-to-regexp",
      ],
    },
    plugins: [vanillaExtractPlugin()],
  },
  output: "server",
  adapter: cloudflare(),
});
