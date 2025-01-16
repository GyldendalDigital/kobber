import pluginNext from "@next/eslint-plugin-next";
import { kobberEslintReactConfig } from "./react.js";

/**
 * Next.js best practice
 *
 * @type {import("eslint").Linter.Config}
 * */
export const kobberEslintNextConfig = [
  ...kobberEslintReactConfig,

  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
];
