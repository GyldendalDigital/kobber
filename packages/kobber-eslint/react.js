import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { kobberEslintTsConfig } from "./ts-recommended.js";

/**
 * React best practice
 *
 * @type {import("eslint").Linter.Config} */
export const kobberEslintReactConfig = [
  ...kobberEslintTsConfig,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },
  jsxA11y.flatConfigs.recommended,
];
