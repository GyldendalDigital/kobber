import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { objectKeys } from "../base/utilities/objectKeys";
import { concat2, concat3 } from "../base/utilities/join";

export const buttonName = "kobber-button";

export const buttonClassNames = ({
  variant = "brand-primary-main",
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

  return [buttonName, variant, ...conditionalClassNames];
};

export type ButtonProps = {
  iconFirst?: boolean;
  fullWidth?: boolean;
  usedInOtherInteractive?: boolean;
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
} & { variant?: ButtonDefaultProps | ButtonThemeProps | ButtonUiProps };

export type ButtonComputedProps = {
  hasIcon?: boolean;
  iconOnly?: boolean;
  isLink?: boolean;
};

export type ButtonClassNames =
  | typeof buttonName
  | ButtonProps["variant"]
  | "kobber-button--icon"
  | "kobber-button--icon-only"
  | "kobber-button--icon-left"
  | "kobber-button--full-width"
  | "kobber-button--used-in-other-interactive"
  | "kobber-button--link"
  | "kobber-button--inlined";

type ButtonDefaultProps = (typeof buttonDefaultProps)[number];
export const buttonDefaultColors = objectKeys(component.button.background.color);
export const buttonDefaultLevels = [
  ...objectKeys(component.button.background.color.brand),
  ...objectKeys(component.button.border.color.brand),
];
export const buttonDefaultVariants = objectKeys(component.button.background.color.brand.secondary);
export const buttonDefaultProps = buttonDefaultColors.flatMap(color =>
  buttonDefaultLevels.flatMap(level => {
    if (level === "primary" || color === "neutral") {
      return `${color}-${level}-main` as const;
    }

    return buttonDefaultVariants.map(variant => `${color}-${level}-${variant}` as const);
  }),
);

type ButtonUiProps = (typeof buttonUiProps)[number];
export const buttonUiColors = objectKeys(component["ui-button"]["background"]["color"]);
export const buttonUiVariants = objectKeys(component["ui-button"]["background"]["color"].informative);
export const buttonUiProps = concat2(buttonUiColors, buttonUiVariants);

type ButtonThemeProps = (typeof buttonThemeProps)[number];
export const buttonThemeColors = objectKeys(component["theme-button"]["background"]["color"]);
export const buttonThemeLevels = [
  ...objectKeys(component["theme-button"].background.color.carmine),
  ...objectKeys(component["theme-button"].border.color.carmine),
];
export const buttonThemeVariants = objectKeys(component["theme-button"]["background"]["color"].carmine.primary);
export const buttonThemeProps = concat3(buttonThemeColors, buttonThemeLevels, buttonThemeVariants);
