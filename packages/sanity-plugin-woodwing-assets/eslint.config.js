import { kobberEslintTsConfig } from "@gyldendal/kobber-eslint/ts-recommended";

/**@type {import("eslint").Linter.Config} */
export default [
  ...kobberEslintTsConfig,
  { rules: { "@typescript-eslint/no-explicit-any": "warn" } },
  { ignores: ["dist/**"] },
];
