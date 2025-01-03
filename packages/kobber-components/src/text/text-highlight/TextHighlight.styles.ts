import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { textHighlightColors, textHighlightName } from "./TextHighlight.core";

const createTextHighlightStyles = () => {
  const article = component.article;

  return css`
    .${unsafeCSS(textHighlightName)} {
      color: var(${unsafeCSS(article.body.text.color.highlight)});

      ${textHighlightVariableStyles()};
    }
  `;
};

const textHighlightVariableStyles = () =>
  unsafeCSS(
    textHighlightColors
      .map(
        color => css`
          &.${unsafeCSS(color)} {
            color: var(${unsafeCSS(component.button.background.color[color].main.primary.fallback)});
          }
        `,
      )
      .join("\n"),
  );

export const textHighlightStyles = createTextHighlightStyles();
