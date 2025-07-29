import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { getTypographyStyles } from "../../base/getTypographyStyles";
import { ingressName, ingressSizes } from "./Ingress.core";

const createIngressStyles = () => {
  const ingress = component.ingress;

  return css`
    .${unsafeCSS(ingressName)} {
      color: var(${unsafeCSS(ingress.text.color.base)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${typographyStyles()}

      /* used in global.css em styling (Lit can't style nested slots) */
      --highlight-color: var(${unsafeCSS(ingress.text.color.highlight)});

      em,
      ::slotted(em) {
        color: var(--highlight-color);
        font-style: normal;
      }
    }
  `;
};

const typographyStyles = () => {
  return css`
    ${unsafeCSS(
      ingressSizes
        .flatMap(size => {
          return `&[data-size="${size}"] {
            ${getTypographyStyles("ingress", "primary", size)}}`;
        })
        .join("\n"),
    )}
  `;
};

export const ingressStyles = createIngressStyles();
