import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

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
type BadgeVariant = "main" | "supplemental";
type BadgeSize = keyof (typeof component)["badge"]["container"]["gap"];
type BadgeText = string;

export const badgeThemes: BadgeTheme[] = Object.keys(component.badge.background.color) as BadgeTheme[];
export const badgeVariants: BadgeVariant[] = ["main", "supplemental"];
export const badgeSizes: BadgeSize[] = ["medium", "small"];
