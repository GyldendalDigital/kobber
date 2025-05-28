import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../base/utilities/replace";

export const radioInputName = "kobber-radio-input";
export const radioInputControlName = "kobber-radio-input-control";
export const radioGroupName = "kobber-radio-group";

const radioInputAsLinkClassName = "kobber-radio-input--as-link";
export const radioInputControlPartName = "kobber-radio-input__control";
export const radioInputControlPartNameChecked = "kobber-radio-input__control--checked";
export const radioInputLabelClassName = "kobber-radio-input__label";
export const radioGroupHorizontalClassName = "kobber-radio-group--horizontal";

export const inputClassNames = ({
  variant = "success",
  isLink = false,
}: InputProps & InputComputedProps): InputClassNames[] => {
  const conditionalClassNames: InputClassNames[] = [];

  if (isLink) {
    conditionalClassNames.push(radioInputAsLinkClassName);
  }

  return [radioInputName, replaceSpaceWithDash(variant), ...conditionalClassNames];
};

export type GroupProps = {
  currentValue?: string;
  direction?: "vertical" | "horizontal";
  form?: string;
  label?: string;
  name?: string;
  required?: boolean;
  value?: string;
};

export type InputProps = {
  checked?: boolean;
  disabled?: boolean;
  variant?: InputVariant;
  href?: string;
};

export type InputComputedProps = {
  isLink?: boolean;
};

export const controlClassNames = ({ variant = "success" }: ControlProps): ControlClassNames[] => {
  return [radioInputControlName, replaceSpaceWithDash(variant)];
};

export type ControlProps = {
  checked?: boolean;
  variant?: InputVariant;
};

export type GroupClassNames = typeof radioGroupName | typeof radioGroupHorizontalClassName;

export type InputLabelClassNames = typeof radioInputLabelClassName;

export type InputControlClassNames = typeof radioInputControlName;

export type InputControlPartNames = typeof radioInputControlPartName | typeof radioInputControlPartNameChecked;

export type InputClassNames =
  | typeof radioInputName
  | ReplaceSpaceWithDash<InputVariant>
  | typeof radioInputAsLinkClassName;

export type ControlClassNames =
  | typeof radioInputControlName
  | ReplaceSpaceWithDash<InputVariant>
  | typeof radioInputAsLinkClassName;

export type InputVariant = keyof (typeof component.radiobutton)["radio-circle"]["border"]["color"];

export const inputVariants: InputVariant[] = Object.keys(
  component.radiobutton["radio-circle"].border.color,
) as InputVariant[];
