import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const radioInputName = "kobber-radio-input";
export const radioInputControlName = "kobber-radio-input-control";
export const radioGroupName = "kobber-radio-group";

const radioInputAsLinkClassName = "input--as-link";
export const radioInputControlPartName = "control";
export const radioInputControlPartNameChecked = "control--checked";
export const radioInputLabelClassName = "label";

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

export type GroupClassNames = typeof radioGroupName;

export type InputLabelClassNames = typeof radioInputLabelClassName;

export type InputControlClassNames = typeof radioInputControlName;

export type InputControlPartNames = typeof radioInputControlPartName | typeof radioInputControlPartNameChecked;

export type InputClassNames = typeof radioInputName | typeof radioInputAsLinkClassName;

export type InputVariant = keyof (typeof component._radiobutton)["indicator"]["border"]["color"];

export const inputVariants: InputVariant[] = Object.keys(
  component._radiobutton.indicator.border.color,
) as InputVariant[];
