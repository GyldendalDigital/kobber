import { kobberEslintTsConfig } from "@gyldendal/kobber-eslint/ts-recommended";
import storybook from "eslint-plugin-storybook";

/**@type {import("eslint").Linter.Config} */
export default [
  ...kobberEslintTsConfig,
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      "storybook/default-exports": "error",
    },
  },
];
