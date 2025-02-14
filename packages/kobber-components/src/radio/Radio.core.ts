import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const inputName = "kobber-radio-input";
export const controlName = "kobber-radio-input-control";
export const buttonGroupName = "kobber-radio-group";
export const controlClassName = "radio__control";
export const controlCheckedClassName = "radio__control--checked";
export const checkedPartName = "control--checked";
export const labelClassName = "radio__label";
export const horizontalClassName = "form-control-input--horizontal";

export const inputClassNames = ({
  variant = "success",
  isLink = false,
}: ButtonProps & ButtonComputedProps): ButtonClassNames[] => {
  const conditionalClassNames: ButtonClassNames[] = [];

  if (isLink) {
    conditionalClassNames.push("link");
  }

  return [inputName, replaceSpaceWithDash(variant), ...conditionalClassNames];
};

export const controlClassNames = ({
  variant = "success",
  isLink = false,
}: ButtonProps & ButtonComputedProps): ControlClassNames[] => {
  const conditionalClassNames: ControlClassNames[] = [];

  if (isLink) {
    conditionalClassNames.push("link");
  }

  return [controlName, replaceSpaceWithDash(variant), ...conditionalClassNames];
};

export const buttonClassNamesWithModule = (
  cssModule: Record<string, string>,
  props: ButtonProps & ButtonComputedProps,
) => inputClassNames(props).map(x => cssModule[x]);

export type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
};

export type ButtonComputedProps = {
  isLink?: boolean;
};

export type ButtonClassNames = typeof inputName | ReplaceSpaceWithDash<ButtonVariant> | "link";

export type ControlClassNames = typeof controlName | ReplaceSpaceWithDash<ButtonVariant> | "link";

export type ButtonVariant = keyof (typeof component.input.selection)["radio-indicator"]["indicator"]["color"];

export const buttonVariants: ButtonVariant[] = Object.keys(
  component.input.selection["radio-indicator"]["indicator"]["color"],
) as ButtonVariant[];
