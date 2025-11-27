import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";
import { textBodyTokens } from "../text-body/TextBody.core";
import type { textListColors, textListColorVariants } from "../text-list/TextList.core";

export const textListElementTokens = component["_list-elements"];

export const textListElementName = "kobber-text-list-element";
export const textListElementBodyClassName = "body";
export const nestedListSlotName = "nested";
export type TextListElementClassNames = typeof textListElementName;
export type TextListElementBodyClassNames = typeof textListElementBodyClassName;
export type NestedListSlotNames = typeof nestedListSlotName;

type TextListElementColor = (typeof textListColors)[number];
type TextListElementColorVariant = (typeof textListColorVariants)[number];

export const textListElementColors = objectKeys(textBodyTokens.text.color);
export const textListElementColorVariants = objectKeys(textBodyTokens.text.color.brand);

export type TextListElementProps = {
  color?: TextListElementColor;
  colorVariant?: TextListElementColorVariant;
};
