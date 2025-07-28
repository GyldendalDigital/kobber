import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

const badgeIconTokens = component["badge-icon"];

export const badgeIconName = "kobber-badge-icon";
export const badgeIconIconName = "icon";

export type BadgeIconProps = {
  variant?: BadgeIconVariant;
  theme?: BadgeIconTheme;
  size?: BadgeIconSize;
};

export type BadgeIconClassName = typeof badgeIconName;
export type BadgeIconIconClassName = typeof badgeIconIconName;
export type BadgeIconTheme = keyof typeof badgeIconTokens.text.color;
export type BadgeIconVariant = keyof (typeof badgeIconTokens.text.color)[BadgeIconTheme];
export type BadgeIconSize = keyof typeof badgeIconTokens.gap;

export const badgeIconThemes = Object.keys(badgeIconTokens.text.color) as BadgeIconTheme[];
export const badgeIconVariants = Object.keys(badgeIconTokens.text.color.aubergine) as BadgeIconVariant[];
export const badgeIconSizes = Object.keys(badgeIconTokens.gap) as BadgeIconSize[];
