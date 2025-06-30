type FigmaMode = "mode 1" | "mode 2";

export interface ThemeConfig {
  figmaMode: FigmaMode;
  themeName: string;
}

export const themeDirectory = "./dist/themes";
