import fs from "node:fs";
import { JSDOM } from "jsdom";
import { listIcons, listWebComponents, listReactComponents } from "./list-icons-and-components";
import { makeIconTypes } from "./make-types";
import { makeWebComponent } from "./make-web-component";
import { makeStory } from "./make-storybook-story";
import { makeIconGallery } from "./make-storybook-icon-gallery";
import paths from "../svg-scripts/paths.cjs";
import { changeCaseTo } from "@gyldendal/kobber-base/utilities/index.js";

const componentPrefix = "kobber-";
const svgsListsFile = `dist/symbols/kobber-icons-lists.ts`;
const iconDirectory = "src/icon";
const svgsTypesFile = `dist/symbols/kobber-icons-types.ts`;
const iconsDirectory = paths.icons;
const webComponentsExportsListFile = "src/index.web-components.ts";
const reactExportsListFile = "src/index.react.tsx";

export const getSymbols = (svgSpriteBuffer: Buffer) => {
  const svgSpriteFileAsString = svgSpriteBuffer.toString();
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgSpriteFileAsString, "text/html");
  const symbols: NodeListOf<SVGSymbolElement> = doc.querySelectorAll("symbol");
  return symbols;
};

class DOMParser {
  parseFromString(s: string, contentType = "text/html") {
    return new JSDOM(s, { contentType }).window.document;
  }
}

export const getIconNames = (symbolName: string) => ({
  unprefixed: symbolName.replace(componentPrefix, ""),
  unprefixedKebab: changeCaseTo(symbolName, "kebab").replace(componentPrefix, ""),
  prefixedCapitalized: changeCaseTo(symbolName, "pascal"),
  unprefixedCapitalized: changeCaseTo(symbolName, "pascal").replace(changeCaseTo(componentPrefix, "pascal"), ""),
});

export const makeComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    const webComponentCode = makeWebComponent(symbol);

    fs.mkdirSync(`${iconsDirectory}/${iconNames.unprefixed}`);
    fs.writeFileSync(`${iconsDirectory}/${iconNames.unprefixed}/index.ts`, webComponentCode);
  });
};

export const listComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  const webComponentsExportsListString = listWebComponents(symbols);
  const reactExportsListString = listReactComponents(symbols);

  fs.writeFileSync(reactExportsListFile, reactExportsListString);
  fs.writeFileSync(webComponentsExportsListFile, webComponentsExportsListString);
};

export const makeStories = (symbols: NodeListOf<SVGSymbolElement>) => {
  const iconGalleryString = makeIconGallery(symbols);
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    const storyFileString = makeStory(symbol);

    fs.writeFileSync(`${iconsDirectory}/${iconNames.unprefixed}/index.stories.ts`, storyFileString);
  });
  fs.writeFileSync(`${iconDirectory}/index.mdx`, iconGalleryString);
};

export const listSvgSymbolsAndTypes = (symbols: NodeListOf<SVGSymbolElement>) => {
  fs.writeFileSync(svgsListsFile, listIcons(symbols));
  fs.writeFileSync(svgsTypesFile, makeIconTypes(symbols));
};
