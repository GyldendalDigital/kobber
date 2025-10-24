import fs from "node:fs";
import { defineConfig } from "tsup";
import {
  getSymbols,
  listComponents,
  listSvgSymbolsAndTypes,
  makeComponents,
  makeStories,
} from "./tsup-scripts";
import paths from "./svg-scripts/paths.cjs";
import { entries } from "./entries";

const outDir = "dist";
const symbolsDirectory = `symbols`;
const svgSpriteFile = `${outDir}/${symbolsDirectory}/kobber-icons.svg`;
const assets = "assets";
const chunks = "chunks";
const iconsDirectory = paths.icons;

const cleanDirectory = (directory: string) => {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true });
  }
  fs.mkdirSync(directory);
};

const symbols = getSymbols(fs.readFileSync(svgSpriteFile));

cleanDirectory(iconsDirectory);

makeComponents(symbols);
makeStories(symbols);
listSvgSymbolsAndTypes(symbols);
listComponents(symbols);

export default defineConfig(() => ({
  entry: entries,
  format: ["esm"],
  dts: true,
  clean: false, // Avoid cleaning away symbols/kobber-icons.svg built in previous step.
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
    options.assetNames = `${assets}/[name]-[hash]`;
  },
  onSuccess: "echo TSC && tsc --noEmit", // type check non exported files as well
}));
