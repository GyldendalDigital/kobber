import { css, unsafeCSS } from "lit";
import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const ingressName = "kobber-ingress";

const createIngressStyles = () => {
  const ingress = component.ingress;

  return css`
    .${unsafeCSS(ingressName)} {
      color: var(${unsafeCSS(ingress.text.color.base)});

      ${ingressTypography()}

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

const ingressTypography = () => {
  const ingress = typography.primary["title medium"];

  return css`
    font-size: var(${unsafeCSS(ingress.fontSize)});
    font-family: var(${unsafeCSS(ingress.fontFamily)});
    font-weight: var(${unsafeCSS(ingress.fontWeight)});
    font-style: var(${unsafeCSS(ingress.fontStyle)});
    font-stretch: var(${unsafeCSS(ingress.fontStretch)});
    line-height: var(${unsafeCSS(ingress.lineHeight)});
  `;
};

export const ingressStyles = createIngressStyles();
