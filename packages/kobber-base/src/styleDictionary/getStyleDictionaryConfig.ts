import StyleDictionary, {
  Config,
  TransformedToken,
  transformGroup,
} from "style-dictionary";
import { esmFormat } from "./formats/esm";
import { jsonFormat } from "./formats/json";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { pxToRemTransform } from "./transforms/pxToRem";

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
        transforms: [
          ...transformGroup.scss,
          fluidClampTransform.name,
          ...transforms,
        ],
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
        transforms: [
          ...transformGroup.css,
          fluidClampTransform.name,
          pxToRemTransform.name,
          ...transforms,
        ],
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
      json: {
        transforms: [
          ...transformGroup.js,
          fluidClampTransform.name,
          ...transforms,
        ],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.json`,
            format: jsonFormat.name,
            filter,
          },
        ],
      },
      js: {
        transforms: [
          ...transformGroup.js,
          fluidClampTransform.name,
          ...transforms,
        ],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.js`,
            format: esmFormat.name,
            filter,
          },
          {
            destination: `${themeName}/tokens.ts`,
            format: esmFormat.name,
            filter,
          },
        ],
      },
    },
  };
};
