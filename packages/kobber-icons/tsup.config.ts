import fs from "node:fs";
import { defineConfig } from "tsup";
import { getSymbols, listComponents, listSvgSymbols, makeComponents, makeStories } from "./tsup-scripts";

const svgSpriteFile = `symbols/kobber-icons.svg`;

const assets = "assets";
const chunks = "chunks";
const reactDirectory = "react";
const webComponentsDirectory = "web-components";
const iconDirectory = "src/icon";
const iconsDirectory = `${iconDirectory}/icons`;

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
};

const symbols = getSymbols(fs.readFileSync(svgSpriteFile));

removeDirectory(assets);
removeDirectory(iconsDirectory);

fs.mkdirSync(iconsDirectory);

makeComponents(symbols);
makeStories(symbols);
listSvgSymbols(symbols);
listComponents(symbols);

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.tsx",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
  },
  format: ["esm"],
  dts: true,
  outDir: ".",
  clean: false,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
    options.assetNames = `${assets}/[name]-[hash]`;
  },
}));
