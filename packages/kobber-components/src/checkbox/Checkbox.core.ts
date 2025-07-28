import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";

export const checkboxGroupName = "kobber-checkbox-group";
export const checkboxWrapperClassName = "wrapper";
export const checkboxInputName = "kobber-checkbox-input";
export const nativeCheckboxInputClassName = "native-input";
export const checkboxLabelClassName = "label";
export const checkboxControlClassName = "control";
export const checkboxIconClassName = "control--shape";

const checkboxTokens = component._checkbox.indicator;

export type GroupProps = {
  direction?: "vertical" | "horizontal";
  form?: string;
  label?: string;
  name?: string;
  required?: boolean;
  value?: string;
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

export type GroupClassNames = typeof checkboxGroupName;
export type WrapperClassName = typeof checkboxWrapperClassName;
export type CheckboxClassName = typeof checkboxInputName;
export type NativeInputClassName = typeof nativeCheckboxInputClassName;
export type InputLabelClassName = typeof checkboxLabelClassName;
export type InputControlClassName = typeof checkboxControlClassName;
export type IconClassName = typeof checkboxIconClassName;

export type CheckboxState = keyof typeof checkboxTokens.border.color.success | "disabled";
export type CheckboxVariant = keyof typeof checkboxTokens.border.color;

export const checkboxVariants = Object.keys(component._checkbox.indicator.border.color) as CheckboxVariant[];
