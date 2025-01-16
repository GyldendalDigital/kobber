import js from "@eslint/js";
import eslintPluginImportX from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";

/**
 * Javascript best practice
 *
 * @type {import("eslint").Linter.Config}
 * */
export const kobberEslintBaseConfig = [
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
    },
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
  },
];
