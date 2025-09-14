import { defineConfig } from "tsup";
import { collectComponentObjects, listReactComponents, listWebComponents } from "./build-scripts";

const outDir = "dist";
const chunks = "chunks";
const reactDirectory = "react";
const webComponentsDirectory = "web-components";

const reactListFile = "index.react.ts";
const webComponentListFile = "index.web-components.ts";

const componentObjects = collectComponentObjects("./src");

listWebComponents(`./src/${webComponentListFile}`, componentObjects);
listReactComponents(`./src/${reactListFile}`, componentObjects);

const tsEntries = {
  ["init/index"]: "src/base/init.ts",
  [`${reactDirectory}/index`]: `src/${reactListFile}`,
  [`${webComponentsDirectory}/index`]: `src/${webComponentListFile}`,
};

export default defineConfig(() => ({
  entry: {
    ...tsEntries,
    [`css/index`]: `src/index.css`,
  },
  dts: {
    entry: tsEntries,
  },
  format: ["esm"],
  outDir: outDir,
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
}));
