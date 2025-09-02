import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { leadColorThemes, leadColorVariants, leadName, leadTokens } from "./Lead.core";

const createLeadStyles = () => {
  const lead = component.lead;

  return css`
    .${unsafeCSS(leadName)} {
      font-size: ${unsafeCSS(leadTokens.size)};
      font-family: ${unsafeCSS(leadTokens.font)};
      font-weight: 400;
      font-style: normal;
      line-height: ${unsafeCSS(leadTokens["line-height"])};

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
      leadColorThemes
        .flatMap(
          colorTheme =>
            `&[data-color-theme="${colorTheme}"] {${leadColorVariants
              .flatMap(
                colorVariant =>
                  `&[data-color-variant="${colorVariant}"] {
                        color: ${unsafeCSS(leadTokens.color[colorTheme][colorVariant])};
                      }`,
              )
              .join("")}}`,
        )
        .join("\n"),
    )}
  `;
};

export const leadStyles = createLeadStyles();
