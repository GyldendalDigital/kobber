import { typography, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../../base/utilities/replace";

export const headingName = "kobber-heading";

export const headingLevelFallback = "h1";

export const headingClassNames = ({
  level = "h1",
  variant = "display small",
  font = "primary",
}: HeadingProps): HeadingClassNames[] => {
  return [headingName, sanitizeHeadingLevel(level), replaceSpaceWithDash(variant), font];
};

export const sanitizeHeadingLevel = (level: HeadingLevel | undefined): HeadingLevel =>
  level && headingLevels.includes(level) ? level : headingLevelFallback;

export type HeadingProps = {
  level?: HeadingLevel;
  variant?: HeadingVariant;
  font?: HeadingFont;
};

export type HeadingClassNames = typeof headingName | HeadingLevel | ReplaceSpaceWithDash<HeadingVariant> | HeadingFont;

export type HeadingLevel = (typeof headingLevels)[number];
export type HeadingVariant = HeadingPrimarySize | HeadingSecondarySize;
export type HeadingPrimarySize = (typeof headingPrimarySizes)[number];
export type HeadingSecondarySize = (typeof headingSecondarySizes)[number];
export type HeadingFont = (typeof headingFonts)[number];

export const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"] as const;

export const headingPrimarySizes = [
  "display large",
  "display medium",
  "display small",
  "heading medium",
  "heading small",
  "title medium",
  "title small",
] as const satisfies (keyof (typeof typography)["primary (mori)"])[];

export const headingSecondarySizes = [
  "display large",
  "display medium",
  "display small",
  "heading medium",
  "heading small",
] as const satisfies (keyof (typeof typography)["secondary (lyon)"])[];

export const headingFonts = ["primary", "secondary"] satisfies (keyof (typeof universal)["text"])[];
