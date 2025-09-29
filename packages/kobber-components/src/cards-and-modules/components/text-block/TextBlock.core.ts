import { layout } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

export const textBlockTokens = layout["text-block"];

export const textBlockName = "kobber-text-block";

export type TextBlockClassNames = typeof textBlockName;

export const textBlockClassnames = (): TextBlockClassNames[] => {
  return [textBlockName];
};
