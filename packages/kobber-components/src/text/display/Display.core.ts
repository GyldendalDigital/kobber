import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const displayTokens = universal["text-display-extended"];

export const displayName = "kobber-display";

const displayLevelFallback = "h1";

export const displayClassNames = (): DisplayClassNames[] => {
  return [displayName];
};

export const sanitizeDisplayLevel = (level: DisplayLevel | undefined): DisplayLevel =>
  level && displayLevels.includes(level) ? level : displayLevelFallback;

export type DisplayProps = {
  level?: DisplayLevel;
  size?: DisplaySize;
  font?: DisplayFont;
};

type DisplayClassNames = typeof displayName;

type DisplayLevel = (typeof displayLevels)[number];
type DisplaySize = (typeof displaySizes)[number];
type DisplayFont = (typeof displayFonts)[number];

const displayLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"] as const;

export const displaySizes = objectKeys(displayTokens.text.size);
export const displayFonts = objectKeys(displayTokens.extended.text.font);
