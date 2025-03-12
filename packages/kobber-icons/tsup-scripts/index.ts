import fs from "node:fs";
import { JSDOM } from "jsdom";
import { listWebComponents, listReactComponents } from "./list-components";
import { listIcons, listIconTypes } from "./list-icons";
import { makeWebComponent } from "./make-web-component";
import { makeStory } from "./make-storybook-story";
import { makeIconGallery } from "./make-storybook-icon-gallery";

const componentPrefix = "kobber-";
const svgsAndSymbolsListsFile = `symbols/kobber-icons-lists.ts`;
const iconDirectory = "src/icon";
const iconsDirectory = `${iconDirectory}/icons`;
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

// Utility snakeToPascalCase - copied from https://stackoverflow.com/questions/44082153/javascript-method-for-changing-snake-case-to-pascalcase#answer-44084313
const snakeToPascalCase = (word: string): string => {
  return word
    .split("/")
    .map(snake => {
      let pascal = snake
        .split("_")
        .map(substr => substr.charAt(0).toUpperCase() + substr.slice(1))
        .join("");
      pascal = pascal
        .split("-")
        .map(substr => substr.charAt(0).toUpperCase() + substr.slice(1))
        .join("");
      return pascal;
    })
    .join("/");
};

export const getIconNames = (symbolName: string) => ({
  unprefixed: symbolName.replace(componentPrefix, ""),
  prefixedCapitalized: snakeToPascalCase(symbolName),
  unprefixedCapitalized: snakeToPascalCase(symbolName).replace(snakeToPascalCase(componentPrefix), ""),
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

export const listSvgSymbols = (symbols: NodeListOf<SVGSymbolElement>) => {
  const iconTypeString = listIconTypes(symbols);
  const iconsListString = listIcons(symbols);

  const svgsAndSymbolsListsString = `${iconTypeString}

${iconsListString}`;

  fs.writeFileSync(svgsAndSymbolsListsFile, svgsAndSymbolsListsString);
};
