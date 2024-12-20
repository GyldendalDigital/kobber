import { css, unsafeCSS } from "lit";
import { template } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { textWrapperName } from "./TextWrapper.core";

export const textWrapperStyles = () => {
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
