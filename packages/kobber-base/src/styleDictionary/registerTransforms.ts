import StyleDictionary from "style-dictionary";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { pxToRemTransform } from "./transforms/pxToRem";

export const cssTransforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "size/rem",
  "color/css",
  fluidClampTransform.name,
  pxToRemTransform.name,
];

export const jsTransforms = ["attribute/cti", "name/cti/pascal", "size/rem", "color/hex", fluidClampTransform.name];

export const registerTransforms = (transforms: StyleDictionary.Named<StyleDictionary.Transform>[]) => {
  transforms.forEach(t => StyleDictionary.registerTransform(t));
  console.log(`Transforms registered: ${transforms.map(f => f.name).join(", ")}`);
};
