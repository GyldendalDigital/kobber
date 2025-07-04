import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

export const badgeName = "kobber-badge";

export const badgeClassNames = ({ showStatusCircle = false }: BadgeProps): BadgeClassNames[] => {
  const conditionalClassNames: BadgeClassNames[] = [];

  if (showStatusCircle) {
    conditionalClassNames.push("status-circle");
  }

  return [badgeName, ...conditionalClassNames];
};

export type BadgeProps = {
  theme?: BadgeTheme;
  variant?: BadgeVariant;
  size?: BadgeSize;
  showStatusCircle?: boolean;
};

export type BadgeClassNames = typeof badgeName | BadgeTheme | BadgeSize | "status-circle";

export type BadgeTheme = keyof typeof component.badge.background.color;
export type BadgeVariant = keyof typeof component.badge.background.color.aubergine;
export type BadgeSize = keyof typeof component.badge.gap;

export const badgeThemes: BadgeTheme[] = Object.keys(component.badge.background.color) as BadgeTheme[];
export const badgeVariants: BadgeVariant[] = Object.keys(component.badge.text.color.aubergine) as BadgeVariant[];
export const badgeSizes: BadgeSize[] = Object.keys(component.badge.gap) as BadgeSize[];
