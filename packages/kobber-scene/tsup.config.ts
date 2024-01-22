import fs from "fs";
import { defineConfig } from "tsup";

const chunks = "chunks";

const cssDirectory = "css";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
};

removeDirectory(chunks);
removeDirectory(cssDirectory);

export default defineConfig(() => ({
  entry: {
    ["index"]: "src/index.ts"
  },
  format: ["esm"],
  dts: true,
  outDir: ".",
  clean: false,
  bundle: true,
  external: ["react"],
  loader: { ".css": "local-css" },
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  }
}));
