import { defineConfig } from "tsup";

export default defineConfig(() => ({
  entry: {
    ["utilities/index"]: "utilities/index.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
}));
