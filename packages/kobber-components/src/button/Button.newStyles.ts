import { css, unsafeCSS } from "lit";
import { Theme } from "../utils/theme-context.types";

const customElementName = "kobber-button";

const cssVariables = (tokens: Theme["tokens"]) => {
  const button = tokens.component.button;

  return css`
    .${unsafeCSS(customElementName)} {
      --button-background-color: ${unsafeCSS(button.background.color.neutral.main)};
    }
  `;
};

const cssStatic = css`
  .${unsafeCSS(customElementName)} {
    color: var(--text-highlight-color);
  }

  .primary {
    background-color: var(--button-background-color);
  }

  .secondary {
    background-color: var(--button-background-color);
  }
`;

export const buttonStyles = {
  customElementName,
  cssVariables,
  cssStatic,
};
