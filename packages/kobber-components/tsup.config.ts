import fs from "fs";
import { defineConfig } from "tsup";
import { cssModules } from "./src/index.vanilla-css";

const chunks = "chunks";

const reactDirectory = "react";

const reactSsrSafeDirectory = "react-ssr-safe";

const webComponentsDirectory = "web-components";

const vanillaDirectory = "vanilla";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
};

removeDirectory(chunks);
removeDirectory(reactDirectory);
removeDirectory(reactSsrSafeDirectory);
removeDirectory(webComponentsDirectory);
removeDirectory(vanillaDirectory);

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.tsx",
    [`${reactSsrSafeDirectory}/index`]: "src/index.react-ssr-safe.tsx",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
    [`${vanillaDirectory}/index`]: "src/index.vanilla-js.ts",
  },
  format: ["esm"],
  dts: true,
  outDir: "./dist",
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
  onSuccess() {
    return new Promise(resolve => {
      // fix build crash when this css is actually needed
      // createCss();
      resolve();
    });
  },
}));

const createCss = () => {
  for (const cssModule of cssModules) {
    fs.writeFileSync(
      `${vanillaDirectory}/${cssModule.id}.module.css`,
      cssModule.styles.map(style => style.trim()).join("\n"),
    );
  }
};
