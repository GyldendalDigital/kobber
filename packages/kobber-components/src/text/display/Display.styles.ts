import { css, unsafeCSS } from "lit";
import { resetMargin } from "../../base/styles/reset.styles";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";
import { displayFonts, displayName, displaySizes, displayTokens } from "./Display.core";

const createDisplayStyles = () => css`
.${unsafeCSS(displayName)} {
  ${resetMargin()}
  ${defaultTypographyStyles()}
  ${fontSizeVariants()}
  ${fontFamilyVariants()}
}`;

const fontSizeVariants = () =>
  unsafeCSS(
    displaySizes
      .flatMap(
        size =>
          `
&[data-size="${size}"] {
  ${setTypographyVariable("size", displayTokens.text.size[size])}
  ${setTypographyVariable("lineHeight", displayTokens.text["line-height"][size])}
}`,
      )
      .join(""),
  );

const fontFamilyVariants = () =>
  unsafeCSS(
    displayFonts
      .flatMap(
        font =>
          `
&[data-font="${font}"] em {
  font-family: var(${displayTokens.extended.text.font[font]});
}`,
      )
      .join(""),
  );

export const displayStyles = createDisplayStyles();
