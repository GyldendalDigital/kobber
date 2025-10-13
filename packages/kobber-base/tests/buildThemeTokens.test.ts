import * as fs from "node:fs";
import type { Config } from "style-dictionary/types";
import { buildThemeTokens } from "../src/styleDictionary/buildThemeTokens";
import { type ThemeConfig, themeDirectory } from "../src/types";

/** Assert various steps of token build */
export const buildThemeTokensTest = async (tokensFromFigma: any, themeConfig: ThemeConfig) => {
  const { allTokens, styleDictionaryConfig } = await buildThemeTokens(tokensFromFigma, themeConfig);

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

const assertBuildComplete = (_styleDictionaryConfig: Config, themeConfig: ThemeConfig) => {
  const tokenDirectory = `${themeDirectory}/${themeConfig.themeName}`;
  if (!fs.existsSync(`${tokenDirectory}/tokens.json`)) {
    console.error(`Build failed. Files does not exist in ${tokenDirectory}`);
  }
};

export const findUnusedTokens = (themeConfig: ThemeConfig) => {
  console.log(`Searching for unused tokens in ${themeConfig.themeName} theme`);
  const themeTokensDirectory = `${themeDirectory}/${themeConfig.themeName}`;
  const css = fs.readFileSync(`${themeTokensDirectory}/tokens.css`, "utf-8");
  const cssTokens = css?.split("{")[1]?.split("}")[0]?.trim().split(";");
  if (!cssTokens) {
    console.error("No css tokens found in tokens.css file");
    return;
  }

  let unusedTokens = 0;

  for (const token of cssTokens) {
    const tokenName = token.split(":")[0]?.trim();
    if (!tokenName) {
      continue;
    }

    if (tokenName.startsWith("--kobber-component")) {
      continue;
    }
    if (tokenName.startsWith("--kobber-universal")) {
      continue;
    }
    if (tokenName.startsWith("--kobber-layout")) {
      continue;
    }

    const occurrences = css.split(tokenName).length - 1;
    if (occurrences < 2) {
      console.log(`Unused token: ${tokenName}`);
      unusedTokens++;
    }
  }

  console.log(`Found ${unusedTokens} unused tokens in ${themeConfig.themeName} theme`);
  console.log(`(skipped component tokens)`);
};
