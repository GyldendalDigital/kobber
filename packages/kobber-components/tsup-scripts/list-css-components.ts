import fs from "node:fs";
import { ComponentObject } from ".";

export const listCssComponents = (cssListFilename: string, componentObjects: ComponentObject[]) => {
  let cssImports = `import fs from "node:fs";`;
  let cssTexts = `

let css = ""
`;

  const writeFile = `
fs.writeFileSync("./dist/css/index.css", css);`;

  console.log(componentObjects[0]);

  componentObjects.slice(0, 4).forEach(object => {
    if (!fs.existsSync(`${object.importPath.replace("./", "./src/")}.styles.ts`)) {
      console.log(`!Found styles for ${object.importPath}`);
      return;
    }
    cssImports += `
import ${object.exportName} from "${object.importPath}.styles";`;

    cssTexts += `
css += "/* #region ${object.exportName} */" 
${object.exportName}.cssText?.trim() + "\n" + "/* #endregion */";
  `;
  });

  const cssListString = `${cssImports} ${cssTexts} ${writeFile}`;
  fs.writeFileSync(cssListFilename, cssListString);
};
