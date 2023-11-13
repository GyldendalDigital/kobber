import fs from "fs";
import StyleDictionary from "style-dictionary";
import { getStyleDictionaryConfig } from "./config";
import { minifyDictionary } from "./utils/minifyDictionary";

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

const defaultModeNameFromFigma = "dark";

const sanitizeJsonFromFigma = (
  jsonString: string,
  mode: ThemeConfig["modeInFigma"]
) => {
  // Figma exports tokens that reference one of the modes.
  // Remove the mode name from the references.
  const regExp = new RegExp(`semantic.${defaultModeNameFromFigma}`, "g");
  const replaced = jsonString.replace(regExp, "semantic");

  // Return JSON that do not include objects with mode names in them
  const json = JSON.parse(replaced);
  return {
    ...json,
    semantic: json.semantic[mode],
  };
};

StyleDictionary.registerFormat({
  name: "json/nested-v2",
  formatter: ({ dictionary }) =>
    JSON.stringify(minifyDictionary(dictionary.tokens), null, 2) + "\n",
});

themeConfigs.map(({ modeInFigma, themeName }) => {
  const config = getStyleDictionaryConfig(
    themeName,
    sanitizeJsonFromFigma(jsonString, modeInFigma)
  );
  StyleDictionary.extend(config).buildAllPlatforms();
});
