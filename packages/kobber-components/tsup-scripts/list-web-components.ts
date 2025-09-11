import fs from "node:fs";
import { ComponentObject } from ".";

export const listWebComponents = (webComponentListFilename: string, componentObjects: ComponentObject[]) => {
  let webComponentListString = "";

  componentObjects.map(object => {
    webComponentListString += `export { ${object.exportName} } from "${object.importPath}";
`;
  });

  fs.writeFileSync(webComponentListFilename, webComponentListString, { encoding: "utf-8" });
  // contentWithLF.replace(/\n/g, '\r\n');
};
