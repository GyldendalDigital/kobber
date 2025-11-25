import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

export const radioInputName = "kobber-radio-input";
export const radioInputControlName = "kobber-radio-input-control";
export const radioGroupName = "kobber-radio-group";

export const radioInputControlPartName = "control";
export const radioInputControlPartNameChecked = "control--checked";
export const radioInputLabelClassName = "label";

const radioTokens = component._radiobutton;

export const inputClassNames = () => {
  return [radioInputName];
};

export type GroupProps = {
  currentValue?: string;
  orientation?: Orientation;
  form?: string;
  label?: string;
  name: string;
  required?: boolean;
  value?: string;
};

export type InputProps = {
  checked?: boolean;
  disabled?: boolean;
  color?: InputColor;
};

export type ControlProps = {
  checked?: boolean;
  color: InputColor;
};

export type GroupClassNames = typeof radioGroupName;
export type InputLabelClassNames = typeof radioInputLabelClassName;
export type InputControlClassNames = typeof radioInputControlName;
export type InputControlPartNames =
  | typeof radioInputControlPartName
  | typeof radioInputControlPartNameChecked;
export type InputClassNames = typeof radioInputName;

export type InputColor = (typeof inputColors)[number];
export type Orientation = (typeof orientations)[number];

export const inputColors = objectKeys(radioTokens.indicator.border.color);
export const orientations = ["vertical", "horizontal"] as const;
