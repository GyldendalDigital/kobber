import { css, unsafeCSS } from "lit";
import { resetMargin } from "../../base/styles/reset.styles";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";
import {
  textBodyColors,
  textBodyColorVariants,
  textBodyContexts,
  textBodyFonts,
  textBodyName,
  textBodySizes,
  textBodyTokens,
} from "./TextBody.core";

const createTextBodyStyles = () => css`
.${unsafeCSS(textBodyName)} {
  ${resetMargin()}
  ${defaultTypographyStyles()}
  ${fontSizeVariants()}
  ${fontFamilyVariants()}
  ${colorVariants()}
  ${lineHeightVariants()}
  display: flex;
  flex-direction: column;
  gap: 1em;
}`;

const fontSizeVariants = () =>
  unsafeCSS(
    textBodySizes
      .flatMap(
        size => `
&[data-size="${size}"] {
  ${setTypographyVariable("size", textBodyTokens.text.size[size])};
}`,
      )
      .join(""),
  );

const fontFamilyVariants = () =>
  unsafeCSS(
    textBodyFonts
      .flatMap(
        font => `
&[data-font="${font}"] {
  ${setTypographyVariable("family", textBodyTokens.text.font[font])};
}`,
      )
      .join(""),
  );

const colorVariants = () =>
  unsafeCSS(
    textBodyColors
      .flatMap(
        color => `
&[data-color="${color}"] {
${textBodyColorVariants
  .flatMap(
    colorVariant => `
  &[data-color-variant="${colorVariant}"] {
    ${setTypographyVariable("color", textBodyTokens.text.color[color][colorVariant])};
  }`,
  )
  .join("")}
}`,
      )
      .join(""),
  );

const lineHeightVariants = () =>
  unsafeCSS(
    textBodyFonts
      .flatMap(
        font => `
&[data-font="${font}"] {
  ${setTypographyVariable("family", textBodyTokens.text.font[font])};
  ${textBodySizes
    .flatMap(
      size => `
  &[data-size="${size}"] {
    ${textBodyContexts
      .flatMap(
        context => `
    &[data-context="${context}"] {
      ${setTypographyVariable(
        "lineHeight",
        textBodyTokens.text["line-height"][font][size][context],
      )};
    }`,
      )
      .join("")}
  }`,
    )
    .join("")}
}`,
      )
      .join(""),
  );

export const textBodyStyles = createTextBodyStyles();
