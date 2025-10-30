import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        client: path.resolve(__dirname, "client.tsx"),
        server: path.resolve(__dirname, "server.tsx"),
      },
    },
  },
});
