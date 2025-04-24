import fs from "node:fs";
import { getIconNames } from ".";

const componentExtension = "jsx";
const iconDirectory = "src/icon";
const tmpIconsDirectory = `${iconDirectory}/tmp-icons-react-ssr-safe`;
const iconsDirectory = `${iconDirectory}/icons`;

export const makeSSRSafeReactComponentPostscript = (symbols: NodeListOf<SVGSymbolElement>) => {
  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);

    fs.copyFileSync(
      `${tmpIconsDirectory}/${iconNames.unprefixedKebab}.${componentExtension}`,
      `${iconsDirectory}/${iconNames.unprefixed}/index.react.${componentExtension}`,
    );
  });
};
