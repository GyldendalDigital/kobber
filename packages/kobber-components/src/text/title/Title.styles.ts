import { css, unsafeCSS } from "lit";
import {
  titleTokens,
  titleName,
  titleColors,
  titleSizes,
  titleFonts,
  titleColorVariants,
} from "./Title.core";
import { resetHeading } from "../../base/styles/reset.styles";
import { getTypographyStyles } from "../../base/getTypographyStyles2";

const createTitleStyles = () => {
  return css`
    .${unsafeCSS(titleName)} {
      ${resetHeading()};

      color: var(--color);

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${typographyStyles()}
      ${colorStyles()}

      em,
      ::slotted(em) {
        color: var(--highlight-color);
        font-style: normal;
      }
    }
  `;
};

const typographyStyles = () => {
  return css`
    ${unsafeCSS(
      titleSizes
        .flatMap(
          size =>
            `&[data-size="${size}"] {
              ${getTypographyStyles("text-title", size)}
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
      titleFonts
        .flatMap(
          font =>
            `&[data-font="${font}"] {
              --typography-font-family: var(${titleTokens.text.font[font]});
            }`,
        )
        .join("\n"),
    )}
  `;
};

const colorStyles = () => {
  return css`
    ${unsafeCSS(
      titleColors
        .flatMap(
          color =>
            `&[data-color="${color}"] {${titleColorVariants
              .flatMap(
                colorVariant =>
                  `&[data-color-variant="${colorVariant}"] {
                    --color: var(${titleTokens.text.color[color][colorVariant]});
                  }`,
              )
              .join("")}}`,
        )
        .join("\n"),
    )}
  `;
};

export const titleStyles = createTitleStyles();
