import fs from "fs";
import StyleDictionary from "style-dictionary";
import { additionalTokens } from "./additionalTokens";
import { esmFormat } from "./src/styleDictionary/formats/esm";
import { jsonFormat } from "./src/styleDictionary/formats/json";
import { tsDeclarationsFormat } from "./src/styleDictionary/formats/tsDeclarations";
import { getStyleDictionaryConfig } from "./src/styleDictionary/getStyleDictionaryConfig";
import { sanitizeJsonFromFigma } from "./src/styleDictionary/sanitizeJsonFromFigma";

const jsonString = fs.readFileSync("tokens-from-figma.json", "utf-8");

type FigmaMode = "mode1" | "mode2";

interface ThemeConfig {
  figmaMode: FigmaMode;
  themeName: string;
}

const themeConfigs: ThemeConfig[] = [
  {
    figmaMode: "mode1",
    themeName: "default",
  },
  {
    figmaMode: "mode2",
    themeName: "dark",
  },
];

const defaultModeNameFromFigma: FigmaMode = "mode2";

StyleDictionary.registerFormat(jsonFormat);

StyleDictionary.registerFormat(esmFormat);

StyleDictionary.registerFormat(tsDeclarationsFormat);

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
