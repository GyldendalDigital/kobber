import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

const headingTokens = universal.text;

export const headingName = "kobber-heading";

const headingLevelFallback = "h1";

export const headingClassNames = (): HeadingClassNames[] => {
  return [headingName];
};

export const sanitizeHeadingLevel = (level: HeadingLevel | undefined): HeadingLevel =>
  level && headingLevels.includes(level) ? level : headingLevelFallback;

export type HeadingProps = {
  level?: HeadingLevel;
  element?: HeadingElement;
  colorLevel?: HeadingColorLevel;
  size?: HeadingSize;
};

type HeadingClassNames = typeof headingName;
type HeadingLevel = (typeof headingLevels)[number];
type HeadingElement = (typeof headingElements)[number];
type HeadingColorLevel = (typeof headingColorLevels)[number];
type HeadingSize = (typeof headingSizes)[number];

const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"] as const;

export const headingElements = objectKeys(headingTokens.primary.size);
export const headingColorLevels = objectKeys(headingTokens);
export const headingSizes = objectKeys(headingTokens.primary.size.display);
