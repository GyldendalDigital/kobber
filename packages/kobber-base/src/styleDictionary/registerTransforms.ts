import StyleDictionary from "style-dictionary";
import type { Transform } from "style-dictionary/types";
import { fluidClampTransform } from "./transforms/fluidClamp";

export const cssTransforms = [
  "attribute/cti",
  "name/kebab",
  "time/seconds",
  "html/icon",
  // "size/pxToRem", // removed until we decide to use rem
  // "size/rem", // Figma numbers units are in px // https://styledictionary.com/reference/hooks/transforms/predefined/#sizerem
  "color/css",
  fluidClampTransform.name,
];

export const jsTransforms = [
  "attribute/cti",
  "name/pascal",
  // "size/pxToRem", // removed until we decide to use rem
  "color/hex",
  fluidClampTransform.name,
];

export const registerTransforms = (transforms: Transform[]) => {
  transforms.forEach(t => StyleDictionary.registerTransform(t));
  console.log(`Transforms registered: ${transforms.map(f => f.name).join(", ")}`);
};
