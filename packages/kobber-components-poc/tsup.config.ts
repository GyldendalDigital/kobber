import { basename } from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig, type Options } from "tsup";
import { entries } from "./entries";

const outDir = "dist";

const chunks = "chunks";

const getPrettyCssConfig = (): Options => ({
  entry: entries,
  dts: { entry: entries },
  format: ["esm"],
  outDir,
  clean: true,
  bundle: true,
  splitting: true,
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: ({ filePath, debugId: customPrefix, hash }) =>
        getPrettyClassName(filePath, customPrefix ?? hash),
      processCss,
    }),
  ],
  esbuildOptions(options) {
    options.chunkNames = `${chunks}/[name]-[hash]`;
  },
});

const getPrettyClassName = (filePath: string, customPrefix: string) => {
  const [fileNameRoot] = basename(filePath).split(".");
  const dashedString = fileNameRoot ?? "";
  const hashed = `${dashedString}-${customPrefix}`;
  return `kobber-${camelCaseToDashed(hashed)}`;
};

const camelCaseToDashed = (value: string) => value.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);

const processCss = (css: string) => {
  // Run PostCSS?
  return Promise.resolve(css);
};

export default defineConfig([getPrettyCssConfig()]);
