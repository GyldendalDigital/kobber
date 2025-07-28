import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

const dividerTokens = component.divider;

export const dividerName = "kobber-divider";

export type DividerClassNames = typeof dividerName;
export type DividerVariant = keyof typeof dividerTokens.background.color;

export const dividerClassnames = (): DividerClassNames[] => {
  return [dividerName];
};

export const dividerVariants = Object.keys(dividerTokens.background.color) as DividerVariant[];
