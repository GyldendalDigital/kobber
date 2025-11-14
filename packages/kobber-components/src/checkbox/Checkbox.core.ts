import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { objectKeys } from "../base/utilities/objectKeys";

export const checkboxGroupName = "kobber-checkbox-group";
export const checkboxWrapperClassName = "wrapper";
export const checkboxInputName = "kobber-checkbox-input";
export const nativeCheckboxInputClassName = "native-input";
export const inputLabelClassName = "label";
export const inputControlClassName = "control";
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
  color?: CheckboxColor;
};

export type GroupClassNames = typeof checkboxGroupName;
export type WrapperClassNames = typeof checkboxWrapperClassName;
export type CheckboxClassNames = typeof checkboxInputName;
export type NativeInputClassNames = typeof nativeCheckboxInputClassName;
export type InputLabelClassNames = typeof inputLabelClassName;
export type InputControlClassNames = typeof inputControlClassName;
export type IconClassNames = typeof checkboxIconClassName;

export type CheckboxState = keyof typeof checkboxTokens.border.color.success | "disabled";
export type CheckboxColor = (typeof checkboxColors)[number];

export const checkboxColors = objectKeys(component._checkbox.indicator.border.color);
