import fs from "node:fs";
import { collectComponentObjects, ComponentObject, autogenerateHeader } from ".";

const cssFile = "./src/index.css";

const componentObjects = collectComponentObjects("./src");

const listCssComponents = async () => {
  const cssTexts: string[] = [];

  for (const object of componentObjects) {
    const fileName = `${object.importPath.replace("./", "./src/")}.styles.ts`;
    if (!fs.existsSync(fileName)) {
      // console.debug(`No styles found for ${fileName}`);
      continue;
    }

    const mod = await import(`.${fileName}`);

    for (const [name, value] of Object.entries(mod)) {
      if (value && typeof value === "object" && "cssText" in value) {
        if (value.cssText && typeof value.cssText === "string") {
          cssTexts.push(`/* #region ${object.exportName} - ${name} */ \n${value.cssText}\n/* #endregion */`);
          break;
        } else {
          console.debug(`Invalid cssText found in ${fileName} `);
        }
      } else {
        console.debug(`No cssText found in ${fileName}`);
      }
    }
  }

  const cssListString = `${autogenerateHeader(import.meta.url)}${cssTexts.join("\n")}`;

  fs.writeFileSync(cssFile, cssListString.replace(/\n/g, "\r\n"));
};

listCssComponents();
