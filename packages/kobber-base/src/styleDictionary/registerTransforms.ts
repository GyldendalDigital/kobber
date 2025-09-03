import StyleDictionary from "style-dictionary";
import type { Transform } from "style-dictionary/types";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { dimensionToNumberOverrideTransform } from "./transforms/dimensionToNumberOverride";
import { opacityScopeHandlerTransform } from "./transforms/opacityScopeHandler";
import { fontWeightScopeHandlerTransform } from "./transforms/fontWeightScopeHandler";

/** Docs: https://styledictionary.com/reference/hooks/transforms/predefined */
export const cssTransforms = [
  "attribute/cti",
  "name/kebab",
  "time/seconds",
  "html/icon",
  opacityScopeHandlerTransform.name, // needs to be registered before pxToRem 👇
  fontWeightScopeHandlerTransform.name, // needs to be registered before pxToRem 👇
  dimensionToNumberOverrideTransform.name, // needs to be registered before pxToRem 👇
  "size/pxToRem",
  "color/css",
  fluidClampTransform.name,
];

export const jsTransforms = [
  "attribute/cti",
  "name/pascal",
  // opacityScopeHandlerTransform.name, // should be added if pxToRem is added
  // fontWeightScopeHandlerTransform.name, // should be added if pxToRem is added
  // dimensionToNumberOverrideTransform.name, // should be added if pxToRem is added
  // "size/pxToRem", // Keep px values in JS for calculations
  "color/hex",
  fluidClampTransform.name,
];

export const registerTransforms = (transforms: Transform[]) => {
  transforms.forEach(t => StyleDictionary.registerTransform(t));
  console.log(`Transforms registered: ${transforms.map(f => f.name).join(", ")}`);
};
