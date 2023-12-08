/// <reference types="vitest" />
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {},
  plugins: [
      svelte({
      emitCss: false,
      preprocess: vitePreprocess(),
    }),
  ],
  build: {
    lib: {
      entry: "./index.ts",
      name: "Placeholder",
      formats: ["es"],
      fileName: "gd-block-placeholder",
    },
  },
})