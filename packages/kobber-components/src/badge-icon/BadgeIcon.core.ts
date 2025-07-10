import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const badgeIconName = "kobber-badge-icon";
export const badgeIconIconName = "icon";

export type BadgeIconProps = {
  variant?: BadgeIconVariant;
  theme?: BadgeIconTheme;
  size?: BadgeIconSize;
};

export type BadgeIconClassName = typeof badgeIconName;
export type BadgeIconIconClassName = typeof badgeIconIconName;

export type BadgeIconTheme = keyof (typeof component)["badge-icon"]["text"]["color"];
export type BadgeIconVariant = keyof (typeof component)["badge-icon"]["text"]["color"][BadgeIconTheme];
export type BadgeIconSize = keyof (typeof component)["badge-icon"]["gap"];

export const badgeIconThemes: BadgeIconTheme[] = Object.keys(component["badge-icon"].text.color) as BadgeIconTheme[];
export const badgeIconVariants: BadgeIconVariant[] = Object.keys(
  component["badge-icon"].text.color.aubergine,
) as BadgeIconVariant[];
export const badgeIconSizes: BadgeIconSize[] = Object.keys(component["badge-icon"].gap) as BadgeIconSize[];
