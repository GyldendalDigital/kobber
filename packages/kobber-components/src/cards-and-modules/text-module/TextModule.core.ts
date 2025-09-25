//import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
//export const textModuleTokens = component["text-block"];

import { objectKeys } from "../../base/utilities/objectKeys";

export const textModuleTokens = {
  padding: {
    inline: 32,
    top: 40,
    bottom: 48,
  },
  gap: 8,
  "inner-text-container": {
    gap: 24,
  },
  background: {
    color: {
      brand: {
        "tone-a": "#fdf9f9",
        "tone-b": "#481125",
      },
      neutral: {
        "tone-a": "#f9fafb",
        "tone-b": "#202429",
      },
      transparent: {
        "tone-a": "transparent",
        "tone-b": "transparent",
      },
      nature: {
        "tone-a": "#d9e7d5",
        "tone-b": "#343a32",
      },
      fantasy: {
        "tone-a": "#c1b9c4",
        "tone-b": "#28222a",
      },
      thriller: {
        "tone-a": "#aec3c3",
        "tone-b": "#0b2e3a",
      },
      romance: {
        "tone-a": "#f9eaec",
        "tone-b": "#691837",
      },
      vacation: {
        "tone-a": "#faebe6",
        "tone-b": "#b02c13",
      },
      nostalgia: {
        "tone-a": "#fdf9f6",
        "tone-b": "#705b4a",
      },
    },
  },
};

export const textModuleName = "kobber-text-module";

export type TextModuleClassNames = typeof textModuleName;
export type TextModuleColor = (typeof textModuleColors)[number];
export type TextModuleColorVariant = (typeof textModuleColorVariants)[number];

export const textModuleClassnames = (): TextModuleClassNames[] => {
  return [textModuleName];
};

export const textModuleColors = objectKeys(textModuleTokens.background.color);
export const textModuleColorVariants = objectKeys(textModuleTokens.background.color.brand);

export type TextModuleProps = {
  color?: TextModuleColor;
  colorVariant?: TextModuleColorVariant;
};
