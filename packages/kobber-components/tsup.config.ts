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
    // [`css/index`]: `src/index.css`, // Too premature for exposing css entry yet. Class name uniqueness and :host collisions have to be solved.
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
