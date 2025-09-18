import { css, unsafeCSS } from "lit";
import { leadColors, leadColorVariants, leadFonts, leadName, leadTokens } from "./Lead.core";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";

const createLeadStyles = () => css`
.${unsafeCSS(leadName)} {
  ${defaultTypographyStyles({ size: leadTokens.size, lineHeight: leadTokens["line-height"] })}
  ${fontFamilyVariants()}
  ${colorVariants()}
}`;

const fontFamilyVariants = () =>
  unsafeCSS(
    leadFonts
      .flatMap(
        font =>
          `
&[data-font="${font}"] {
  ${setTypographyVariable("family", leadTokens.font[font])};
}`,
      )
      .join(""),
  );

const colorVariants = () =>
  unsafeCSS(
    leadColors
      .flatMap(
        color =>
          `
&[data-color="${color}"] {
${leadColorVariants
  .flatMap(
    colorVariant =>
      `
  &[data-color-variant="${colorVariant}"] {
    ${setTypographyVariable("color", leadTokens.color[color][colorVariant])};
  }`,
  )
  .join("")}
}`,
      )
      .join(""),
  );

export const leadStyles = createLeadStyles();
