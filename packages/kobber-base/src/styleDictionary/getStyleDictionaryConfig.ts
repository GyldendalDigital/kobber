import type { TransformedToken, Config } from "style-dictionary/types";
import { esmFormat } from "./formats/esm";
import { jsonFormat } from "./formats/json";
import { cssTransforms, jsTransforms, registerTransforms } from "./registerTransforms";
import { tsDeclarationsFormat } from "./formats/tsDeclarations";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { pxToRemTransform } from "./transforms/pxToRem";
import { ThemeConfig, themeDirectory } from "../types";

const buildPath = themeDirectory + "/";

const invalidKeys = ["font"];

const filter = (token: TransformedToken) => !invalidKeys.includes(token.path[0]);

/**
 * Create a config object from tokens, transforms and formats
 */
export const getStyleDictionaryConfig = (
  sanitizedTokensFromFigma: any,
  themeConfig: ThemeConfig,
  transforms: string[] = [],
): Config => {
  registerTransforms([pxToRemTransform, fluidClampTransform]);

  return {
    tokens: sanitizedTokensFromFigma,
    platforms: {
      scss: {
        transforms: [...cssTransforms, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeConfig.themeName}/tokens.scss`,
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
            destination: `${themeConfig.themeName}/tokens.css`,
            format: "css/variables",
            filter,
            options: {
              outputReferences: true,
              selector: `.kobber-theme-${themeConfig.themeName}`,
            },
          },
        ],
      },
      object: {
        transforms: [...jsTransforms, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeConfig.themeName}/tokens.json`,
            format: jsonFormat.name,
            filter,
          },
          {
            destination: `${themeConfig.themeName}/tokens.js`,
            format: esmFormat.name,
            filter,
          },
          {
            destination: `${themeConfig.themeName}/tokens.d.ts`,
            format: tsDeclarationsFormat.name,
            filter,
          },
        ],
      },
    },
  };
};
