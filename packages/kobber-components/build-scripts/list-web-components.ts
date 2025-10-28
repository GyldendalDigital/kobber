import fs from "node:fs";
import { autogenerateHeader, type ComponentObject } from ".";

export const listWebComponents = (
  webComponentListFilename: string,
  componentObjects: ComponentObject[],
) => {
  const exportLines = componentObjects.map(object => {
    return `export { ${object.exportName} } from "${object.importPath}";
`;
  });

  const webComponentListString = `
${autogenerateHeader(import.meta.url)}

export { Example } from "./example/Example.lit";

${exportLines.join("")}`;

  fs.writeFileSync(webComponentListFilename, webComponentListString.replace(/\n/g, "\r\n"));
};
