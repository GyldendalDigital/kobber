import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const textBodyTokens = universal["text-body"];
export const textListTokens = component.list;

export const textListName = "kobber-text-list";
export type TextListClassNames = typeof textListName;

export type TextListProps = {
  color?: TextListColor;
  colorVariant?: TextListColorVariant;
  nested?: boolean;
  size?: TextListSize;
  type?: TextListType;
};

type TextListColor = (typeof textListColors)[number];
type TextListColorVariant = (typeof textListColorVariants)[number];
type TextListSize = (typeof textListSizes)[number];
type TextListType = (typeof textListTypes)[number];

/* Text list takes text body tokens as arguments, to forward to the list's children. */
export const textListSizes = objectKeys(textListTokens.gap.ordered);
export const textListColors = objectKeys(textBodyTokens.text.color);
export const textListColorVariants = objectKeys(textBodyTokens.text.color.brand);

export const textListTypes = ["ordered", "unordered"] as const;
export const textListTypeFallback: TextListType = "ordered";
export const textListSizeFallback: TextListSize = "medium";

/**
 * List style types: These must either be found among predefined counter
 * styles (https://w3c.github.io/predefined-counter-styles/),
 * or must be defined as our own @counter-style
 * (https://www.w3.org/TR/css-counter-styles-3/).
 */
export const textListOrderedStyleTypes = ["decimal", "lower-alpha"];
export const textListUnorderedStyleTypes = ["disc"];
