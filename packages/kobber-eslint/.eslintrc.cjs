/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "turbo",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
  ],
  globals: {
    JSX: true,
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "storybook"],
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
