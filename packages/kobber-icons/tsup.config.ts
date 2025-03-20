import fs from "node:fs";
import { defineConfig } from "tsup";
import { getSymbols, listComponents, listSvgSymbolsAndTypes, makeComponents, makeStories } from "./tsup-scripts";

const outDir = "dist";
const symbolsDirectory = `symbols`;
const svgSpriteFile = `${outDir}/${symbolsDirectory}/kobber-icons.svg`;
const assets = "assets";
const chunks = "chunks";
const reactDirectory = "react";
const reactSsrSafeDirectory = "react-ssr-safe";
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
listSvgSymbolsAndTypes(symbols);
listComponents(symbols);

export default defineConfig(() => ({
  entry: {
    [`${reactDirectory}/index`]: "src/index.react.tsx",
    [`${reactSsrSafeDirectory}/index`]: "src/index.react-ssr-safe.tsx",
    [`${webComponentsDirectory}/index`]: "src/index.web-components.ts",
    [`${symbolsDirectory}/kobber-icons-types`]: `${iconDirectory}/types/kobber-icons-types.ts`,
  },
  format: ["esm"],
  dts: true,
  outDir: outDir,
  clean: false,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
    options.assetNames = `${assets}/[name]-[hash]`;
  },
}));
