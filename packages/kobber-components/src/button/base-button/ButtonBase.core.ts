import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import { defaultButtonName } from "../default-button/Button.core";

type ButtonComputedProps = {
  hasIcon?: boolean;
  iconOnly?: boolean;
  isLink?: boolean;
};

export type BaseButtonProps = {
  iconFirst?: boolean;
  fullWidth?: boolean;
  usedInOtherInteractive?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export const buttonClassNames = ({
  hasIcon = false,
  iconOnly = false,
  iconFirst = false,
  fullWidth = false,
  usedInOtherInteractive = false,
  isLink = false,
}: BaseButtonProps & ButtonComputedProps): ButtonClassNames[] => {
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

  return [defaultButtonName, ...conditionalClassNames];
};

export type ButtonClassNames =
  | "kobber-button-base"
  | "kobber-button"
  | "kobber-button-ui"
  | "kobber-button-theme"
  | "kobber-button--icon"
  | "kobber-button--icon-only"
  | "kobber-button--icon-left"
  | "kobber-button--full-width"
  | "kobber-button--used-in-other-interactive"
  | "kobber-button--link"
  | "kobber-button--inlined";

export const getIconColor = (
  colorTheme: keyof (typeof universal)["text-label"]["text"]["color"],
  colorVariant: keyof (typeof universal)["text-label"]["text"]["color"]["brand"],
) => {
  return universal["text-label"].text.color[colorTheme]?.[invertColorVariant(colorVariant)];
};
