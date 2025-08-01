import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

export const radioInputName = "kobber-radio-input";
export const radioInputControlName = "kobber-radio-input-control";
export const radioGroupName = "kobber-radio-group";

const radioInputAsLinkClassName = "input--as-link";
export const radioInputControlPartName = "control";
export const radioInputControlPartNameChecked = "control--checked";
export const radioInputLabelClassName = "label";

const radioTokens = component._radiobutton;

export const inputClassNames = ({ isLink = false }: InputProps & InputComputedProps): InputClassNames[] => {
  const conditionalClassNames: InputClassNames[] = [];

  if (isLink) {
    conditionalClassNames.push(radioInputAsLinkClassName);
  }

  return [radioInputName, ...conditionalClassNames];
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
  colorTheme?: InputColorTheme;
  href?: string;
};

type InputComputedProps = {
  isLink?: boolean;
};

export type ControlProps = {
  checked?: boolean;
  colorTheme: InputColorTheme;
};

export type GroupClassNames = typeof radioGroupName;
export type InputLabelClassNames = typeof radioInputLabelClassName;
export type InputControlClassNames = typeof radioInputControlName;
export type InputControlPartNames = typeof radioInputControlPartName | typeof radioInputControlPartNameChecked;
export type InputClassNames = typeof radioInputName | typeof radioInputAsLinkClassName;

export type InputColorTheme = (typeof inputColorThemes)[number];

export const inputColorThemes = objectKeys(radioTokens.indicator.border.color);
