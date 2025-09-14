import fs from "node:fs";
import { autogenerateHeader, ComponentObject } from ".";

export const listWebComponents = (webComponentListFilename: string, componentObjects: ComponentObject[]) => {
  const exportLines = componentObjects.map(object => {
    return `export { ${object.exportName} } from "${object.importPath}";
`;
  });

  const webComponentListString = `${autogenerateHeader(import.meta.url)}${exportLines.join("")}`;

  fs.writeFileSync(webComponentListFilename, webComponentListString.replace(/\n/g, "\r\n"));
};
