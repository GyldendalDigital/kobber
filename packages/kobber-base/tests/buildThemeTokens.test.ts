import type { Config } from "style-dictionary/types";
import * as fs from "fs";
import { ThemeConfig, themeDirectory } from "../src/types";
import { buildThemeTokens } from "../src/styleDictionary/buildThemeTokens";

/** Assert various steps of token build */
export const buildThemeTokensTest = async (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  const { allTokens, styleDictionaryConfig } = await buildThemeTokens(tokensFromFigma, themeConfig, false);

  assertSanitized(allTokens, themeConfig);

  assertBuildComplete(styleDictionaryConfig, themeConfig);
};

const assertSanitized = (tokensFromFigmaSanitized: any, themeConfig: ThemeConfig) => {
  const sanitizedString = JSON.stringify(tokensFromFigmaSanitized);
  if (sanitizedString.includes(`primitives.${themeConfig.figmaMode}`)) {
    console.error(`Sanitation failed. Tokens still includes primitives.${themeConfig.figmaMode}`);
  }
  if (sanitizedString.includes(`regional.${themeConfig.figmaMode}`)) {
    console.error(`Sanitation failed. Tokens still includes regional.${themeConfig.figmaMode}`);
  }
};

const assertBuildComplete = (styleDictionaryConfig: Config, themeConfig: ThemeConfig) => {
  const tokenDirectory = `${themeDirectory}/${themeConfig.themeName}`;
  if (!fs.existsSync(`${tokenDirectory}/tokens.json`)) {
    console.error(`Build failed. Files does not exist in ${tokenDirectory}`);
  }
};
