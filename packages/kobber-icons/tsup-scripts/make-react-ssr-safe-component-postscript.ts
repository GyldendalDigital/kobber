import fs from "node:fs";
import { getIconNames } from ".";
import { default as paths } from "../svg-scripts/paths.cjs";

const componentExtension = paths.reactSSRSafeComponentExtension;
const tmpIconsDirectory = paths.tmpIconsReactSSRSafe;
const iconsDirectory = paths.icons;

/*
 * Copy react SSR safe icon components from svg-jsx-converter output directory to
 * each icon directory.
 * The iteration is based on svg symbols names, to ensure correct folder name
 * casing, and order (it can differ from filesystem order).
 */
export const makeSSRSafeReactComponentPostscript = (symbols: NodeListOf<SVGSymbolElement>) => {
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);

    fs.copyFileSync(
      `${tmpIconsDirectory}/${iconNames.unprefixedKebab}.${componentExtension}`,
      `${iconsDirectory}/${iconNames.unprefixed}/index.react.${componentExtension}`,
    );
  });
};
