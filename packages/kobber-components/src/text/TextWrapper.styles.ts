import { css, unsafeCSS } from "lit";
import { Theme } from "../utils/theme-context.types";

const customElementName = "kobber-text-wrapper";

const cssVariables = (tokens: Theme["tokens"]) => {
  const textWrapper = tokens.template["text-wrapper"];

  return css`
    .${unsafeCSS(customElementName)} {
      --text-wrapper-gap: ${textWrapper.gap.horizontal}px;
    }
  `;
};

const cssStatic = css`
  .${unsafeCSS(customElementName)} {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: var(--text-wrapper-gap);
  }
`;

export const textWrapperStyles = {
  customElementName,
  cssVariables,
  cssStatic,
};
