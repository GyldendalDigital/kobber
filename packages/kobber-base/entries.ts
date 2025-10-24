import { type Dirent, readdirSync } from "node:fs";
import path, { dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import packageJson from "./package.json" with { type: "json" };

const dirName = dirname(fileURLToPath(import.meta.url));

const distDirectory = path.join(dirName, "dist");

// Create entry points from themes folder. Examples:
// "@gyldendal/kobber-base/themes/default": "./dist/themes/default",
// "@gyldendal/kobber-base/themes/default/tokens.js": "./dist/themes/default/tokens.js"

const getThemeEntries = () =>
  readdirSync(distDirectory, { withFileTypes: true, recursive: true })
    .filter(isThemeEntry)
    .map((file): [string, string] => [getModuleName(file), getPathToSourceFile(file)])
    .map(([moduleName, pathToSourceFile]) => ({
      [`${packageJson.name}/${moduleName}`]: pathToSourceFile,
    }));

const isThemeEntry = (file: Dirent<string>) => extname(file.name) === ".js";

const getModuleName = (file: Dirent<string>) =>
  path.relative(distDirectory, `${file.parentPath}/${file.name}`);

const getPathToSourceFile = (file: Dirent<string>) =>
  `./${path.relative(dirName, `${file.parentPath}/${file.name}`)}`;

export const sourceMap = Object.assign({}, ...getThemeEntries());
