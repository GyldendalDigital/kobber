import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const defaultButtonName = "kobber-button" as const;
export const defaultButtonTokens = component.button;
export const defaultButtonColorThemes = objectKeys(defaultButtonTokens.background.color);
export const defaultButtonColorVariants = objectKeys(
  defaultButtonTokens.background.color.brand.secondary,
);
export const defaultButtonColorLevels = [
  ...objectKeys(defaultButtonTokens.background.color.brand),
  ...objectKeys(defaultButtonTokens.border.color.brand),
];
export type DefaultButtonProps = {
  colorTheme?: (typeof defaultButtonColorThemes)[number];
  colorLevel?: (typeof defaultButtonColorLevels)[number];
  colorVariant?: (typeof defaultButtonColorVariants)[number];
};
