import { layout } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

export const contentTopBlockTokens = layout["content-top-block"];

export const contentTopBlockName = "kobber-content-top-block";

export type ContentTopBlockClassNames = typeof contentTopBlockName;

export const contentTopBlockClassnames = (): ContentTopBlockClassNames[] => {
  return [contentTopBlockName];
};
