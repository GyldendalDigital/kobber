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

export const listIconTypes = (symbols: NodeListOf<SVGSymbolElement>) => {
  let iconTypeString = "export type IconType = \n";
  symbols.forEach(symbol => {
    iconTypeString += `  | "${symbol.id}"\n`;
  });
  iconTypeString += `; `;
  return iconTypeString;
};
