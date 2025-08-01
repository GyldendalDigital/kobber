import { ButtonType, ButtonColorTheme, ButtonColorVariant, ButtonColorLevel } from "../../button/Button.core";

export const isValidPropCombination = (
  buttonType: ButtonType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  colorTheme: ButtonColorTheme,
  colorVariant: ButtonColorVariant,
  colorLevel?: ButtonColorLevel,
) => {
  let textColor, backgroundColor, borderColor;

  if (colorLevel) {
    textColor =
      component[buttonType].text.color?.[colorTheme]?.[colorLevel!]?.[colorVariant] ??
      component[buttonType].text.color?.[colorTheme]?.[colorLevel!];
    backgroundColor = component[buttonType].background?.color?.[colorTheme]?.[colorLevel!]?.[colorVariant];
    borderColor = component[buttonType]?.border?.color?.[colorTheme]?.[colorLevel!]?.[colorVariant];
  } else {
    textColor = component[buttonType].text.color?.[colorTheme];
    backgroundColor = component[buttonType].background.color[colorTheme][colorVariant];
    borderColor = component[buttonType]?.border?.color?.[colorTheme][colorVariant];
  }

  if (
    typeof textColor === "string" ||
    typeof backgroundColor?.fallback === "string" ||
    typeof borderColor?.active === "string"
  ) {
    return true;
  }
  console.log("Invalid prop combination");
  return false;
};
