import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const mediaModuleTokens = component["media-module"];
export const textLabelTokens = universal["text-label"].text;

export const mediaModuleName = "kobber-media-module";

export type MediaModuleClassNames = typeof mediaModuleName;

export const mediaModuleClassnames = (): MediaModuleClassNames[] => {
  return [mediaModuleName];
};

export type MediaModuleCreditPlacementLeft = boolean;

export type MediaModuleProps = {
  colorVariant?: TextLabelColorVariant;
  creditsPlacementLeft?: MediaModuleCreditPlacementLeft;
};

type TextLabelColorVariant = (typeof textLabelColorVariants)[number];
export const textLabelColorVariants = objectKeys(textLabelTokens.color.brand);
