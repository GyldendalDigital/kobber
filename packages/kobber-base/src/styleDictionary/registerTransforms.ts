import StyleDictionary from "style-dictionary";
import type { Transform } from "style-dictionary/types";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { dimensionToNumberOverrideTransform } from "./transforms/dimensionToNumberOverride";

/** Docs: https://styledictionary.com/reference/hooks/transforms/predefined */
export const cssTransforms = [
  "attribute/cti",
  "name/kebab",
  "time/seconds",
  "html/icon",
  dimensionToNumberOverrideTransform.name, // needs to be registered before pxToRem 👇
  "size/pxToRem",
  "color/css",
  fluidClampTransform.name,
];

export const jsTransforms = [
  "attribute/cti",
  "name/pascal",
  // dimensionToNumberOverrideTransform.name, // should be uncommented if pxToRem is
  // "size/pxToRem", // Keep px values in JS for calculations
  "color/hex",
  fluidClampTransform.name,
];

export const registerTransforms = (transforms: Transform[]) => {
  transforms.forEach(t => StyleDictionary.registerTransform(t));
  console.log(`Transforms registered: ${transforms.map(f => f.name).join(", ")}`);
};
