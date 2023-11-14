import react from "@astrojs/react";
import node from "@astrojs/node";
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
        "toidentifier",
      ],
    },
    plugins: [vanillaExtractPlugin()],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
