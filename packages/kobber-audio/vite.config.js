import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        format: "iife",
        dir: resolve(__dirname, "./dist"),
        entryFileNames: "main.js",
      },
    },
  },
})
