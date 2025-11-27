import { defineConfig } from "tsup";
import { collectComponentObjects, listReactComponents, listWebComponents } from "./build-scripts";
import { entries, reactListFile, webComponentListFile } from "./entries";

const outDir = "dist";
const chunks = "chunks";

const componentObjects = collectComponentObjects("./src");

listWebComponents(`./src/${webComponentListFile}`, componentObjects);
listReactComponents(`./src/${reactListFile}`, componentObjects);

export default defineConfig(() => ({
  entry: {
    ...entries,
    "css/index": `src/index.css`,
  },
  dts: {
    entry: entries,
  },
  format: ["esm"],
  outDir: outDir,
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
  onSuccess: "echo TSC && tsc --noEmit", // type check non exported files as well
}));
