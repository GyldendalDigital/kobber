import { getIconNames } from ".";

export const listWebComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  let webComponentExports = "";

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    webComponentExports += `export { ${iconNames.unprefixedCapitalized} } from "./icon/icons/${iconNames.unprefixed}";
`;
  });

  return webComponentExports;
};
