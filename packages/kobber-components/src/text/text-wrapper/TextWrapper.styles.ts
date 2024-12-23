import { css, unsafeCSS } from "lit";
import { template } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const textWrapperName = "kobber-text-wrapper";

const createTextWrapperStyles = () => {
  const textWrapper = template["text-wrapper"];

  return css`
    .${unsafeCSS(textWrapperName)} {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      gap: var(${unsafeCSS(textWrapper.gap.horizontal)});
    }
  `;
};

export const textWrapperStyles = createTextWrapperStyles();
