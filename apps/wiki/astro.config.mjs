import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
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
  },
  output: "server",
  adapter: cloudflare(),
});
