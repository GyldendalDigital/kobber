import { layout } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
export const contentWrapperTokens = layout["content-wrapper"];

import { objectKeys } from "../../base/utilities/objectKeys";

export const contentWrapperName = "kobber-content-wrapper";
type ContentTopBlockClassNames = typeof contentWrapperName;

export const contentWrapperClassnames = (): ContentTopBlockClassNames[] => {
  return [contentWrapperName];
};

export const contentWrapperTypes: ContentWrapperType[] = ["overlay", "page"];
type ContentWrapperType = "overlay" | "page";
export type ContentWrapperClassNames = typeof contentWrapperName | "full-width";

type ContentWrapperColorVariant = (typeof contentWrapperColorVariants)[number];

export const contentWrapperColorVariants = objectKeys(contentWrapperTokens.background.color.brand);

export type ContentWrapperProps = {
  colorVariant?: ContentWrapperColorVariant;
  type?: ContentWrapperType;
  maxHeightInPx?: number;
};
