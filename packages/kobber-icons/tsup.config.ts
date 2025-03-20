import fs from "node:fs";
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
const componentPrefix = "kobber-";

const removeDirectory = (directory: string) => {
  if (!fs.existsSync(directory)) return;
  fs.rmdirSync(directory, { recursive: true });
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

      const constructor = `constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.heightValueFallback = "var(--kobber-global-visual-icon-size-small)";
    this.widthValueFallback = "var(--kobber-global-visual-icon-size-small)";
  }

`;
      const attributes = `
  const ariaLabel =
      this.getAttribute("aria-label") || ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
  const ariaHidden = ariaLabel === "";
  const role = ariaHidden ? "presentation" : "img";`;
      const styles =
        "<style>:host { display: flex; align-items: center; justify-content: center; }svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>";
      const svgCode = `<svg viewBox="${symbol.getAttribute("viewBox")}" aria-label="\${ariaLabel}" aria-hidden="\${ariaHidden}" role="\${role}">${symbol.innerHTML}</svg>`;

      const componentCode = `
export class ${iconName.unprefixedCapitalized} extends HTMLElement {
  ${constructor}renderComponent() {${attributes}
  this.shadowRoot.innerHTML = \`
      ${styles}
      ${svgCode}\`;
  }
  
  connectedCallback() {
    this.renderComponent();
  }
}

export const customElementName = "${iconName.prefixed}";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, ${iconName.unprefixedCapitalized});
}
`;

      fs.mkdirSync(`${iconsDirectory}/${iconName.unprefixed}`);
      fs.writeFileSync(`${iconsDirectory}/${iconName.unprefixed}/index.js`, componentCode);
    });
  };

  const listIconComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
    let reactImports = "";
    let reactExports = "\n";
    let webComponentExports = "";

    const reactPreamble = `import { createComponent } from "@lit/react";
import * as React from "react";
`;

    symbols.forEach(symbol => {
      const iconName = getIconNames(symbol.id);

      reactImports += `
import { ${iconName.unprefixedCapitalized} as ${iconName.prefixedCapitalized} } from "./icon/icons/${iconName.unprefixed}";`;

      reactExports += `
export const ${iconName.unprefixedCapitalized} = createComponent({
  tagName: "${iconName.prefixed}",
  elementClass: ${iconName.prefixedCapitalized},
  react: React,
});
`;

      webComponentExports += `export { ${iconName.unprefixedCapitalized} } from "./icon/icons/${iconName.unprefixed}";
`;
    });
    const reactString = `${reactPreamble} ${reactImports} ${reactExports}`;
    fs.writeFileSync(reactList, reactString);
    fs.writeFileSync(webComponentsList, webComponentExports);
  };

  const makeStories = (symbols: NodeListOf<SVGSymbolElement>) => {
    let iconGalleryMainImportsString = "import { ";
    let iconGalleryString = "";
    const iconGalleryFirstImportString = `import { Meta, Title, IconGallery, IconItem } from "@storybook/blocks";
`;
    const iconGalleryMetaString = `<Meta title="Icon/All" />

# All icons

<IconGallery>`;

    symbols.forEach(symbol => {
      const iconName = getIconNames(symbol.id);

      iconGalleryMainImportsString += `
  ${iconName.unprefixedCapitalized}, `;

      iconGalleryString += `
  <IconItem name="${iconName.unprefixedCapitalized} - <${iconName.prefixed} />">
    <${iconName.prefixed} class="kobber-theme-default" />
  </IconItem>`;

      const storyFileString = `import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
  title: "Icon/Icons",
  component: "${iconName.prefixed}",
  parameters: {
    layout: 'centered',
  },
  args: {
    ariaLabel: "",
  },
  decorators: [
    (story, storyContext) => \`
      <div class="\${storyContext.globals.theme}">
        \${story()}
      </div>
    \`,
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ${iconName.unprefixed}: Story = {
  render: (args: Args) => \`
    <${iconName.prefixed} aria-label="\${args.ariaLabel}" />
  \`,
};
`;

      fs.writeFileSync(`${iconsDirectory}/${iconName.unprefixed}/index.stories.ts`, storyFileString);
    });
    iconGalleryMainImportsString += `
} from "../index.web-components";

`;
    iconGalleryString += `
</IconGallery>
`;

    fs.writeFileSync(
      `${iconDirectory}/index.mdx`,
      `${iconGalleryFirstImportString}${iconGalleryMainImportsString}${iconGalleryMetaString}${iconGalleryString}`,
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
      iconTypeString += `  | "${symbol.id}"\n`;
    });
    iconTypeString += `; `;
    return iconTypeString;
  };

  const listIcons = (symbols: NodeListOf<SVGSymbolElement>) => {
    let iconsListString = `export const iconsList = [
`;

    symbols.forEach((symbol, index) => {
      if (index > 0) {
        iconsListString += `, 
`;
      }
      iconsListString += ` "${symbol.id}"`;
    });
    iconsListString += `
];`;

    return iconsListString;
  };

  const parser = new DOMParser();
  const doc = parser.parseFromString(fileAsString, "text/html");
  const symbols: NodeListOf<SVGSymbolElement> = doc.querySelectorAll("symbol");
  if (symbols) {
    const iconTypeString = listIconTypes(symbols);
    const iconsListString = listIcons(symbols);

    fs.writeFileSync(
      componentHelperFile,
      `${iconTypeString}

${iconsListString}`,
    );
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
