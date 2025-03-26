import { defineConfig } from "@sanity/pkg-utils";

export default defineConfig({
  // the path to the tsconfig file for distributed builds
  tsconfig: "tsconfig.dist.json",
  dist: "dist",

  // Remove this block to enable strict export validation
  extract: {
    rules: {
      "ae-incompatible-release-tags": "off",
      "ae-internal-missing-underscore": "off",
      "ae-missing-release-tag": "off",
    },
  },
});
