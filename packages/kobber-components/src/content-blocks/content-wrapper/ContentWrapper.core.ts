import { layout } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
export const contentWrapperTokens = layout["content-wrapper"];

import { objectKeys } from "../../base/utilities/objectKeys";
import type { TextBodyColor } from "../../text/text-body/TextBody.core";

export const contentWrapperName = "kobber-content-wrapper";
type ContentTopBlockClassNames = typeof contentWrapperName;

export const contentWrapperClassnames = (): ContentTopBlockClassNames[] => {
  return [contentWrapperName];
};

export type ContentWrapperClassNames = typeof contentWrapperName | "full-width";

export const contentWrapperTypes = ["overlay", "page"] as const;
type ContentWrapperType = (typeof contentWrapperTypes)[number];

export const contentWrapperColorVariants = objectKeys(contentWrapperTokens.background.color.brand);
type ContentWrapperColorVariant = (typeof contentWrapperColorVariants)[number];

export type ContentWrapperProps = {
  color?: TextBodyColor;
  colorVariant?: ContentWrapperColorVariant;
  type?: ContentWrapperType;
  maxHeightInPx?: number;
};
