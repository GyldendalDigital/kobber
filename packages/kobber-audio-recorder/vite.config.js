import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: "./src/main.js",
      formats: ["es"],
      fileName: "main",
      name: "audiorecorder",
    },
  },
});
