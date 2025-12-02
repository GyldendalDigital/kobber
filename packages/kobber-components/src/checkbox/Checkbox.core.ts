import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

import { objectKeys } from "../base/utilities/objectKeys";

export const checkboxGroupName = "kobber-checkbox-group";
export const checkboxWrapperClassName = "wrapper";
export const checkboxInputName = "kobber-checkbox-input";
export const nativeCheckboxInputClassName = "native-input";
export const inputLabelClassName = "label";
export const inputControlClassName = "control";
export const checkboxIconClassName = "control--shape";

export const checkboxTokens = component._checkbox;
export const indicatorTokens = component._checkbox.indicator;
export const checkboxInnerTokens = component.checkbox;

export type GroupProps = {
  form?: string;
  hierarchicalCheckboxLabel?: string;
  inputsCommonName: string;
  label?: string;
  orientation?: Orientation;
  required?: boolean;
  type?: Type;
};

export type InputProps = {
  checked?: Checked;
  color?: CheckboxColor;
  defaultChecked?: boolean;
  disabled?: boolean;
  form?: string;
  indeterminate?: boolean;
  helpText?: string;
  singleInputName?: string;
  required?: boolean;
  singleInputValue: string;
};

export type GroupClassNames = typeof checkboxGroupName;
export type WrapperClassNames = typeof checkboxWrapperClassName;
export type CheckboxClassNames = typeof checkboxInputName;
export type NativeInputClassNames = typeof nativeCheckboxInputClassName;
export type InputLabelClassNames = typeof inputLabelClassName;
export type InputControlClassNames = typeof inputControlClassName;
export type IconClassNames = typeof checkboxIconClassName;

export type CheckboxColor = (typeof checkboxColors)[number];
export type Orientation = (typeof orientations)[number];
export type Type = (typeof types)[number];
export type Checked = (typeof checkedStates)[number];

export const checkboxColors = objectKeys(component._checkbox.indicator.border.color);
export const orientations = ["vertical", "horizontal"] as const;
export const types = ["equal", "hierarchical"] as const;
export const checkedStates = ["unchecked", "checked", "indeterminate"] as const;
