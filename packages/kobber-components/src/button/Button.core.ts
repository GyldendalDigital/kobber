import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";

export const buttonName = "kobber-button";

export const buttonClassNames = ({
  color = "carmine",
  variant = "main",
  level = "primary",
  hasIcon = false,
  iconOnly = false,
  iconFirst = false,
}: ButtonProps & ButtonComputedProps): ButtonClassNames[] => {
  const iconClassNames: ButtonClassNames[] = [];
  if (hasIcon) {
    iconClassNames.push("icon");
    if (iconOnly) {
      iconClassNames.push("icon-only");
    } else if (iconFirst) {
      iconClassNames.push("icon-left");
    }
  }

  return [buttonName, color, variant, level, ...iconClassNames];
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
};

export type ButtonComputedProps = {
  hasIcon?: boolean;
  iconOnly?: boolean;
};

export type ButtonClassNames =
  | typeof buttonName
  | ButtonColor
  | ButtonVariant
  | ButtonLevel
  | "icon"
  | "icon-only"
  | "icon-left";

export type ButtonColor = keyof typeof component.button.background.color;
export type ButtonVariant = keyof Omit<typeof component.button.background.color.neutral, "supplemental alt">;
export type ButtonLevel = keyof typeof component.button.text.color.carmine.main;

export const buttonColors: ButtonColor[] = Object.keys(component.button.background.color) as ButtonColor[];
export const buttonVariants: ButtonVariant[] = Object.keys(
  component.button.background.color.carmine,
) as ButtonVariant[];
export const buttonLevels: ButtonLevel[] = Object.keys(component.button.text.color.carmine.main) as ButtonLevel[];
