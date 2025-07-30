import StyleDictionary from "style-dictionary";
import { ThemeConfig } from "../types";
import { esmFormat } from "./formats/esm";
import { tsDeclarationsFormat } from "./formats/tsDeclarations";
import { getStyleDictionaryConfig } from "./getStyleDictionaryConfig";
import { registerFormats } from "./registerFormats";
import { sanitizeJsonFromFigma } from "./sanitizeJsonFromFigma";
import { esmWithCssVariableValues } from "./formats/esmWithCssVariableValues";
import { registerTransforms } from "./registerTransforms";
import { fluidClampTransform } from "./transforms/fluidClamp";

/**
 * Convert Figma modes into themes
 */
export const buildThemeTokens = async (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  registerFormats([esmFormat, tsDeclarationsFormat, esmWithCssVariableValues]);
  registerTransforms([fluidClampTransform]);

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
