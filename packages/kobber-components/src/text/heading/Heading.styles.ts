import { css, unsafeCSS } from "lit";
import { resetMargin } from "../../base/styles/reset.styles";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";
import {
  headingColors,
  headingColorVariants,
  headingFonts,
  headingName,
  headingSizes,
  headingTokens,
} from "./Heading.core";

const createHeadingStyles = () => css`
.${unsafeCSS(headingName)} {
  ${resetMargin()}
  ${defaultTypographyStyles()}
  ${fontSizeVariants()}
  ${fontFamilyVariants()}
  ${colorVariants()}
  ${lineHeightVariants()}
}`;

const fontSizeVariants = () =>
  unsafeCSS(
    headingSizes
      .flatMap(
        size =>
          `
&[data-size="${size}"] {
  ${setTypographyVariable("size", headingTokens.text.size[size])};
}`,
      )
      .join(""),
  );

const fontFamilyVariants = () =>
  unsafeCSS(
    headingFonts
      .flatMap(
        font =>
          `
&[data-font="${font}"] {
  ${setTypographyVariable("family", headingTokens.text.font[font])};
}`,
      )
      .join(""),
  );

const colorVariants = () =>
  unsafeCSS(
    headingColors
      .flatMap(
        color =>
          `
&[data-color="${color}"] {
${headingColorVariants
  .flatMap(
    colorVariant =>
      `
  &[data-color-variant="${colorVariant}"] {
    ${setTypographyVariable("color", headingTokens.text.color[color][colorVariant])};
  }`,
  )
  .join("")}
}`,
      )
      .join(""),
  );

const lineHeightVariants = () =>
  unsafeCSS(
    headingFonts
      .flatMap(
        font =>
          `
&[data-font="${font}"] {
  ${setTypographyVariable("family", headingTokens.text.font[font])};
  ${headingSizes
    .flatMap(
      size =>
        `
  &[data-size="${size}"] {
    ${setTypographyVariable("lineHeight", headingTokens.text["line-height"][font][size])};
  }`,
    )
    .join("")}
}`,
      )
      .join(""),
  );

export const headingStyles = createHeadingStyles();
