import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

export const textListElementTokens = component["_list-elements"];

export const textListElementName = "kobber-text-list-element";
export const textListElementBodyClassName = "body";
export const nestedListSlotName = "nested";
export type TextListElementClassNames = typeof textListElementName;
export type TextListElementBodyClassNames = typeof textListElementBodyClassName;
export type NestedListSlotNames = typeof nestedListSlotName;
