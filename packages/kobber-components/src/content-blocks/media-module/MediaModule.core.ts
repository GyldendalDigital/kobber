import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import type { TextBodyColor, TextBodyColorVariant } from "../../text/text-body/TextBody.core";

export const mediaModuleTokens = component["media-module"];
export const textLabelTokens = universal["text-label"].text;

export const mediaModuleName = "kobber-media-module";

export type MediaModuleClassNames = typeof mediaModuleName;

export const mediaModuleClassnames = (): MediaModuleClassNames[] => {
  return [mediaModuleName];
};

export type MediaModuleProps = {
  color?: TextBodyColor;
  colorVariant?: TextBodyColorVariant;
  creditPlacement?: MediaModuleCreditPlacement;
  objectFit?: MediaModuleobjectFit;
};

export type MediaModuleCreditPlacement = (typeof mediaModuleCreditPlacements)[number];
export const mediaModuleCreditPlacements = ["left", "right", "none"];
export const mediaModuleCreditPlacementFallback = "right";

export type MediaModuleobjectFit = (typeof mediaModuleobjectFits)[number];
export const mediaModuleobjectFits = ["contain", "cover", "fill", "none", "scale-down"];
export const mediaModuleobjectFitFallback = "fill";

export const colorFallback = "brand";
export const colorVariantFallback = "tone-a";
