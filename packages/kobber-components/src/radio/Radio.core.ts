import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

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
  variant?: InputVariant;
  href?: string;
};

type InputComputedProps = {
  isLink?: boolean;
};

export type ControlProps = {
  checked?: boolean;
  variant: InputVariant;
};

export type GroupClassName = typeof radioGroupName;
export type InputLabelClassName = typeof radioInputLabelClassName;
export type InputControlClassName = typeof radioInputControlName;
export type InputControlPartNames = typeof radioInputControlPartName | typeof radioInputControlPartNameChecked;
export type InputClassNames = typeof radioInputName | typeof radioInputAsLinkClassName;
export type InputVariant = keyof (typeof radioTokens)["indicator"]["border"]["color"];

export const inputVariants = Object.keys(radioTokens.indicator.border.color) as InputVariant[];
