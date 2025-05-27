import fs from "fs";
import { defineConfig } from "tsup";

const outDir = "dist";

const chunks = "chunks";
const reactDirectory = "react";
const webComponentsDirectory = "web-components";

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.ts",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
  },
  format: ["esm"],
  dts: true,
  outDir: outDir,
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
  onSuccess() {
    return new Promise(resolve => {
      resolve();
    });
  },
}));
