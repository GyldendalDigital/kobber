import { component, semantics } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const buttonName = "kobber-button";

export const buttonClassNames = ({
  color = "carmine",
  variant = "main",
  level = "primary",
  hasIcon = false,
  iconOnly = false,
  iconFirst = false,
  isLink = false,
  inlined = false,
}: ButtonProps & ButtonComputedProps): ButtonClassNames[] => {
  const conditionalClassNames: ButtonClassNames[] = [];

  if (hasIcon) {
    conditionalClassNames.push("icon");
    if (iconOnly) {
      conditionalClassNames.push("icon-only");
    } else if (iconFirst) {
      conditionalClassNames.push("icon-left");
    }
  }

  if (isLink) {
    conditionalClassNames.push("link");
  }

  if (inlined) {
    conditionalClassNames.push("inlined");
  }

  return [buttonName, color, replaceSpaceWithDash(variant), level, ...conditionalClassNames];
};

export const buttonClassNamesWithModule = (
  cssModule: Record<string, string>,
  props: ButtonProps & ButtonComputedProps,
) => buttonClassNames(props).map(x => cssModule[x]);

export type ButtonProps = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  level?: ButtonLevel;
  iconFirst?: boolean;
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  inlined?: boolean;
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
  | "icon"
  | "icon-only"
  | "icon-left"
  | "link"
  | "inlined";

export type ButtonColor = keyof typeof component.button.background.color;
export type ButtonVariant = keyof typeof component.button.background.color.neutral;
export type ButtonLevel = keyof typeof component.button.text.color.neutral.main;

export const buttonColors: ButtonColor[] = Object.keys(component.button.background.color) as ButtonColor[];
export const buttonVariants: ButtonVariant[] = Object.keys(
  component.button.background.color.neutral,
) as ButtonVariant[];
export const buttonLevels: ButtonLevel[] = Object.keys(component.button.text.color.neutral.main) as ButtonLevel[];

export type ButtonUiColor = keyof typeof semantics.color.ui;
export const isUiColor = (color: ButtonColor | undefined): color is ButtonUiColor =>
  !!color && color in semantics.color.ui;

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
