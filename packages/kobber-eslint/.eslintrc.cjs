/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "turbo",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  globals: {
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
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-import",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-prettier",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-storybook",
    "eslint-plugin-unused-imports",
  ],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    // reference: https://eslint.org/docs/latest/rules/
    quotes: ["error", "double", "avoid-escape"],
    "react/react-in-jsx-scope": "off",
  },
};
