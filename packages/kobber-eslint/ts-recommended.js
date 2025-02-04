import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import eslintPluginImportX from "eslint-plugin-import-x";
import { kobberEslintBaseConfig } from "./base.js";

/**
 * Typescript best practice
 *
 * @type {import("eslint").Linter.Config}
 * */
export const kobberEslintTsConfig = [
  ...kobberEslintBaseConfig,

  // prettier rules
  eslintConfigPrettier,

  // ts
  ...tseslint.configs.recommended,
  {
    rules: {
      // crashes on some files
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
  eslintPluginImportX.flatConfigs.typescript,
  {
    settings: {
      "import/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
        }),
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        JSX: true,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        global: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
        __filename: true,
        __dirname: true,
      },

      parser: tsParser,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // turbo
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "off",
    },
  },
];
