import { create } from "storybook/theming";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens.js";

const background = semantics.color.identity.base["aubergine-1000"];

/** Options: https://storybook.js.org/docs/configure/user-interface/theming */
export default create({
  base: "dark",
  fontBase: "pp-mori, sans-serif",
  fontCode: "monospace",

  brandTitle: "Kobber Storybook",
  brandImage: "https://dam-prod.gyldendaldigital.no/tenants/edu/file/D_8MwlmJKANA6W4OIRWa7k/*/logo.svg",

  colorSecondary: semantics.typography.color.bright,

  appBg: background,
  appContentBg: background,
  appPreviewBg: semantics.color.identity.base["aubergine-25"],

  barBg: background,
});
