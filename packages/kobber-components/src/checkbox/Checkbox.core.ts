import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";

export const checkboxWrapperClassName = "kobber-checkbox-wrapper";
export const checkboxInputName = "kobber-checkbox-input";
export const nativeCheckboxInputClassName = "native-input";
export const checkboxLabelClassName = "kobber-checkbox__label";
export const checkboxControlClassName = "kobber-checkbox__control";

export const checkboxInputClassNames = ({ state = "idle" }: InputProps): CheckboxClassNames[] => {
  const conditionalClassNames: CheckboxClassNames[] = [];

  return [checkboxInputName, state, ...conditionalClassNames];
};

export type InputProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  form?: string;
  indeterminate?: boolean;
  helpText?: string;
  name?: string;
  required?: boolean;
  state?: CheckboxState;
  title?: string;
  value?: string;
  variant?: CheckboxVariant;
};

export type WrapperClassName = typeof checkboxWrapperClassName;
export type CheckboxClassNames = typeof checkboxInputName | CheckboxState;
export type NativeInputClassName = typeof nativeCheckboxInputClassName;
export type InputLabelClassName = typeof checkboxLabelClassName;
export type InputControlClassName = typeof checkboxControlClassName;

export type CheckboxState = keyof typeof component.checkbox.checkbox.border.color.success | "disabled";
export type CheckboxVariant = keyof typeof component.checkbox.checkbox.border.color;

export const checkboxVariants: CheckboxVariant[] = Object.keys(
  component.checkbox.checkbox.border.color,
) as CheckboxVariant[];
