import { ButtonProps } from "./Button.react";

export const customElementName = "kobber-button";

const classNames = ({
  variant = "main",
  backgroundColor,
  borderColor,
  children,
  className,
  iconSettings,
  level,
}: ButtonProps) => {
  return [customElementName, variant === "main" ? "main" : "supplemental"];
};

const classNamesFromCssModule = (cssModule: Record<string, string>, { variant }: ButtonProps) =>
  classNames({ variant }).map(x => cssModule[x]);

export const buttonFunctions = {
  classNames,
  classNamesFromCssModule,
};
