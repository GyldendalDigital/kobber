import { svelte } from "@sveltejs/vite-plugin-svelte";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: "./src/preview",
  plugins: [handlebars({ partialDirectory: __dirname }), svelte(), react()],
});
