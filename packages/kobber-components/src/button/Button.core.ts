import { component } from "@gyldendal/kobber-base/themes/default/tokens";

export const buttonName = "kobber-button";

export const buttonClassNames = ({
  color = "carmine",
  variant = "main",
  level = "primary",
  hasIcon = false,
  isIconOnly = false,
  iconPosition = "right",
}: ButtonProps & ButtonIconProps) => {
  return [
    buttonName,
    color,
    variant?.replace(" ", "-"),
    level,
    hasIcon ? "icon" : "",
    hasIcon && isIconOnly ? "icon-only" : "",
    hasIcon && !isIconOnly && iconPosition === "left" ? "icon-left" : "",
  ].filter(Boolean);
};

export const buttonClassNamesWithModule = (cssModule: Record<string, string>, props: ButtonProps & ButtonIconProps) =>
  buttonClassNames(props).map(x => cssModule[x]);

export type ButtonProps = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  level?: ButtonLevel;
  iconPosition?: ButtonIconPosition;
};

export type ButtonIconProps = {
  hasIcon?: boolean;
  isIconOnly?: boolean;
  iconPosition?: ButtonIconPosition;
};

export type ButtonColor = keyof typeof component.button.background.color;
export type ButtonVariant = keyof typeof component.button.background.color.neutral;
export type ButtonLevel = keyof typeof component.button.text.color.carmine.main;
export type ButtonIconPosition = "left" | "right";

export const buttonColors: ButtonColor[] = Object.keys(component.button.background.color) as ButtonColor[];
export const buttonVariants: ButtonVariant[] = Object.keys(
  component.button.background.color.neutral,
) as ButtonVariant[];
export const buttonLevels: ButtonLevel[] = Object.keys(component.button.text.color.carmine.main) as ButtonLevel[];

export const includesLevel = (value: ButtonLevel, buttonLevels: string[]): value is ButtonLevel =>
  buttonLevels.includes(value);
