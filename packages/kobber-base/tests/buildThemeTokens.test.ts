import * as fs from "fs";
import StyleDictionary from "style-dictionary";
import { ThemeConfig, themeDirectory } from "../src/types";
import { buildThemeTokens } from "../src/styleDictionary/buildThemeTokens";

/** Assert various steps of token build */
export const buildThemeTokensTest = (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  const { allTokens, styleDictionaryConfig } = buildThemeTokens(tokensFromFigma, themeConfig);

  assertSanitized(allTokens, themeConfig);

  assertBuildComplete(styleDictionaryConfig, themeConfig);
};

const assertSanitized = (tokensFromFigmaSanitized: any, themeConfig: ThemeConfig) => {
  const sanitizedString = JSON.stringify(tokensFromFigmaSanitized);
  if (sanitizedString.includes(`primitives.${themeConfig.figmaMode}`)) {
    console.error(`Sanitation failed. Tokens still includes primitives.${themeConfig.figmaMode}`);
  }
  if (sanitizedString.includes(`semantics.${themeConfig.figmaMode}`)) {
    console.error(`Sanitation failed. Tokens still includes semantics.${themeConfig.figmaMode}`);
  }
};

const assertBuildComplete = (styleDictionaryConfig: StyleDictionary.Config, themeConfig: ThemeConfig) => {
  const tokenDirectory = `${themeDirectory}/${themeConfig.themeName}`;
  if (!fs.existsSync(`${tokenDirectory}/tokens.json`)) {
    console.error(`Build failed. Files does not exist in ${tokenDirectory}`);
  }
};
