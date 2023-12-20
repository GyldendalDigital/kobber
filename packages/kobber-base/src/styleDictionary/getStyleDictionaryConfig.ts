import StyleDictionary, { Config, TransformedToken } from "style-dictionary";
import { esmFormat } from "./formats/esm";
import { jsonFormat } from "./formats/json";
import { tsDeclarationsFormat } from "./formats/tsDeclarations";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { pxToRemTransform } from "./transforms/pxToRem";

const cssTransforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "size/rem",
  "color/css",
  fluidClampTransform.name,
  pxToRemTransform.name,
];

const jsTransforms = [
  "attribute/cti",
  "name/cti/pascal",
  "size/rem",
  "color/hex",
  fluidClampTransform.name,
];

StyleDictionary.registerTransform(pxToRemTransform);

StyleDictionary.registerTransform(fluidClampTransform);

const buildPath = "./themes/";

const invalid = ["font", "effect"];

const filter = (token: TransformedToken) => !invalid.includes(token.path[0]);

export const getStyleDictionaryConfig = (
  themeName: string,
  tokensFromFigma: any,
  transforms: string[] = []
): Config => {
  return {
    tokens: tokensFromFigma,
    platforms: {
      scss: {
        transforms: [...cssTransforms, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.scss`,
            format: "scss/variables",
            filter,
          },
        ],
      },
      css: {
        transforms: [...cssTransforms, ...transforms],
        buildPath,
        prefix: "kobber",
        files: [
          {
            destination: `${themeName}/tokens.css`,
            format: "css/variables",
            filter,
            options: {
              outputReferences: true,
              selector: `.kobber-theme-${themeName}`,
            },
          },
        ],
      },
      object: {
        transforms: [...jsTransforms, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.json`,
            format: jsonFormat.name,
            filter,
          },
          {
            destination: `${themeName}/tokens.js`,
            format: esmFormat.name,
            filter,
          },
          {
            destination: `${themeName}/tokens.d.ts`,
            format: tsDeclarationsFormat.name,
            filter,
          },
        ],
      },
    },
  };
};
