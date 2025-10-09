import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { type DividerClassNames, dividerVariants } from "./Divider.core";

const dividerTokens = component.divider;

const createDividerStyles = () => {
  return css`
    :host {
      display: block;
    }

    .${unsafeCSS("kobber-divider" satisfies DividerClassNames)} {
      width: 100%;
      height: calc(1rem / 16);
      background-color: var(--divider-background-color);
      ${colorVariantStyles()}
    }
  `;
};

const colorVariantStyles = () => {
  const colorVariants = dividerVariants.flatMap(colorVariant => {
    return css`
      ${unsafeCSS(`&[data-color-variant="${colorVariant}"]`)} {
        --divider-background-color: var(${unsafeCSS(dividerTokens.background.color[colorVariant])});
      }
    `;
  });

  return unsafeCSS(colorVariants.join("\n"));
};

export const dividerStyles = createDividerStyles();
