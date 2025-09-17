import { css, unsafeCSS } from "lit";
import { displayTokens, displayName, displaySizes, displayFonts } from "./Display.core";
import { resetHeading } from "../../base/styles/reset.styles";
import { getTypographyStyles } from "../../base/getTypographyStyles2";

const createDisplayStyles = () => {
  return css`
    .${unsafeCSS(displayName)} {
      ${resetHeading()};

      color: var(--color);

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${typographyStyles()}

      em,
      ::slotted(em) {
        color: var(${unsafeCSS(displayTokens.extended.text.color)});
        font-family: var(--typography-font-family-extended);
        font-style: normal;
      }
    }
  `;
};

const typographyStyles = () => {
  return css`
    ${unsafeCSS(
      displaySizes
        .flatMap(
          size =>
            `&[data-size="${size}"] {
              ${getTypographyStyles("text-display-extended", size)}
            }`,
        )
        .join("\n"),
    )}
    ${fontStyles()}
  `;
};

const fontStyles = () => {
  return css`
    ${unsafeCSS(
      displayFonts
        .flatMap(
          font =>
            `&[data-font="${font}"] {
              --typography-font-family-extended: var(${displayTokens.extended.text.font[font]});
            }`,
        )
        .join("\n"),
    )}
  `;
};

export const displayStyles = createDisplayStyles();
