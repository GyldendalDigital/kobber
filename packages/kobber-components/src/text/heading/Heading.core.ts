import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const headingTokens = universal["text-heading"];

export const headingName = "kobber-heading";

const headingLevelFallback = "h1";

export const headingClassNames = (): HeadingClassNames[] => {
  return [headingName];
};

export const sanitizeHeadingLevel = (level: HeadingLevel | undefined): HeadingLevel =>
  level && headingLevels.includes(level) ? level : headingLevelFallback;

export type HeadingProps = {
  level?: HeadingLevel;
  size?: HeadingSize;
  font?: HeadingFont;
  color?: HeadingColor;
  colorVariant?: HeadingColorVariant;
};

type HeadingClassNames = typeof headingName;

type HeadingLevel = (typeof headingLevels)[number];
type HeadingSize = (typeof headingSizes)[number];
type HeadingFont = (typeof headingFonts)[number];
type HeadingColor = (typeof headingColors)[number];
type HeadingColorVariant = (typeof headingColorVariants)[number];

const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"] as const;

export const headingSizes = objectKeys(headingTokens.text.size);
export const headingFonts = objectKeys(headingTokens.text.font);
export const headingColors = objectKeys(headingTokens.text.color);
export const headingColorVariants = objectKeys(headingTokens.text.color.brand);
