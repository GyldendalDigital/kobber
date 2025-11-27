import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
export const textModuleTokens = component["text-module"];

import { objectKeys } from "../../base/utilities/objectKeys";

export const textModuleName = "kobber-text-module";

export type TextModuleClassNames = typeof textModuleName;
type TextModuleColor = (typeof textModuleColors)[number];
type TextModuleColorVariant = (typeof textModuleColorVariants)[number];

export const textModuleClassnames = (): TextModuleClassNames[] => {
  return [textModuleName];
};

export const textModuleColors = objectKeys(textModuleTokens.color.background);
export const textModuleColorVariants = objectKeys(textModuleTokens.color.background.brand);

export type TextModuleProps = {
  color?: TextModuleColor;
  colorVariant?: TextModuleColorVariant;
};
