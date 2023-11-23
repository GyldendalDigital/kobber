import fs from "fs";
import StyleDictionary from "style-dictionary";
import { jsonNested } from "./src/styleDictionary/jsonNestedFormat";
import { getStyleDictionaryConfig } from "./src/styleDictionary/getStyleDictionaryConfig";
import { sanitizeJsonFromFigma } from "./src/styleDictionary/sanitizeJsonFromFigma";

const jsonString = fs.readFileSync("tokens-from-figma.json", "utf-8");

interface ThemeConfig {
  modeInFigma: "light" | "dark";
  themeName: string;
}

const themeConfigs: ThemeConfig[] = [
  {
    modeInFigma: "light",
    themeName: "default",
  },
  {
    modeInFigma: "dark",
    themeName: "dark",
  },
];

const defaultModeNameFromFigma: ThemeConfig["modeInFigma"] = "dark";

StyleDictionary.registerFormat(jsonNested);

themeConfigs.forEach(({ modeInFigma, themeName }) => {
  const sanitizedJson = sanitizeJsonFromFigma(
    jsonString,
    defaultModeNameFromFigma,
    modeInFigma
  );
  const config = getStyleDictionaryConfig(themeName, sanitizedJson);
  StyleDictionary.extend(config).buildAllPlatforms();
});
