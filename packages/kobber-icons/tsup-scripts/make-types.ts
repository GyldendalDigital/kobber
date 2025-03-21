export const makeIconTypes = (symbols: NodeListOf<SVGSymbolElement>) => {
  let iconTypeString = `export type SizeType = "small" | "medium" | "large"
  
  `;
  iconTypeString += "export type IconType = \n";

  symbols.forEach(symbol => {
    iconTypeString += `  | "${symbol.id}"\n`;
  });
  iconTypeString += `; `;
  return iconTypeString;
};
