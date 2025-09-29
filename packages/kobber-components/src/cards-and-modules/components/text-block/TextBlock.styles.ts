import { css, unsafeCSS } from "lit";
import { type TextBlockClassNames, textBlockTokens } from "./TextBlock.core";

const createTextBlockStyles = () => {
  return css`
    :host {
      display: block;
    }
    .${unsafeCSS("kobber-text-block" satisfies TextBlockClassNames)} {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: var(${unsafeCSS(textBlockTokens.gap)});
    }
  `;
};

export const textBlockStyles = createTextBlockStyles();
