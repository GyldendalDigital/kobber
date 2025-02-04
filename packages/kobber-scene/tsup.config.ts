import fs from "fs";
import { defineConfig } from "tsup";

const chunks = "chunks";

const reactDirectory = "react";

const webComponentsDirectory = "web-components";

const cssDirectory = "css";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmSync(directory, { recursive: true });
};

removeDirectory(chunks);
removeDirectory(reactDirectory);
removeDirectory(webComponentsDirectory);
removeDirectory(cssDirectory);

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.tsx",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
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
  },
}));
