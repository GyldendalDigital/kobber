import fs from "node:fs";
import { getIconNames } from ".";
import { default as paths } from "../svg-scripts/paths.cjs";

const componentExtension = paths.reactSSRSafeComponentExtension;
const tmpIconsDirectory = paths.tmpIconsReactSSRSafe;
const iconsDirectory = paths.icons;

export const makeSSRSafeReactComponentPostscript = (symbols: NodeListOf<SVGSymbolElement>) => {
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);

    fs.copyFileSync(
      `${tmpIconsDirectory}/${iconNames.unprefixedKebab}.${componentExtension}`,
      `${iconsDirectory}/${iconNames.unprefixed}/index.react.${componentExtension}`,
    );
  });
};
