import fs, { existsSync } from "node:fs";
import { join } from "node:path";

const sourceDirectory = "./src";

const outputPath = join("./dist", "core.css");

const componentDirectories = fs
  .readdirSync(sourceDirectory, { withFileTypes: true })
  .filter(file => file.isDirectory())
  .map(file => file.name);

const build = async () => {
  const cssTexts = await Promise.all(
    componentDirectories.map(componentDirectory => getComponentCss(componentDirectory)),
  );
  const cssText = cssTexts.filter(value => value !== undefined).join("\n");
  fs.writeFileSync(outputPath, cssText);
};

const getComponentCss = async (componentDirectory: string): Promise<string | undefined> => {
  const path = join(sourceDirectory, componentDirectory);
  const files = fs.readdirSync(path);
  const fileName = files.find(file => file.includes(".core.ts"));
  const coreComponentFilePath = fileName ? `${path}/${fileName}` : undefined;
  if (coreComponentFilePath && existsSync(coreComponentFilePath)) {
    const importPath = join("../", coreComponentFilePath);
    const component = await import(importPath);
    if (typeof component.default !== "function") {
      console.warn(`Missing default export function in ${importPath}`);
      return;
    }
    return component.default().styles;
  }
};

build();
