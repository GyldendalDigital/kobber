import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { DividerClassName, dividerVariants } from "./Divider.core";

const dividerTokens = component.divider;

const createDividerStyles = () => {
  return css`
    host: {
      display: block;
    }

    .${unsafeCSS("kobber-divider" satisfies DividerClassName)} {
      width: 100%;
      height: 1px;
      background-color: var(--divider-background-color);
      ${variantStyles()}
    }
  `;
};

const variantStyles = () => {
  const variants = dividerVariants.flatMap(variant => {
    return css`
      ${unsafeCSS(`&[data-variant="${variant}"]`)} {
        --divider-background-color: var(${unsafeCSS(dividerTokens.background.color[variant])});
      }
    `;
  });

  return unsafeCSS(variants.join("\n"));
};

export const dividerStyles = createDividerStyles();
