import { css, unsafeCSS } from "lit";
import { resetMargin } from "../../base/styles/reset.styles";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";
import {
  titleColors,
  titleColorVariants,
  titleFonts,
  titleName,
  titleSizes,
  titleTokens,
} from "./Title.core";

const createTitleStyles = () => css`
.${unsafeCSS(titleName)} {
  ${resetMargin()}
  ${defaultTypographyStyles()}
  ${fontSizeVariants()}
  ${fontFamilyVariants()}
  ${colorVariants()}
  ${lineHeightVariants()}
}`;

const fontSizeVariants = () =>
  unsafeCSS(
    titleSizes
      .flatMap(
        size =>
          `
&[data-size="${size}"] {
  ${setTypographyVariable("size", titleTokens.text.size[size])};
}`,
      )
      .join(""),
  );

const fontFamilyVariants = () =>
  unsafeCSS(
    titleFonts
      .flatMap(
        font =>
          `
&[data-font="${font}"] {
  ${setTypographyVariable("family", titleTokens.text.font[font])};
}`,
      )
      .join(""),
  );

const colorVariants = () =>
  unsafeCSS(
    titleColors
      .flatMap(
        color =>
          `
&[data-color="${color}"] {
${titleColorVariants
  .flatMap(
    colorVariant =>
      `
  &[data-color-variant="${colorVariant}"] {
    ${setTypographyVariable("color", titleTokens.text.color[color][colorVariant])};
  }`,
  )
  .join("")}
}`,
      )
      .join(""),
  );

const lineHeightVariants = () =>
  unsafeCSS(
    titleFonts
      .flatMap(
        font =>
          `
&[data-font="${font}"] {
  ${setTypographyVariable("family", titleTokens.text.font[font])};
  ${titleSizes
    .flatMap(
      size =>
        `
  &[data-size="${size}"] {
    ${setTypographyVariable("lineHeight", titleTokens.text["line-height"][font][size])};
  }`,
    )
    .join("")}
}`,
      )
      .join(""),
  );

export const titleStyles = createTitleStyles();
