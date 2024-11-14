import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), basicSsl()],
  server: {

    https: true
  },
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
