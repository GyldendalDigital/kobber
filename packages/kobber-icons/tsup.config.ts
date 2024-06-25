import fs from "fs";
import { defineConfig } from "tsup";
import { JSDOM } from "jsdom";

const chunks = "chunks";
const reactDirectory = "react";
const svgSpriteFolder = "symbols";
const svgSpriteFile = "kobber-icons.svg";
const componentHelperFile = "kobber-icons-lists.ts";
const webComponentsDirectory = "web-components";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
};

removeDirectory(chunks);
removeDirectory(reactDirectory);
removeDirectory(webComponentsDirectory);

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
  },
  async onSuccess() {
    listAllSvgSymbols();
    copyIconsToOtherFolders();
  },
}));

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
    let iconsListString = "export const icons = [\n";
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

const copyIconsToOtherFolders = () => {
  const storybookFolder = "../../apps/storybook-web-components/symbols";
  fs.copyFileSync(`${svgSpriteFolder}/${svgSpriteFile}`, `${storybookFolder}/${svgSpriteFile}`);
};
