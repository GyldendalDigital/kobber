import { getIconNames } from ".";

export const listReactSSRSafeComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  let componentExports = "";

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    componentExports += `export { ${iconNames.unprefixedCapitalized} } from "./icon/icons/${iconNames.unprefixed}/index.react";
`;
  });

  return componentExports;
};
