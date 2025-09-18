import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const titleTokens = universal["text-title"];

export const titleName = "kobber-title";

const titleLevelFallback = "h1";

export const sanitizeTitleLevel = (level: TitleLevel | undefined): TitleLevel =>
  level && titleLevels.includes(level) ? level : titleLevelFallback;

export type TitleProps = {
  level?: TitleLevel;
  size?: TitleSize;
  font?: TitleFont;
  color?: TitleColor;
  colorVariant?: TitleColorVariant;
};

type TitleLevel = (typeof titleLevels)[number];
type TitleSize = (typeof titleSizes)[number];
type TitleFont = (typeof titleFonts)[number];
type TitleColor = (typeof titleColors)[number];
type TitleColorVariant = (typeof titleColorVariants)[number];

const titleLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"] as const;
export const titleSizes = objectKeys(titleTokens.text.size);
export const titleFonts = objectKeys(titleTokens.text.font);
export const titleColors = objectKeys(titleTokens.text.color);
export const titleColorVariants = objectKeys(titleTokens.text.color.brand);
