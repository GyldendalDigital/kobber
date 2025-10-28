import fs from "node:fs";
import { autogenerateHeader, collectComponentObjects } from ".";

const cssFile = "./src/index.css";

const componentObjects = collectComponentObjects("./src", ["config", "story"]);

/**
 * Generates a CSS file that aggregates all CSSResultGroup cssText from component styles.
 *
 * Skips imports prefixed with underscore (_) and ignored folders.
 */
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
      if (name.startsWith("_")) {
        continue;
      }
      if (value && typeof value === "object" && "cssText" in value) {
        if (value.cssText && typeof value.cssText === "string") {
          cssTexts.push(
            `/* #region ${object.exportName} - ${name} */ \n${value.cssText}\n/* #endregion */`,
          );
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
