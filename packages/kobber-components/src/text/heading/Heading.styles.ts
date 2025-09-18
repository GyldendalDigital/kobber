import { css, unsafeCSS } from "lit";
import {
  headingTokens,
  headingName,
  headingColors,
  headingSizes,
  headingFonts,
  headingColorVariants,
} from "./Heading.core";
import { resetHeading } from "../../base/styles/reset.styles";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";

const createHeadingStyles = () => css`
.${unsafeCSS(headingName)} {
  ${resetHeading()}
  ${defaultTypographyStyles()}
  ${fontSizeVariants()}
  ${fontFamilyVariants()}
  ${colorVariants()}
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

export const headingStyles = createHeadingStyles();
