import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

export const badgeTokens = component.badge;

export const badgeName = "kobber-badge";

export const badgeClassNames = ({ showStatusCircle = false }: BadgeProps): BadgeClassNames[] => {
  const conditionalClassNames: BadgeClassNames[] = [];

  if (showStatusCircle) {
    conditionalClassNames.push("status-circle");
  }

  return [badgeName, ...conditionalClassNames];
};

export type BadgeProps = {
  color?: BadgeColor;
  colorVariant?: BadgeColorVariant;
  size?: BadgeSize;
  showStatusCircle?: boolean;
};

export type BadgeClassNames = typeof badgeName | "status-circle";
export type BadgeColor = (typeof badgeColors)[number];
export type BadgeColorVariant = (typeof badgeColorVariants)[number];
export type BadgeSize = (typeof badgeSizes)[number];

export const badgeColors = objectKeys(badgeTokens.background.color);
export const badgeColorVariants = objectKeys(badgeTokens.background.color.brand);
export const badgeSizes = objectKeys(badgeTokens.gap);
