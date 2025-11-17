import { writeFileSync } from "node:fs";
import { defineConfig } from "tsup";
import { cssEntries, entries } from "./entries";
import { getVanillaExtractPlugin } from "./src/cssProcessing/getVanillaExtractPlugin";
import { postProcessCss } from "./src/cssProcessing/postProcessCss";

const outDir = "dist";

const chunks = "chunks";

type Env = "production" | "development";

export default defineConfig(options => {
  const env = (options.env?.NODE_ENV as Env) ?? "development";
  return {
    entry: entries,
    dts: { entry: entries },
    format: ["esm"],
    outDir,
    clean: true,
    bundle: true,
    splitting: true,
    esbuildPlugins: [getVanillaExtractPlugin()],
    external: [/^lit\/.*/],
    esbuildOptions(options) {
      options.chunkNames = `${chunks}/[name]-[hash]`;
    },
    onSuccess: async () => {
      for (const [cssFileName, directory] of cssEntries) {
        const merged = await postProcessCss(env, directory);
        writeFileSync(`${outDir}/${cssFileName}`, merged);
      }
    },
  };
});
