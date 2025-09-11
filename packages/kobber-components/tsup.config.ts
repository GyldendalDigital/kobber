import { defineConfig } from "tsup";
import { collectComponentObjects, listReactComponents, listWebComponents } from "./tsup-scripts";
import { listCssComponents } from "./tsup-scripts/list-css-components";

const outDir = "dist";
const chunks = "chunks";
const reactDirectory = "react";
const webComponentsDirectory = "web-components";
const cssDirectory = "css";

const reactListFile = "index.react.ts";
const webComponentListFile = "index.web-components.ts";
const cssFile = "index.css.ts";

const componentObjects = collectComponentObjects("./src");

listWebComponents(`./src/${webComponentListFile}`, componentObjects);
listReactComponents(`./src/${reactListFile}`, componentObjects);
listCssComponents(`./src/${cssFile}`, componentObjects);

export default defineConfig(() => ({
  entry: {
    ["init/index"]: "src/base/init.ts",
    [`${reactDirectory}/index`]: `src/${reactListFile}`,
    [`${webComponentsDirectory}/index`]: `src/${webComponentListFile}`,
    [`${cssDirectory}/index`]: `src/${cssFile}`,
  },
  format: ["esm"],
  dts: true,
  outDir: outDir,
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
  async onSuccess() {
    // await import(`./dist/css/index.js`);
    await new Promise(resolve => {
      resolve(true);
    });
  },
}));
