import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const badgeIconName = "kobber-badge-icon";

export const badgeIconClassNames = ({
  theme = "nature",
  variant = "main",
  size = "medium",
}: BadgeIconProps): BadgeIconClassNames[] => {
  const conditionalClassNames: BadgeIconClassNames[] = [];

  return [badgeIconName, theme, replaceSpaceWithDash(variant), size, ...conditionalClassNames];
};

export type BadgeIconProps = {
  disabled?: boolean;
  variant?: BadgeIconVariant;
  theme?: BadgeIconTheme;
  size?: BadgeIconSize;
};

export type BadgeIconClassNames =
  | typeof badgeIconName
  | BadgeIconTheme
  | ReplaceSpaceWithDash<BadgeIconVariant>
  | BadgeIconSize
  | "kobber-badge-icon--icon";

type BadgeIconTheme = keyof (typeof component)["badge-icon"]["text"]["color"];
type BadgeIconVariant = keyof (typeof component)["badge-icon"]["text"]["color"][BadgeIconTheme];
type BadgeIconSize = keyof (typeof component)["badge-icon"]["container"]["gap"];

export const badgeIconThemes: BadgeIconTheme[] = [
  "nature",
  "fantasy",
  "thriller",
  "vacation",
  "nostalgia",
  "aubergine",
  "rettsdata",
  "carmine",
];
export const badgeIconVariants: BadgeIconVariant[] = ["main", "supplemental"];
export const badgeIconSizes: BadgeIconSize[] = ["medium", "small"];
