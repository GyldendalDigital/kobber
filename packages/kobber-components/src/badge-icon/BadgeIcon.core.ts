import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

const badgeIconTokens = component["badge-icon"];

export const badgeIconName = "kobber-badge-icon";
export const badgeIconIconName = "icon";

export type BadgeIconProps = {
  colorVariant?: BadgeIconColorVariant;
  color?: BadgeIconColor;
  size?: BadgeIconSize;
};

export type BadgeIconClassName = typeof badgeIconName;
export type BadgeIconIconClassName = typeof badgeIconIconName;
export type BadgeIconColor = (typeof badgeIconColors)[number];
export type BadgeIconColorVariant = (typeof badgeIconColorVariants)[number];
export type BadgeIconSize = (typeof badgeIconSizes)[number];

export const badgeIconColors = objectKeys(badgeIconTokens.icon.shape.color);
export const badgeIconColorVariants = objectKeys(badgeIconTokens.icon.shape.color.brand);
export const badgeIconSizes = objectKeys(badgeIconTokens.gap);
