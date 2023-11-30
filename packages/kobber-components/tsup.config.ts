import fs from "fs";
import { defineConfig } from "tsup";

const chunks = "chunks";

const reactDirectory = "react";

const webComponentsDirectory = "web-components";

const cssDirectory = "css";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
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
  async onSuccess() {
    moveCss();
  },
}));

// The react and web-components directories now contains equal css files.
// Move one css file to the css directory and remove the other.

const moveCss = () => {
  fs.mkdirSync(cssDirectory);
  fs.renameSync(
    `${reactDirectory}/index.css`,
    `${cssDirectory}/components.css`
  );
  fs.rmSync(`${webComponentsDirectory}/index.css`);
};
