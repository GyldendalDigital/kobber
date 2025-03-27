import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const checkBoxName = "kobber-checkbox";
export const checkBoxInputClassName = "native-input";
export const checkBoxLabelClassName = "kobber-checkbox__label";
export const checkBoxControlClassName = "kobber-checkbox__control";

export const checkboxClassNames = ({ variant = "success" }: CheckboxProps): CheckboxClassNames[] => {
  const conditionalClassNames: CheckboxClassNames[] = [];

  return [checkBoxName, replaceSpaceWithDash(variant), ...conditionalClassNames];
};

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  variant?: CheckboxVariant;
};

export type CheckboxInputClassNames = typeof checkBoxInputClassName;
export type CheckboxLabelClassNames = typeof checkBoxLabelClassName;
export type CheckboxControlClassNames = typeof checkBoxControlClassName;

export type CheckboxClassNames = typeof checkBoxName | ReplaceSpaceWithDash<CheckboxVariant>;

export type CheckboxVariant = keyof typeof component.checkbox.checkbox.border.color;

export const checkboxVariants: CheckboxVariant[] = Object.keys(
  component.checkbox.checkbox.border.color,
) as CheckboxVariant[];
