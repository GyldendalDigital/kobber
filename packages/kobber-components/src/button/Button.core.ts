import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";
import { concat2, concat3 } from "../base/utilities/join";

export const buttonName = "kobber-button";

export const buttonClassNames = ({
  hasIcon = false,
  iconOnly = false,
  iconFirst = false,
  fullWidth = false,
  usedInOtherInteractive = false,
  isLink = false,
}: ButtonProps & ButtonComputedProps): ButtonClassNames[] => {
  const conditionalClassNames: ButtonClassNames[] = [];

  if (hasIcon) {
    conditionalClassNames.push("kobber-button--icon");
    if (iconOnly) {
      conditionalClassNames.push("kobber-button--icon-only");
    } else if (iconFirst) {
      conditionalClassNames.push("kobber-button--icon-left");
    }
  }

  if (isLink) {
    conditionalClassNames.push("kobber-button--link");
  }

  if (fullWidth) {
    conditionalClassNames.push("kobber-button--full-width");
  }

  if (usedInOtherInteractive) {
    conditionalClassNames.push("kobber-button--used-in-other-interactive");
  }

  return [buttonName, ...conditionalClassNames];
};

export type ButtonProps = {
  colorTheme?: ButtonColorTheme;
  colorLevel?: ButtonColorLevel;
  colorVariant?: ButtonColorVariant;
  iconFirst?: boolean;
  fullWidth?: boolean;
  usedInOtherInteractive?: boolean;
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export type ButtonComputedProps = {
  hasIcon?: boolean;
  iconOnly?: boolean;
  isLink?: boolean;
};

export type ButtonType = "button" | "ui-button" | "theme-button";

export type ButtonColorLevel = (typeof buttonDefaultColorLevels)[number] | (typeof buttonThemeColorLevels)[number];

export type ButtonColorTheme =
  | (typeof buttonDefaultColorThemes)[number]
  | (typeof buttonUiColorThemes)[number]
  | (typeof buttonThemeColorThemes)[number];

export type ButtonColorVariant =
  | (typeof buttonDefaultColorVariants)[number]
  | (typeof buttonUiColorVariants)[number]
  | (typeof buttonThemeColorVariants)[number];

export type ButtonClassNames =
  | typeof buttonName
  | "kobber-button--icon"
  | "kobber-button--icon-only"
  | "kobber-button--icon-left"
  | "kobber-button--full-width"
  | "kobber-button--used-in-other-interactive"
  | "kobber-button--link"
  | "kobber-button--inlined";

export const buttonDefaultColorThemes = objectKeys(component.button.background.color);
export const buttonDefaultColorLevels = [
  ...objectKeys(component.button.background.color.brand),
  ...objectKeys(component.button.border.color.brand),
];
export const buttonDefaultColorVariants = objectKeys(component.button.background.color.brand.secondary);
export const buttonDefaultProps = buttonDefaultColorThemes.flatMap(color =>
  buttonDefaultColorLevels.flatMap(level => {
    if (level === "primary" || color === "neutral") {
      return `${color}-${level}-main` as const;
    }

    return buttonDefaultColorVariants.map(variant => `${color}-${level}-${variant}` as const);
  }),
);

export const buttonUiColorThemes = objectKeys(component["ui-button"]["background"]["color"]);
export const buttonUiColorVariants = objectKeys(component["ui-button"]["background"]["color"].informative);
export const buttonUiProps = concat2(buttonUiColorThemes, buttonUiColorVariants);

export const buttonThemeColorThemes = objectKeys(component["theme-button"]["background"]["color"]);
export const buttonThemeColorLevels = [
  ...objectKeys(component["theme-button"].background.color.carmine),
  ...objectKeys(component["theme-button"].border.color.carmine),
];
export const buttonThemeColorVariants = objectKeys(component["theme-button"]["background"]["color"].carmine.primary);
export const buttonThemeProps = concat3(buttonThemeColorThemes, buttonThemeColorLevels, buttonThemeColorVariants);

export const buttonColorLevels: ButtonColorLevel[] = [...buttonDefaultColorLevels, ...buttonThemeColorLevels];

export const buttonColorThemes: ButtonColorTheme[] = [
  ...buttonDefaultColorThemes,
  ...buttonUiColorThemes,
  ...buttonThemeColorThemes,
];

export const buttonColorVariants: ButtonColorVariant[] = [
  ...buttonDefaultColorVariants,
  ...buttonUiColorVariants,
  ...buttonThemeColorVariants,
];
