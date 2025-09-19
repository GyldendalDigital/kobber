import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const textBodyTokens = universal["text-body"];

export const textBodyName = "kobber-text-body";

const textBodyLevelFallback = "p";

export const sanitizeTextBodyLevel = (level: TextBodyLevel | undefined): TextBodyLevel =>
  level && textBodyLevels.includes(level) ? level : textBodyLevelFallback;

export type TextBodyProps = {
  level?: TextBodyLevel;
  size?: TextBodySize;
  font?: TextBodyFont;
  color?: TextBodyColor;
  colorVariant?: TextBodyColorVariant;
  context?: TextBodyContext; // short | long
};

type TextBodyLevel = (typeof textBodyLevels)[number];
type TextBodySize = (typeof textBodySizes)[number];
type TextBodyFont = (typeof textBodyFonts)[number];
type TextBodyColor = (typeof textBodyColors)[number];
type TextBodyColorVariant = (typeof textBodyColorVariants)[number];
type TextBodyContext = (typeof textBodyContexts)[number];

const textBodyLevels = ["p", "span", "div"] as const;
export const textBodySizes = objectKeys(textBodyTokens.text.size);
export const textBodyFonts = objectKeys(textBodyTokens.text.font);
export const textBodyColors = objectKeys(textBodyTokens.text.color);
export const textBodyColorVariants = objectKeys(textBodyTokens.text.color.brand);
// line-height path example: line-height.brand.medium.short => [font][size][context]
export const textBodyContexts = objectKeys(textBodyTokens.text["line-height"].brand.medium);
