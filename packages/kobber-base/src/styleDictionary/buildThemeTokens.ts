import StyleDictionary from "style-dictionary";
import type { ThemeConfig } from "../types";
import { esmFormat } from "./formats/esm";
import { esmWithCssVariableValues } from "./formats/esmWithCssVariableValues";
import { textFormat } from "./formats/textFormat";
import { tsDeclarationsFormat } from "./formats/tsDeclarations";
import { getStyleDictionaryConfig } from "./getStyleDictionaryConfig";
import { registerFormats } from "./registerFormats";
import { registerTransforms } from "./registerTransforms";
import { sanitizeJsonFromFigma } from "./sanitizeJsonFromFigma";
import { dimensionToNumberOverrideTransform } from "./transforms/dimensionToNumberOverride";
import { fluidClampTransform } from "./transforms/fluidClamp";
import { fontWeightScopeHandlerTransform } from "./transforms/fontWeightScopeHandler";
import { opacityScopeHandlerTransform } from "./transforms/opacityScopeHandler";

/**
 * Convert Figma modes into themes
 */
export const buildThemeTokens = async (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  registerFormats([esmFormat, tsDeclarationsFormat, esmWithCssVariableValues, textFormat]);
  registerTransforms([
    fluidClampTransform,
    dimensionToNumberOverrideTransform,
    opacityScopeHandlerTransform,
    fontWeightScopeHandlerTransform,
  ]);

  const allTokens = getAllTokens(tokensFromFigma, themeConfig);

  const styleDictionaryConfig = getStyleDictionaryConfig(allTokens, themeConfig);

  try {
    const sd = new StyleDictionary(styleDictionaryConfig);
    sd.log.verbosity = "verbose";
    await sd.hasInitialized;
    await sd.buildAllPlatforms();
    return { allTokens, styleDictionaryConfig };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to build tokens");
  }
};

// Merge tokens from Figma and temporary, hardcoded tokens
const getAllTokens = (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  const sanitizedJson = sanitizeJsonFromFigma(JSON.stringify(tokensFromFigma), themeConfig);

  delete sanitizedJson.grid;
  delete sanitizedJson.typography;

  return sanitizedJson;
};
