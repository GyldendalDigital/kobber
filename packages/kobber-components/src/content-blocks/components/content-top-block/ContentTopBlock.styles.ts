import { css, unsafeCSS } from "lit";

import { type ContentTopBlockClassNames, contentTopBlockTokens } from "./ContentTopBlock.core";

const createContentTopBlockStyles = () => {
  return css`
    :host {
      display: block;
    }
    .${unsafeCSS("kobber-content-top-block" satisfies ContentTopBlockClassNames)} {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: var(${unsafeCSS(contentTopBlockTokens.gap)});
    }
  `;
};

export const contentTopBlockStyles = createContentTopBlockStyles();
