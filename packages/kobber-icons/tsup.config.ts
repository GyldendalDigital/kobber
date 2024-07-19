import fs from "fs";
import { defineConfig } from "tsup";
import { JSDOM } from "jsdom";

const assets = "assets";
const chunks = "chunks";
const reactDirectory = "react";
const svgSpriteFolder = "symbols";
const svgSpriteFile = "kobber-icons.svg";
const componentHelperFile = "kobber-icons-lists.ts";
const webComponentsDirectory = "web-components";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmSync(directory, { recursive: true });
};

class DOMParser {
  parseFromString(s: string, contentType = "text/html") {
    return new JSDOM(s, { contentType }).window.document;
  }
}

const listAllSvgSymbols = () => {
  const svgSpriteFolder = "symbols";
  const file = fs.readFileSync(`${svgSpriteFolder}/${svgSpriteFile}`);
  const fileAsString = file.toString();

  const parser = new DOMParser();
  const doc = parser.parseFromString(fileAsString, "text/html");
  const symbols = doc.querySelectorAll("symbol");
  if (symbols) {
    let iconTypeString = "export type IconType = \n";
    symbols.forEach((symbol: SVGSymbolElement) => {
      iconTypeString = `${iconTypeString}  | "${symbol.id}"\n`;
    });
    iconTypeString = `${iconTypeString};`;
    let iconsListString = "export const iconsList = [\n";
    symbols.forEach((symbol: SVGSymbolElement, index: number) => {
      if (index > 0) {
        iconsListString = `${iconsListString}, \n`;
      }
      iconsListString = `${iconsListString} "${symbol.id}"`;
    });
    iconsListString = `${iconsListString}\n];`;
    fs.writeFileSync(`${svgSpriteFolder}/${componentHelperFile}`, `${iconTypeString} \n\n ${iconsListString}`);
  }
};

removeDirectory(assets);
removeDirectory(chunks);
removeDirectory(reactDirectory);
removeDirectory(webComponentsDirectory);

listAllSvgSymbols();

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
