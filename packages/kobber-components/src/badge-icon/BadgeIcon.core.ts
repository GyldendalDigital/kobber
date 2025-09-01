import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

const badgeIconTokens = component["badge-icon"];

export const badgeIconName = "kobber-badge-icon";
export const badgeIconIconName = "icon";

export type BadgeIconProps = {
  colorVariant?: BadgeIconColorVariant;
  colorTheme?: BadgeIconColorTheme;
  size?: BadgeIconSize;
};

export type BadgeIconClassName = typeof badgeIconName;
export type BadgeIconIconClassName = typeof badgeIconIconName;
export type BadgeIconColorTheme = (typeof badgeIconColorThemes)[number];
export type BadgeIconColorVariant = (typeof badgeIconColorVariants)[number];
export type BadgeIconSize = (typeof badgeIconSizes)[number];

export const badgeIconColorThemes = objectKeys(badgeIconTokens.text.color);
export const badgeIconColorVariants = objectKeys(badgeIconTokens.text.color.aubergine);
export const badgeIconSizes = objectKeys(badgeIconTokens.gap);
