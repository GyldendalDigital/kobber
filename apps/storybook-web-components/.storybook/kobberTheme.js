import { create } from "@storybook/theming";
import { regional } from "@gyldendal/kobber-base/themes/default/tokens";

const background = regional.navigation.color.darkest;

/** Options: https://storybook.js.org/docs/configure/user-interface/theming */
export default create({
  base: "dark",
  fontBase: "PP Mori, sans-serif",
  fontCode: "monospace",

  brandTitle: "Kobber Storybook",
  brandImage: "https://dam-prod.gyldendaldigital.no/tenants/edu/file/D_8MwlmJKANA6W4OIRWa7k/*/logo.svg",

  colorSecondary: regional.navigation.color.bright,

  appBg: background,
  appContentBg: background,
  appPreviewBg: regional.navigation.color.brightest,

  barBg: background,
});
