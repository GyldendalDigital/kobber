import { css, unsafeCSS } from "lit";
import { getTypographyStyles } from "../../base/getTypographyStyles2";
import { ingressName, ingressTokens, ingressSizes } from "./Ingress.core";

const createIngressStyles = () => {
  return css`
    .${unsafeCSS(ingressName)} {
      color: var(${unsafeCSS(ingressTokens.text.color.brand)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${typographyStyles()}

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
            ${getTypographyStyles("text-lead", size)}}`;
        })
        .join("\n"),
    )}
    --typography-line-height: var(${unsafeCSS(ingressTokens.text["line-height"])});
  `;
};

export const ingressStyles = createIngressStyles();
