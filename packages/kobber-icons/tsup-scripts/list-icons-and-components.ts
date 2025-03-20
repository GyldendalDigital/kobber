import { getIconNames } from ".";

export const listIcons = (symbols: NodeListOf<SVGSymbolElement>) => {
  let iconsListString = "export const iconsList = [\n";
  symbols.forEach((symbol, index) => {
    if (index > 0) {
      iconsListString += `, \n`;
    }
    iconsListString += ` "${symbol.id}"`;
  });
  iconsListString += `\n];`;
  return iconsListString;
};

export const listWebComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  let webComponentExports = "";

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    webComponentExports += `export { ${iconNames.unprefixedCapitalized} } from "./icon/icons/${iconNames.unprefixed}";
`;
  });

  return webComponentExports;
};

export const listReactComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  const reactPreamble = `import { createComponent } from "@lit/react";
import * as React from "react";
`;

  let reactImports = "";
  let reactExports = `
`;

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    reactImports += `
import { ${iconNames.unprefixedCapitalized} as ${iconNames.prefixedCapitalized} } from "./icon/icons/${iconNames.unprefixed}";`;

    reactExports += `
export const ${iconNames.unprefixedCapitalized} = createComponent({
  tagName: "${symbol.id}",
  elementClass: ${iconNames.prefixedCapitalized},
  react: React,
});
`;
  });

  return `${reactPreamble} ${reactImports} ${reactExports}`;
};

export const listReactSSRSafeComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  let reactSSRSafecomponentExports = "";

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    reactSSRSafecomponentExports += `export { ${iconNames.unprefixedCapitalized} } from "./icon/icons/${iconNames.unprefixed}/index.react";
`;
  });

  return reactSSRSafecomponentExports;
};
