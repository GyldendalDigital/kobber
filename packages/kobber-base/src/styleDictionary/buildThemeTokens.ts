import StyleDictionary from "style-dictionary";
import { ThemeConfig } from "../types";
import { esmFormat } from "./formats/esm";
import { jsonFormat } from "./formats/json";
import { tsDeclarationsFormat } from "./formats/tsDeclarations";
import { getStyleDictionaryConfig } from "./getStyleDictionaryConfig";
import { registerFormats } from "./registerFormats";
import { sanitizeJsonFromFigma } from "./sanitizeJsonFromFigma";
import { additionalTokens } from "./additionalTokens";

/**
 * Convert Figma modes into themes
 */
export const buildThemeTokens = async (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  registerFormats([jsonFormat, esmFormat, tsDeclarationsFormat]);

  const allTokens = getAllTokens(tokensFromFigma, themeConfig);

  const sdConfig = getStyleDictionaryConfig(allTokens, themeConfig);

  try {
    const sd = new StyleDictionary(sdConfig);
    await sd.hasInitialized;
    await sd.buildAllPlatforms();
  } catch (error) {
    console.error(error);
  }
};

// Merge tokens from Figma and temporary, hardcoded tokens
const getAllTokens = (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  const sanitizedJson = sanitizeJsonFromFigma(JSON.stringify(tokensFromFigma), themeConfig);

  return {
    ...sanitizedJson,
    ...additionalTokens,
  };
};
