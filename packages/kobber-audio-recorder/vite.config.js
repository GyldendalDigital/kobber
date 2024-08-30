import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `main.mjs`,
      }
    },
    lib: {
      entry: "./src/main.mjs",
      formats: ["es"],
      fileName: "main",
      name: "audiorecorder",
    },
  },
});
