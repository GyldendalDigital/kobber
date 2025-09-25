//import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
//export const contentWrapperTokens = component["content-wrapper"];

import { objectKeys } from "../../base/utilities/objectKeys";

export const layoutTokens = {
  page: {
    space: {
      small: "16",
    },
  },
};

export const contentWrapperTokens = {
  padding: {
    inline: 56,
    top: 48,
    bottom: 72,
  },
  gap: 8,
  "inner-text-container": {
    gap: 40,
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

export const contentWrapperName = "kobber-content-wrapper";

export type ContentWrapperFullWidth = boolean | undefined;
export type ContentWrapperClassNames = typeof contentWrapperName | "full-width";

export type ContentWrapperColor = (typeof contentWrapperColors)[number];
export type ContentWrapperColorVariant = (typeof contentWrapperColorVariants)[number];

export const contentWrapperClassnames = ({
  fullWidth = false,
}: ContentWrapperProps): ContentWrapperClassNames[] => {
  const conditionalClassNames: ContentWrapperClassNames[] = [];

  if (fullWidth) {
    conditionalClassNames.push("full-width");
  }

  return [contentWrapperName, ...conditionalClassNames];
};

export const contentWrapperColors = objectKeys(contentWrapperTokens.background.color);
export const contentWrapperColorVariants = objectKeys(contentWrapperTokens.background.color.brand);

export type ContentWrapperProps = {
  color?: ContentWrapperColor;
  colorVariant?: ContentWrapperColorVariant;
  fullWidth?: ContentWrapperFullWidth;
  maxHeightInPx?: number;
};
