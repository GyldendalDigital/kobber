import type { TransformedToken, Config } from "style-dictionary/types";
import { esmFormat } from "./formats/esm";
import { cssTransforms, jsTransforms } from "./registerTransforms";
import { tsDeclarationsFormat } from "./formats/tsDeclarations";
import { ThemeConfig, themeDirectory } from "../types";
import { esmWithCssVariableValues } from "./formats/esmWithCssVariableValues";
import { logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from "style-dictionary/enums";

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
  return {
    log: {
      warnings: logWarningLevels.disabled, // 'warn' | 'error' | 'disabled'
      verbosity: logVerbosityLevels.default, // 'default' | 'silent' | 'verbose'
      errors: {
        brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
      },
    },
    tokens: sanitizedTokensFromFigma,
    platforms: {
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
      jsToCSS: {
        transforms: cssTransforms,
        buildPath,
        prefix: "kobber",
        files: [
          {
            destination: `${themeConfig.themeName}/tokens.css-variables.js`,
            format: esmWithCssVariableValues.name,
            filter,
          },
        ],
      },
      object: {
        transforms: [...jsTransforms, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeConfig.themeName}/tokens.js`,
            format: esmFormat.name,
            filter,
          },
          {
            destination: `${themeConfig.themeName}/tokens.json`,
            format: "json/nested",
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
