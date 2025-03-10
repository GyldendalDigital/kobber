import { JSDOM } from "jsdom";
export { makeWebComponent } from "./make-web-component";
export { listWebComponents } from "./list-web-components";
export { listReactComponents } from "./list-react-components";
export { makeStory } from "./make-storybook-story";
export { makeIconGallery } from "./make-storybook-icon-gallery";
export { listIconTypes } from "./list-icon-types";
export { listIcons } from "./list-icons";

const componentPrefix = "kobber-";

export const getSymbols = (svgSpriteBuffer: Buffer) => {
  const svgSpriteFileAsString = svgSpriteBuffer.toString();
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgSpriteFileAsString, "text/html");
  const symbols: NodeListOf<SVGSymbolElement> = doc.querySelectorAll("symbol");

  return symbols;
};

export class DOMParser {
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
