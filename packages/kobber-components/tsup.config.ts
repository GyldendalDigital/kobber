import { defineConfig } from "tsup";
import { collectComponentObjects, listReactComponents, listWebComponents } from "./tsup-scripts";

const outDir = "dist";
const chunks = "chunks";
const reactDirectory = "react";
const webComponentsDirectory = "web-components";

const reactListFile = "index.react.ts";
const webComponentListFile = "index.web-components.ts";

const componentObjects = collectComponentObjects("./src");

listWebComponents(`./src/${webComponentListFile}`, componentObjects);
listReactComponents(`./src/${reactListFile}`, componentObjects);

export default defineConfig(() => ({
  entry: {
    ["init/index"]: "src/base/init.ts",
    [`${reactDirectory}/index`]: `src/${reactListFile}`,
    [`${webComponentsDirectory}/index`]: `src/${webComponentListFile}`,
  },
  format: ["esm"],
  dts: true,
  outDir: outDir,
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
  onSuccess() {
    return new Promise(resolve => {
      resolve();
    });
  },
}));
