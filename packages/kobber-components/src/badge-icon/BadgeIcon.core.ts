import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../base/utilities/replace";

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
type BadgeIconSize = keyof (typeof component)["badge-icon"]["gap"];

export const badgeIconThemes: BadgeIconTheme[] = Object.keys(component["badge-icon"].text.color) as BadgeIconTheme[];
export const badgeIconVariants: BadgeIconVariant[] = Object.keys(
  component["badge-icon"].text.color.aubergine,
) as BadgeIconVariant[];
export const badgeIconSizes: BadgeIconSize[] = Object.keys(component["badge-icon"].container.gap) as BadgeIconSize[];
