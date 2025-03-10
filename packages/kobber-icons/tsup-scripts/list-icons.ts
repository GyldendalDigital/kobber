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
