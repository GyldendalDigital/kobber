import { create } from "@storybook/theming";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens";

const background = semantics.navigation.color.darkest;

/** Options: https://storybook.js.org/docs/configure/user-interface/theming */
export default create({
  base: "dark",
  fontBase: "Mori, sans-serif",
  fontCode: "monospace",

  brandTitle: "Kobber Storybook",
  brandImage: "https://dam-prod.gyldendaldigital.no/tenants/edu/file/D_8MwlmJKANA6W4OIRWa7k/*/logo.svg",

  colorSecondary: semantics.navigation.color.bright,

  appBg: background,
  appContentBg: background,
  appPreviewBg: semantics.navigation.color.brightest,

  barBg: background,
});
