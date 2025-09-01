import { changeCaseTo, getFileExtension, getFilenameWithoutExtension } from "@gyldendal/kobber-base/utilities/index.js";
import fs from "node:fs";

export { listWebComponents } from "./list-web-components";
export { listReactComponents } from "./list-react-components";

export type ComponentObject = {
  importComponent: string;
  importPath: string;
  exportName: string;
  exportTagName: string;
  exportElementClass: string;
};

const ignoreFolders = ["base", "config", "story"];
const allowedComponentFileExtensions = ["js", "ts", "tsx"];
const componentObjects: ComponentObject[] = [];

export const collectComponentObjects = (path: string) => {
  const currentFolder = fs.readdirSync(path);

  currentFolder.map(childPath => {
    if (fs.statSync(`${path}/${childPath}`).isFile()) {
      if (isFileAComponent(childPath)) {
        componentObjects.push(makeComponentObject(path, childPath));
      }
    } else {
      if (!ignoreFolders.includes(childPath)) {
        collectComponentObjects(`${path}/${childPath}`);
      }
    }
  });

  return componentObjects.sort((a, b) => a.importComponent.localeCompare(b.importComponent));
};

const isFileAComponent = (filename: string) => {
  const numberOfDotsInFilename = filename.split(".").length - 1;
  const fileExtension = getFileExtension(filename);
  const hasFileExtension = typeof fileExtension !== "undefined";

  switch (true) {
    case !hasFileExtension:
      return false;
    case numberOfDotsInFilename > 1:
      return false;
    case !allowedComponentFileExtensions.includes(fileExtension):
      return false;
  }
  return true;
};

const makeComponentObject = (path: string, filename: string) => {
  const filenameWithoutExtension = getFilenameWithoutExtension(filename);
  const pathWithoutSrc = path.replace("src/", "");
  const prefixedComponentName = `Kobber${filenameWithoutExtension}`;

  return {
    importComponent: `${filenameWithoutExtension} as ${prefixedComponentName}`,
    importPath: `${pathWithoutSrc}/${filenameWithoutExtension}`,
    exportName: filenameWithoutExtension,
    exportTagName: changeCaseTo(prefixedComponentName, "kebab"),
    exportElementClass: prefixedComponentName,
  };
};
