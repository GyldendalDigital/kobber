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
const iconDirectory = "src/icon";
const iconsDirectory = `${iconDirectory}/icons`;
const webComponentsList = "src/index.web-components.ts";
const reactList = "src/index.react.tsx";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmSync(directory, { recursive: true });
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
    .map(snake =>
      snake
        .split("_")
        .map(substr => substr.charAt(0).toUpperCase() + substr.slice(1))
        .join(""),
    )
    .join("/");
};

const makeIconComponents = () => {
  removeDirectory(iconsDirectory);
  fs.mkdirSync(iconsDirectory);

  const file = fs.readFileSync(`${svgSpriteFolder}/${svgSpriteFile}`);
  const fileAsString = file.toString();

  const makeIcons = (symbols: SVGSymbolElement[]) => {
    symbols.forEach(symbol => {
      // TODO:
      // Reconsider: Is viewbox needed? Can one simple be set? (Best: Copy from the real one.)
      // Add aria-label/labelledby/role directly on SVG tag (based on attributes, like in progressBarItem).

      const iconName = symbol.id;
      const iconNameCapitalized = snakeToPascalCase(iconName);

      const svgCode = `<svg>${symbol.innerHTML}</svg>`;
      const componentCode = `export class ${iconNameCapitalized} extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.attachShadow({ mode: "open" });\n\t}\n\trenderComponent() {\n\t\tthis.shadowRoot.innerHTML =\n\t\t\t'${svgCode}';\n\t}\n\tconnectedCallback() {\n\t\tthis.renderComponent();\n\t}\n}\n\nexport const customElementName = "kobber-${iconName}";\n\nif (!customElements.get(customElementName)) {\n\tcustomElements.define(customElementName, ${iconNameCapitalized});\n}\n`;

      fs.mkdirSync(`${iconsDirectory}/${symbol.id}`);
      fs.writeFileSync(`${iconsDirectory}/${symbol.id}/index.js`, componentCode);
    });
  };

  const listIconComponents = (symbols: SVGSymbolElement[]) => {
    let reactString = "";
    let reactImports = "";
    let reactExports = "\n";
    let webComponentString = "";

    const reactPreamble = 'import { createComponent } from "@lit/react";\nimport * as React from "react";\n';

    symbols.forEach(symbol => {
      const iconName = symbol.id;
      const iconNameCapitalized = snakeToPascalCase(iconName);

      reactImports = `${reactImports}\nimport { ${iconNameCapitalized} } from "./icon/icons/${iconName}";`;
      reactExports = `${reactExports}\nexport const Kobber${iconNameCapitalized} = createComponent({\n\ttagName: "kobber-${iconName}",\n\telementClass: ${iconNameCapitalized},\n\treact: React,\n});\n`;

      webComponentString += `export { ${iconNameCapitalized} } from "./icon/icons/${iconName}";\n`;
    });
    reactString = `${reactPreamble} ${reactImports} ${reactExports}`;
    fs.writeFileSync(reactList, reactString);
    fs.writeFileSync(webComponentsList, webComponentString);
  };

  const makeStories = (symbols: SVGSymbolElement[]) => {
    let iconGalleryMainImportsString = "import {";
    let iconGalleryString = "";
    const iconGalleryFirstImportString = 'import { Meta, Title, IconGallery, IconItem } from "@storybook/blocks";\n';
    const iconGalleryMetaString = '<Meta title="Icon/All" />\n\n# All icons\n\n<IconGallery>\n';
    symbols.forEach(symbol => {
      const iconName = symbol.id;
      const iconNameCapitalized = snakeToPascalCase(iconName);
      iconGalleryMainImportsString = `${iconGalleryMainImportsString} ${iconNameCapitalized},`;
      iconGalleryString = `${iconGalleryString}\t<IconItem name="<kobber-${iconName} />">\n\t\t<kobber-${iconName} style={{height: "1em", width: "1em"}}/>\n\t</IconItem>\n`;
      const storyFileString = `import type { Meta, StoryObj } from "@storybook/web-components";\nimport ".";\n\nconst meta: Meta = {\n\ttitle: "Icon/Icons",\n\tcomponent: "kobber-${iconName}",\n};\n\nexport default meta;\ntype Story = StoryObj<typeof meta>;\n\nexport const ${iconName}: Story = {};\n`;
      fs.writeFileSync(`${iconsDirectory}/${iconName}/index.stories.ts`, storyFileString);
    });
    iconGalleryMainImportsString = `${iconGalleryMainImportsString}} from "../index.web-components";\n\n`;
    iconGalleryString = `${iconGalleryString}\n</IconGallery>\n`;
    fs.writeFileSync(
      `${iconDirectory}/index.mdx`,
      `${iconGalleryFirstImportString}${iconGalleryMainImportsString} ${iconGalleryMetaString}${iconGalleryString}`,
    );
  };

  const parser = new DOMParser();
  const doc = parser.parseFromString(fileAsString, "text/html");
  const symbols: SVGSymbolElement[] = doc.querySelectorAll("symbol");
  if (symbols) {
    makeIcons(symbols);
    makeStories(symbols);
    listIconComponents(symbols);
  }
};

const listAllSvgSymbols = () => {
  const file = fs.readFileSync(`${svgSpriteFolder}/${svgSpriteFile}`);
  const fileAsString = file.toString();

  const listIconTypes = (symbols: SVGSymbolElement[]) => {
    let iconTypeString = "export type IconType = \n";
    symbols.forEach(symbol => {
      iconTypeString = `${iconTypeString}  | "${symbol.id}"\n`;
    });
    iconTypeString = `${iconTypeString};`;
    return iconTypeString;
  };

  const listIcons = (symbols: SVGSymbolElement[]) => {
    let iconsListString = "export const iconsList = [\n";
    symbols.forEach((symbol, index) => {
      if (index > 0) {
        iconsListString = `${iconsListString}, \n`;
      }
      iconsListString = `${iconsListString} "${symbol.id}"`;
    });
    iconsListString = `${iconsListString}\n];`;
    return iconsListString;
  };

  const parser = new DOMParser();
  const doc = parser.parseFromString(fileAsString, "text/html");
  const symbols: SVGSymbolElement[] = doc.querySelectorAll("symbol");
  if (symbols) {
    const iconTypeString = listIconTypes(symbols);
    const iconsListString = listIcons(symbols);

    fs.writeFileSync(`${svgSpriteFolder}/${componentHelperFile}`, `${iconTypeString} \n\n ${iconsListString}`);
  }
};

removeDirectory(assets);
removeDirectory(chunks);
removeDirectory(reactDirectory);
removeDirectory(webComponentsDirectory);

listAllSvgSymbols();
makeIconComponents();

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
