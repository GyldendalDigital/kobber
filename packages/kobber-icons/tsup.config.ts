import fs from "node:fs";
import { defineConfig } from "tsup";
import {
  getIconNames,
  listIcons,
  listIconTypes,
  listReactComponents,
  listWebComponents,
  makeIconGallery,
  makeWebComponent,
  makeStory,
  getSymbols,
} from "./tsup-scripts";

const assets = "assets";
const chunks = "chunks";
const reactDirectory = "react";
const webComponentsDirectory = "web-components";
const svgSpriteDirectory = "symbols";
const svgSpriteFile = `${svgSpriteDirectory}/kobber-icons.svg`;
const componentHelperFile = `${svgSpriteDirectory}/kobber-icons-lists.ts`;
const iconDirectory = "src/icon";
const iconsDirectory = `${iconDirectory}/icons`;
const webComponentsList = "src/index.web-components.ts";
const reactList = "src/index.react.tsx";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
};

const symbols = getSymbols(fs.readFileSync(svgSpriteFile));

const makeComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    const webComponentCode = makeWebComponent(symbol);

    fs.mkdirSync(`${iconsDirectory}/${iconNames.unprefixed}`);
    fs.writeFileSync(`${iconsDirectory}/${iconNames.unprefixed}/index.js`, webComponentCode);
  });
};

const listComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  const webComponentExports = listWebComponents(symbols);
  const reactString = listReactComponents(symbols);

  fs.writeFileSync(reactList, reactString);
  fs.writeFileSync(webComponentsList, webComponentExports);
};

const makeStories = (symbols: NodeListOf<SVGSymbolElement>) => {
  const iconGalleryString = makeIconGallery(symbols);
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    const storyFileString = makeStory(symbol);

    fs.writeFileSync(`${iconsDirectory}/${iconNames.unprefixed}/index.stories.ts`, storyFileString);
  });
  fs.writeFileSync(`${iconDirectory}/index.mdx`, iconGalleryString);
};

const listSvgSymbols = () => {
  const iconTypeString = listIconTypes(symbols);
  const iconsListString = listIcons(symbols);

  fs.writeFileSync(componentHelperFile, `${iconTypeString} \n\n ${iconsListString}`);
};

removeDirectory(assets);
removeDirectory(chunks);
removeDirectory(iconsDirectory);
removeDirectory(reactDirectory);
removeDirectory(webComponentsDirectory);

fs.mkdirSync(iconsDirectory);

makeComponents(symbols);
makeStories(symbols);
listSvgSymbols();
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
  bundle: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
    options.assetNames = `${assets}/[name]-[hash]`;
  },
}));
