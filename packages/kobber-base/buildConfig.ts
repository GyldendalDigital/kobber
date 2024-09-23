import type { ThemeConfig } from "./src/types";

const defaultModeNameFromFigma: ThemeConfig["figmaMode"] = "mode 1";

export const themeConfigs: ThemeConfig[] = [
  {
    figmaMode: defaultModeNameFromFigma,
    themeName: "default",
  },
  {
    figmaMode: defaultModeNameFromFigma, // only one mode in Figma atm, but we simulate two themes
    themeName: "dark",
  },
];
