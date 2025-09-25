import type {
  ButtonType,
  ButtonColorTheme,
  ButtonColorVariant,
  ButtonColorLevel,
} from "../../button/Button.core";

export const isValidPropCombination = (
  buttonType: ButtonType,
  // biome-ignore lint: tokens can really be of any type.
  component: any,
  // biome-ignore lint: tokens can really be of any type.
  universal: any,
  colorTheme: ButtonColorTheme,
  colorVariant: ButtonColorVariant,
  colorLevel?: ButtonColorLevel,
) => {
  let backgroundColor: { hover: string; fallback: string },
    borderColor: { hover: string; active: string };

  const textColor = universal["text-label"]?.text.color[colorTheme]?.[colorVariant];

  if (colorLevel) {
    backgroundColor =
      component[buttonType].background?.color?.[colorTheme]?.[colorLevel]?.[colorVariant];
    borderColor = component[buttonType]?.border?.color?.[colorTheme]?.[colorLevel]?.[colorVariant];
  } else {
    backgroundColor = component[buttonType].background?.color?.[colorTheme]?.[colorVariant];
    borderColor = component[buttonType]?.border?.color?.[colorTheme]?.[colorVariant];
  }

  if (
    typeof textColor === "string" ||
    typeof backgroundColor?.fallback === "string" ||
    typeof borderColor?.active === "string"
  ) {
    return true;
  }
  return false;
};
