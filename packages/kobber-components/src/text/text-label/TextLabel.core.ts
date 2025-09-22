import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const textLabelTokens = universal["text-label"].text;

export const textLabelName = "kobber-text-label";

const textLabelLevelFallback = "span";

export const sanitizeTextLabelLevel = (level: TextLabelLevel | undefined): TextLabelLevel =>
  level && textLabelLevels.includes(level) ? level : textLabelLevelFallback;

export type TextLabelProps = {
  level?: TextLabelLevel;
  size?: TextLabelSize;
  color?: TextLabelColor;
  colorVariant?: TextLabelColorVariant;
};

type TextLabelLevel = (typeof textLabelLevels)[number];
type TextLabelSize = (typeof textLabelSizes)[number];
type TextLabelColor = (typeof textLabelColors)[number];
type TextLabelColorVariant = (typeof textLabelColorVariants)[number];

const textLabelLevels = ["span", "div", "p"] as const;
export const textLabelSizes = objectKeys(textLabelTokens.size);
export const textLabelColors = objectKeys(textLabelTokens.color);
export const textLabelColorVariants = objectKeys(textLabelTokens.color.brand);
