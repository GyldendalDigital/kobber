import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],
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
