import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";

export const textHighlightName = "kobber-text-highlight";

export const textHighlightClassNames = ({ color = "carmine" }: TextHighlightProps) => {
  return [textHighlightName, color];
};

export type TextHighlightClassNames = typeof textHighlightName | TextHighlightColor;

export type TextHighlightProps = {
  color?: TextHighlightColor;
};

export type TextHighlightColor = keyof typeof component.button.background.color;

export const textHighlightColors: TextHighlightColor[] = Object.keys(
  component.button.background.color,
) as TextHighlightColor[];
