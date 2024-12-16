import { css, unsafeCSS } from "lit";
import { Theme } from "../../utils/theme-context.types";

const customElementName = "kobber-text-highlight";

const cssVariables = (tokens: Theme["tokens"]) => {
  const article = tokens.component.article;

  return css`
    .${unsafeCSS(customElementName)} {
      --text-highlight-color: ${unsafeCSS(article.body.text.color.highlight)};
    }
  `;
};

const cssStatic = css`
  .${unsafeCSS(customElementName)} {
    color: var(--text-highlight-color);
  }

  .variant-a {
    text-decoration: underline;
  }

  .variant-b {
    text-decoration: underline;
  }
`;

export const textHighlightStyles = {
  customElementName,
  cssVariables,
  cssStatic,
};
