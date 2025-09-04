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
import { getTypographyStyles } from "../../base/getTypographyStyles2";

const createHeadingStyles = () => {
  return css`
    .${unsafeCSS(headingName)} {
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

      &[data-highlighted="true"] {
        --typography-font-family: Lyon Display, serif;
        --color: var(--kobber-semantics-color-identity-brand-carmine-525) !important;
      }

      &:after {
        content: var(--storybook-unused-style-content);
        background-color: white;
        position: relative;
        left: -4.5em;
      }
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
      headingSizes
        .flatMap(
          size =>
            `&[data-size="${size}"] {
              ${getTypographyStyles("text-heading", size)}
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
      headingFonts
        .flatMap(
          font =>
            `&[data-font="${font}"] {
              --typography-font-family: var(${headingTokens.text.font[font]});
            }`,
        )
        .join("\n"),
    )}
  `;
};

const colorStyles = () => {
  return css`
    ${unsafeCSS(
      headingColors
        .flatMap(
          color =>
            `&[data-color="${color}"] {${headingColorVariants
              .flatMap(
                colorVariant =>
                  `&[data-color-variant="${colorVariant}"] {
                    --color: var(${headingTokens.text.color[color][colorVariant]});
                  }`,
              )
              .join("")}}`,
        )
        .join("\n"),
    )}
  `;
};

export const headingStyles = createHeadingStyles();
