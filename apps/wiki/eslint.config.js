import { kobberEslintNextConfig } from "@gyldendal/kobber-eslint/next-js"
import tailwind from "eslint-plugin-tailwindcss"

/**@type {import("eslint").Linter.Config} */
export default [
  ...kobberEslintNextConfig,
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        callees: ["cn, classnames", "clsx", "ctl"],
        config: "tailwind.config.ts",
        cssFiles: ["**/*.css", "!**/node_modules", "!**/.*", "!**/dist", "!**/build"],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
        classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    },
  },
]
