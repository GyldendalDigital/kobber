import { getIconNames } from ".";

export const listWebComponents = (symbols: NodeListOf<SVGSymbolElement>) => {
  let componentExports = "";

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);
    componentExports += `export { ${iconNames.unprefixedCapitalized} } from "./icon/icons/${iconNames.unprefixed}";
`;
  });

  return componentExports;
};
