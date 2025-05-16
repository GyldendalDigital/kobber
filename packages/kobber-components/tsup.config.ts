import fs from "fs";
import { defineConfig } from "tsup";
import { cssModules } from "./src/index.vanilla-css";

const outDir = "dist";

const chunks = "chunks";

const reactDirectory = "react";

const webComponentsDirectory = "web-components";

const vanillaDirectory = "vanilla";

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.tsx",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
    [`${vanillaDirectory}/index`]: "src/index.vanilla-js.ts",
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
      createCss();
      resolve();
    });
  },
}));

const createCss = () => {
  for (const cssModule of cssModules) {
    fs.writeFileSync(
      `${outDir}/${vanillaDirectory}/${cssModule.id}.module.css`,
      cssModule.styles.map(style => style.trim()).join("\n"),
    );
  }
};
