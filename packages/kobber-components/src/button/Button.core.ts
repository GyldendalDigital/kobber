import { component, global } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const buttonName = "kobber-button";

export const buttonClassNames = ({
  color = "carmine",
  variant = "main",
  level = "primary",
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

  return [buttonName, color, replaceSpaceWithDash(variant), level, ...conditionalClassNames];
};

export type ButtonProps = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  level?: ButtonLevel;
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

export type ButtonClassNames =
  | typeof buttonName
  | ButtonColor
  | ReplaceSpaceWithDash<ButtonVariant>
  | ButtonLevel
  | "kobber-button--icon"
  | "kobber-button--icon-only"
  | "kobber-button--icon-left"
  | "kobber-button--full-width"
  | "kobber-button--used-in-other-interactive"
  | "kobber-button--link"
  | "kobber-button--inlined";

export type ButtonColor = keyof typeof component.button.background.color;
export type ButtonVariant = keyof typeof component.button.background.color.neutral;
export type ButtonLevel = keyof typeof component.button.text.color.neutral.main;

export const buttonColors: ButtonColor[] = Object.keys(component.button.background.color) as ButtonColor[];
export const buttonVariants: ButtonVariant[] = Object.keys(
  component.button.background.color.neutral,
) as ButtonVariant[];
export const buttonLevels: ButtonLevel[] = Object.keys(component.button.text.color.neutral.main) as ButtonLevel[];

export type ButtonUiColor = keyof typeof global.color.ui;
export const isUiColor = (color: ButtonColor | undefined): color is ButtonUiColor =>
  !!color && color in global.color.ui;

export const hasSupplementalAlt = (color: ButtonColor | undefined) =>
  color === "aubergine" || color === "rettsdata" || color === "neutral";

export const isValidPropCombination = (props: ButtonProps) => {
  const { color, variant, level } = props;

  // ui colors only have primary level
  if (isUiColor(color) && level !== "primary") {
    return false;
  }

  // supplemental alt variant only available for aubergine, rettsdata, and neutral colors
  if (variant === "supplemental alt" && !hasSupplementalAlt(props.color)) {
    return false;
  }

  return true;
};
