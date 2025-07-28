import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

const badgeTokens = component.badge;

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

export type BadgeClassNames = typeof badgeName | "status-circle";
export type BadgeTheme = keyof typeof badgeTokens.background.color;
export type BadgeVariant = keyof typeof badgeTokens.background.color.aubergine;
export type BadgeSize = keyof typeof badgeTokens.gap;

export const badgeThemes = Object.keys(badgeTokens.background.color) as BadgeTheme[];
export const badgeVariants = Object.keys(badgeTokens.text.color.aubergine) as BadgeVariant[];
export const badgeSizes = Object.keys(badgeTokens.gap) as BadgeSize[];
