import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

type ButtonComputedProps = {
  hasIcon?: boolean;
  iconOnly?: boolean;
  isLink?: boolean;
};

const buttonDefaultColorThemes = objectKeys(component.button.background.color);
const buttonDefaultColorLevels = [
  ...objectKeys(component.button.background.color.brand),
  ...objectKeys(component.button.border.color.brand),
];
const buttonDefaultColorVariants = objectKeys(component.button.background.color.brand.secondary);

const buttonUiColorThemes = objectKeys(component["ui-button"].background.color);
const buttonUiColorVariants = objectKeys(component["ui-button"].background.color.informative);

const buttonThemeColorThemes = objectKeys(component["theme-button"].background.color);
const buttonThemeColorLevels = [
  ...objectKeys(component["theme-button"].background.color.nostalgia),
  ...objectKeys(component["theme-button"].border.color.nostalgia),
];
const buttonThemeColorVariants = objectKeys(
  component["theme-button"].background.color.nostalgia.primary,
);

export const labelColorThemes = objectKeys(universal["text-label"].text.color);
export const labelColorVariants = objectKeys(!labelColorThemes[0]);

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
  type?: ButtonType;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export const buttonTypes: ButtonType[] = ["button", "ui-button", "theme-button"];
export type ButtonType = "button" | "ui-button" | "theme-button";

export type ButtonColorLevel =
  | (typeof buttonDefaultColorLevels)[number]
  | (typeof buttonThemeColorLevels)[number];

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

export type ButtonColorProperties = {
  [key in ButtonType]: string[];
};

export const buttonColorLevels: ButtonColorProperties = {
  button: buttonDefaultColorLevels,
  "ui-button": [],
  "theme-button": buttonThemeColorLevels,
};

export const buttonColorThemes: ButtonColorProperties = {
  button: buttonDefaultColorThemes,
  "ui-button": buttonUiColorThemes,
  "theme-button": buttonThemeColorThemes,
};

export const buttonColorVariants: ButtonColorProperties = {
  button: buttonDefaultColorVariants,
  "ui-button": buttonUiColorVariants,
  "theme-button": buttonThemeColorVariants,
};
