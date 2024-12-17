import StyleDictionary from "style-dictionary";
import type { Transform } from "style-dictionary/types";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { pxToRemTransform } from "./transforms/pxToRem";

export const cssTransforms = [
  "attribute/cti",
  "name/kebab",
  "time/seconds",
  "html/icon",
  "size/rem",
  "color/css",
  fluidClampTransform.name,
  pxToRemTransform.name,
];

export const jsTransforms = ["attribute/cti", "name/pascal", "size/rem", "color/hex", fluidClampTransform.name];

export const registerTransforms = (transforms: Transform[]) => {
  transforms.forEach(t => StyleDictionary.registerTransform(t));
  console.log(`Transforms registered: ${transforms.map(f => f.name).join(", ")}`);
};
