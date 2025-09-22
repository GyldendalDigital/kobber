import { css, unsafeCSS } from "lit";
import {
  textLabelTokens,
  textLabelName,
  textLabelColors,
  textLabelSizes,
  textLabelColorVariants,
} from "./TextLabel.core";
import { resetMargin } from "../../base/styles/reset.styles";
import {
  defaultTypographyStyles,
  setTypographyVariable,
} from "../../base/styles/typography.styles";

const createTextLabelStyles = () => css`
.${unsafeCSS(textLabelName)} {
  ${resetMargin()}
  ${defaultTypographyStyles({
    size: textLabelTokens.size.medium,
    family: textLabelTokens.font,
    lineHeight: textLabelTokens["line-height"],
    weight: textLabelTokens.weight,
    color: textLabelTokens.color.brand["tone-a"],
  })}
  ${fontSizeVariants()}
  ${colorVariants()}
}`;

const fontSizeVariants = () =>
  unsafeCSS(
    textLabelSizes
      .flatMap(
        size => `
&[data-size="${size}"] {
  ${setTypographyVariable("size", textLabelTokens.size[size])};
}`,
      )
      .join(""),
  );

const colorVariants = () =>
  unsafeCSS(
    textLabelColors
      .flatMap(
        color => `
&[data-color="${color}"] {
${textLabelColorVariants
  .flatMap(
    colorVariant => `
  &[data-color-variant="${colorVariant}"] {
    ${setTypographyVariable("color", textLabelTokens.color[color][colorVariant])};
  }`,
  )
  .join("")}
}`,
      )
      .join(""),
  );

export const textLabelStyles = createTextLabelStyles();
