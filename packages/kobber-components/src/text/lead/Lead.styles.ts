import { css, unsafeCSS } from "lit";
import {
  leadColors,
  leadColorVariants,
  leadName,
  leadTokens,
} from "./Lead.core";

const createLeadStyles = () => {
  return css`
    .${unsafeCSS(leadName)} {
      font-size: var(${unsafeCSS(leadTokens.size)});
      font-family: var(${unsafeCSS(leadTokens.font)});
      font-weight: 400;
      font-style: normal;
      line-height: var(${unsafeCSS(leadTokens["line-height"])});

      ${typographyStyles()}

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
      leadColors
        .flatMap(
          (color) =>
            `&[data-color="${color}"] {${leadColorVariants
              .flatMap(
                (colorVariant) =>
                  `&[data-color-variant="${colorVariant}"] {
                        color: var(${unsafeCSS(leadTokens.color[color][colorVariant])});
                      }`,
              )
              .join("")}}`,
        )
        .join("\n"),
    )}
  `;
};

export const leadStyles = createLeadStyles();
