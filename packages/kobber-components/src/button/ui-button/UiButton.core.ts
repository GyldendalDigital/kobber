import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const uiButtonName = "kobber-ui-button" as const;
export const uiButtonTokens = component["ui-button"];
export const uiButtonColors = objectKeys(uiButtonTokens.background.color);
export const uiButtonColorVariants = objectKeys(uiButtonTokens.background.color.informative);
export type UiButtonProps = {
  color?: (typeof uiButtonColors)[number];
  colorVariant?: (typeof uiButtonColorVariants)[number];
};
