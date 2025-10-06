import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const themeButtonName = "kobber-theme-button" as const;
export const themeButtonTokens = component["theme-button"];
export const themeButtonColorThemes = objectKeys(themeButtonTokens.background.color);
export const themeButtonColorVariants = objectKeys(
  themeButtonTokens.background.color.accent.primary,
);
export const themeButtonColorLevels = [
  ...objectKeys(themeButtonTokens.background.color.accent),
  ...objectKeys(themeButtonTokens.border.color.accent),
];
export type ThemeButtonProps = {
  colorTheme?: (typeof themeButtonColorThemes)[number];
  colorLevel?: (typeof themeButtonColorLevels)[number];
  colorVariant?: (typeof themeButtonColorVariants)[number];
};
