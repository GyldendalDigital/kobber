import { create } from "storybook/theming";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens.js";

const primary = semantics.color.identity.base["aubergine-1000"];
const secondary = semantics.typography.color.brand["aubergine-25"];

/** Options: https://storybook.js.org/docs/configure/user-interface/theming */
export default create({
  base: "dark",
  fontBase: "pp-mori, sans-serif",
  fontCode: "monospace",

  brandTitle: "Kobber Storybook",
  brandImage: "https://dam-prod.gyldendaldigital.no/tenants/edu/file/D_8MwlmJKANA6W4OIRWa7k/*/logo.svg",

  appBg: primary,
  appContentBg: primary,
  appPreviewBg: secondary,

  barBg: primary,
});
