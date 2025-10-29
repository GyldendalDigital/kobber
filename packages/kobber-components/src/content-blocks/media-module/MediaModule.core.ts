import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const mediaModuleTokens = component["media-module"];
export const textLabelTokens = universal["text-label"].text;

export const mediaModuleName = "kobber-media-module";

export type MediaModuleClassNames = typeof mediaModuleName;

export const mediaModuleClassnames = (): MediaModuleClassNames[] => {
  return [mediaModuleName];
};

export type MediaModuleProps = {
  colorVariant?: TextLabelColorVariant;
  creditPlacement?: MediaModuleCreditPlacement;
  objectFit?: MediaModuleobjectFit;
};

type TextLabelColorVariant = (typeof textLabelColorVariants)[number];
export const textLabelColorVariants = objectKeys(textLabelTokens.color.brand);

export type MediaModuleCreditPlacement = (typeof mediaModuleCreditPlacements)[number];
export const mediaModuleCreditPlacements = ["left", "right", "none"];
export const mediaModuleCreditPlacementFallback = "right";

export type MediaModuleobjectFit = (typeof mediaModuleobjectFits)[number];
export const mediaModuleobjectFits = ["contain", "cover", "fill", "none", "scale-down"];
export const mediaModuleobjectFitFallback = "fill";
