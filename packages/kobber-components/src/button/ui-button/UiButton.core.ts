import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const uiButtonName = "kobber-ui-button" as const;
export const uiButtonTokens = component["ui-button"];
export const uiButtonColorThemes = objectKeys(uiButtonTokens.background.color);
export const uiButtonColorVariants = objectKeys(uiButtonTokens.background.color.informative);
export type UiButtonProps = {
  colorTheme?: (typeof uiButtonColorThemes)[number];
  colorVariant?: (typeof uiButtonColorVariants)[number];
};
