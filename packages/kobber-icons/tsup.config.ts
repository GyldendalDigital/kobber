import fs from "fs";
import { defineConfig } from "tsup";
import { JSDOM } from "jsdom";

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

const symbolPrefix = "kobber-";
const componentPrefix = "icon-";

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

const makeIconComponents = () => {
  removeDirectory(iconsDirectory);
  fs.mkdirSync(iconsDirectory);

  const file = fs.readFileSync(svgSpriteFile);
  const fileAsString = file.toString();

  const getIconNames = (symbolName: string) => {
    return {
      prefixed: symbolName.replace(symbolPrefix, componentPrefix),
      unprefixed: symbolName.replace(symbolPrefix, ""),
      prefixedCapitalized: snakeToPascalCase(symbolName.replace(symbolPrefix, componentPrefix)),
      unprefixedCapitalized: snakeToPascalCase(symbolName).replace(snakeToPascalCase(symbolPrefix), ""),
    };
  };

  const makeComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
    symbols.forEach(symbol => {
      const iconName = getIconNames(symbol.id);

      const constructor = `\n\tconstructor() {\n\t\tsuper();\n\t\tthis.attachShadow({ mode: "open" });\n\t\tthis.heightValueFallback = "var(--kobber-global-visual-icon-size-small)";\n\t\tthis.widthValueFallback = "var(--kobber-global-visual-icon-size-small)";\n\t}\n\t`;
      const attributes = `\n\t\tconst ariaLabel =
      this.getAttribute("aria-label") || ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */\n\t\tconst ariaHidden = ariaLabel === "";\n\t\tconst role = ariaHidden ? "presentation" : "img";`;
      const styles =
        "<style>:host { display: flex; align-items: center; justify-content: center; }svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>";
      const svgCode = `<svg viewBox="${symbol.getAttribute("viewBox")}" aria-label="\${ariaLabel}" aria-hidden="\${ariaHidden}" role="\${role}">${symbol.innerHTML}</svg>`;

      const componentCode = `export class ${iconName.unprefixedCapitalized} extends HTMLElement {${constructor}renderComponent() {${attributes}\n\t\tthis.shadowRoot.innerHTML = \`
      ${styles}\n\t\t\t${svgCode}\`;\n\t}\n\tconnectedCallback() {\n\t\tthis.renderComponent();\n\t}\n}\n\nexport const customElementName = "${iconName.prefixed}";\n\nif (!customElements.get(customElementName)) {\n\tcustomElements.define(customElementName, ${iconName.unprefixedCapitalized});\n}\n`;

      fs.mkdirSync(`${iconsDirectory}/${iconName.unprefixed}`);
      fs.writeFileSync(`${iconsDirectory}/${iconName.unprefixed}/index.js`, componentCode);
    });
  };

  const listIconComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
    let reactImports = "";
    let reactExports = "\n";
    let webComponentExports = "";

    const reactPreamble = 'import { createComponent } from "@lit/react";\nimport * as React from "react";\n';

    symbols.forEach(symbol => {
      const iconName = getIconNames(symbol.id);

      reactImports = `${reactImports}\nimport { ${iconName.unprefixedCapitalized} } from "./icon/icons/${iconName.unprefixed}";`;
      reactExports = `${reactExports}\nexport const ${iconName.prefixedCapitalized} = createComponent({\n\ttagName: "${iconName.prefixed}",\n\telementClass: ${iconName.unprefixedCapitalized},\n\treact: React,\n});\n`;

      webComponentExports += `export { ${iconName.unprefixedCapitalized} } from "./icon/icons/${iconName.unprefixed}";\n`;
    });
    const reactString = `${reactPreamble} ${reactImports} ${reactExports}`;
    fs.writeFileSync(reactList, reactString);
    fs.writeFileSync(webComponentsList, webComponentExports);
  };

  const makeStories = (symbols: NodeListOf<SVGSymbolElement>) => {
    let iconGalleryMainImportsString = "import {";
    let iconGalleryString = "";
    const iconGalleryFirstImportString = 'import { Meta, Title, IconGallery, IconItem } from "@storybook/blocks";\n';
    const iconGalleryMetaString = '<Meta title="Icon/All" />\n\n# All icons\n\n<IconGallery>\n';
    symbols.forEach(symbol => {
      const iconName = getIconNames(symbol.id);

      iconGalleryMainImportsString = `${iconGalleryMainImportsString} ${iconName.unprefixedCapitalized},`;
      iconGalleryString = `${iconGalleryString}\t<IconItem name="${iconName.prefixedCapitalized} - <${iconName.prefixed} />">\n\t\t<${iconName.prefixed} class="kobber-theme-default" />\n\t</IconItem>\n`;

      const storyFileString = `import type { Args, Meta, StoryObj } from "@storybook/web-components";\nimport ".";\n\nconst meta: Meta = {\n\ttitle: "Icon/Icons",\n\tcomponent: "${iconName.prefixed}",\n\targs: {\n\t\tariaLabel: "",\n\t},\n\tdecorators: [\n\t\t(story, storyContext) => \`\n\t\t\t<div class="\${storyContext.globals.theme}">\n\t\t\t\t\${story()}\n\t\t\t</div>\n\t\t\`,\n\t],\n};\n\nexport default meta;\ntype Story = StoryObj<typeof meta>;\n\nexport const ${iconName.unprefixed}: Story = {\n\trender: (args: Args) => \`\n\t\t<${iconName.prefixed}\n\t\t\taria-label="\${args.ariaLabel}"\n\t\t/>\n\t\`,\n};\n`;
      fs.writeFileSync(`${iconsDirectory}/${iconName.unprefixed}/index.stories.ts`, storyFileString);
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
  const symbols: NodeListOf<SVGSymbolElement> = doc.querySelectorAll("symbol");
  if (symbols) {
    makeComponents(symbols);
    makeStories(symbols);
    listIconComponents(symbols);
  }
};

const listAllSvgSymbols = () => {
  const file = fs.readFileSync(svgSpriteFile);
  const fileAsString = file.toString();

  const listIconTypes = (symbols: NodeListOf<SVGSymbolElement>) => {
    let iconTypeString = "export type IconType = \n";
    symbols.forEach(symbol => {
      iconTypeString = `${iconTypeString}  | "${symbol.id}"\n`;
    });
    iconTypeString = `${iconTypeString};`;
    return iconTypeString;
  };

  const listIcons = (symbols: NodeListOf<SVGSymbolElement>) => {
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
  const symbols: NodeListOf<SVGSymbolElement> = doc.querySelectorAll("symbol");
  if (symbols) {
    const iconTypeString = listIconTypes(symbols);
    const iconsListString = listIcons(symbols);

    fs.writeFileSync(componentHelperFile, `${iconTypeString} \n\n ${iconsListString}`);
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
