import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

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
  variant?: HeadingVariant;
  size?: HeadingSize;
};

type HeadingClassNames = typeof headingName;
type HeadingLevel = (typeof headingLevels)[number];
type HeadingElement = (typeof headingElements)[number];
type HeadingVariant = (typeof headingVariants)[number];
type HeadingSize = (typeof headingSizes)[number];

const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"] as const;

export const headingElements = ["display", "heading", "title"] satisfies (keyof typeof headingTokens.primary.size)[];

export const headingVariants = ["primary", "secondary"] satisfies (keyof typeof headingTokens)[];

export const headingSizes = ["medium", "small"] satisfies (keyof typeof headingTokens.primary.size.heading)[];
