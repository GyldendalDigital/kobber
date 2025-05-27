import fs from "node:fs";
import { ComponentObject } from ".";

export const listWebComponents = (webComponentListFilename: string, componentObjects: ComponentObject[]) => {
  let webComponentListString = "";

  componentObjects.map(object => {
    webComponentListString += `export { ${object.importComponent} } from "${object.importPath}";
`;
  });

  fs.writeFileSync(webComponentListFilename, webComponentListString);
};
