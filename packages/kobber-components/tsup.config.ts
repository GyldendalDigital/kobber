import fs from "fs";
import { defineConfig } from "tsup";

const chunks = "chunks";

const reactDirectory = "react";

const reactSsrSafeDirectory = "react-ssr-safe";

const webComponentsDirectory = "web-components";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
};

removeDirectory(chunks);
removeDirectory(reactDirectory);
removeDirectory(reactSsrSafeDirectory);
removeDirectory(webComponentsDirectory);

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.tsx",
    [`${reactSsrSafeDirectory}/index`]: "src/index.react-ssr-safe.tsx",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
  },
  format: ["esm"],
  dts: true,
  outDir: ".",
  clean: false,
  bundle: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
}));
