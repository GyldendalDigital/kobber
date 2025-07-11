import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";

export const checkboxGroupName = "kobber-checkbox-group";
export const checkboxWrapperClassName = "wrapper";
export const checkboxInputName = "kobber-checkbox-input";
export const nativeCheckboxInputClassName = "native-input";
export const checkboxLabelClassName = "label";
export const checkboxControlClassName = "control";
export const checkboxIconClassName = "control--shape";

export type CheckboxIconClassNames = typeof checkboxIconClassName;

const checkbox = component._checkbox.indicator;

export const checkboxInputClassNames = ({ state = "idle" }: InputProps): CheckboxClassNames[] => {
  const conditionalClassNames: CheckboxClassNames[] = [];

  return [checkboxInputName, state, ...conditionalClassNames];
};

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
export type CheckboxClassNames = typeof checkboxInputName | CheckboxState;
export type NativeInputClassName = typeof nativeCheckboxInputClassName;
export type InputLabelClassName = typeof checkboxLabelClassName;
export type InputControlClassName = typeof checkboxControlClassName;

export type CheckboxState = keyof typeof checkbox.border.color.success | "disabled";
export type CheckboxVariant = keyof typeof checkbox.border.color;

export const checkboxVariants: CheckboxVariant[] = Object.keys(
  component._checkbox.indicator.border.color,
) as CheckboxVariant[];
