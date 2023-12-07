import fs from "fs";
import StyleDictionary from "style-dictionary";
import { getStyleDictionaryConfig } from "./src/styleDictionary/getStyleDictionaryConfig";
import { jsonNested } from "./src/styleDictionary/jsonNestedFormat";
import { sanitizeJsonFromFigma } from "./src/styleDictionary/sanitizeJsonFromFigma";
import { additionalTokens } from "./additionalTokens";

const jsonString = fs.readFileSync("tokens-from-figma.json", "utf-8");

type FigmaMode = "light" | "dark";

interface ThemeConfig {
  figmaMode: FigmaMode;
  themeName: string;
}

const themeConfigs: ThemeConfig[] = [
  {
    figmaMode: "light",
    themeName: "default",
  },
  {
    figmaMode: "dark",
    themeName: "dark",
  },
];

const defaultModeNameFromFigma: FigmaMode = "dark";

StyleDictionary.registerFormat(jsonNested);

// Convert Figma modes into themes

const buildThemeTokens = ({ figmaMode, themeName }: ThemeConfig) => {
  const allTokens = getAllTokens(figmaMode);
  const config = getStyleDictionaryConfig(themeName, allTokens);
  StyleDictionary.extend(config).buildAllPlatforms();
};

// Merge tokens from Figma and temporary, hardcoded tokens

const getAllTokens = (figmaMode: FigmaMode) => {
  const sanitizedJson = sanitizeJsonFromFigma(
    jsonString,
    defaultModeNameFromFigma,
    figmaMode
  );
  return {
    ...sanitizedJson,
    ...additionalTokens,
  };
};

themeConfigs.forEach(buildThemeTokens);
