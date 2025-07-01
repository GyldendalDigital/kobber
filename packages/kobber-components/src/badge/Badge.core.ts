import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../base/utilities/replace";

export const badgeName = "kobber-badge";

export const badgeClassNames = ({
  theme = "aubergine",
  variant = "main",
  size = "medium",
  showStatusCircle = false,
}: BadgeProps): BadgeClassNames[] => {
  const conditionalClassNames: BadgeClassNames[] = [];

  if (showStatusCircle) {
    conditionalClassNames.push("kobber-label--status-circle");
  }

  return [badgeName, theme, replaceSpaceWithDash(variant), size, ...conditionalClassNames];
};

export type BadgeProps = {
  theme?: BadgeTheme;
  variant?: BadgeVariant;
  size?: BadgeSize;
  showStatusCircle?: boolean;
};

export type BadgeClassNames =
  | typeof badgeName
  | BadgeTheme
  | ReplaceSpaceWithDash<BadgeVariant>
  | BadgeSize
  | BadgeText
  | "kobber-label--status-circle";

type BadgeTheme = keyof typeof component.badge.background.color;
type BadgeVariant = keyof typeof component.badge.background.color.aubergine;
type BadgeSize = keyof typeof component.badge.gap;
type BadgeText = string;

export const badgeThemes: BadgeTheme[] = Object.keys(component.badge.background.color) as BadgeTheme[];
export const badgeVariants: BadgeVariant[] = Object.keys(component.badge.text.color.aubergine) as BadgeVariant[];
export const badgeSizes: BadgeSize[] = Object.keys(component.badge.gap) as BadgeSize[];
