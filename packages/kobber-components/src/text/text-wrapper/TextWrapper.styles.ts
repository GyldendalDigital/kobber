import { css, unsafeCSS } from "lit";
import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const textWrapperName = "kobber-text-wrapper";

const createTextWrapperStyles = () => {
  const body = component.body;
  const bodyText = typography.primary.body;

  return css`
    .${unsafeCSS(textWrapperName)} {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(${unsafeCSS(body.text.color.base)});
      font-family: var(${unsafeCSS(bodyText.fontFamily)});
      font-size: var(${unsafeCSS(bodyText.fontSize)});
      font-weight: var(${unsafeCSS(bodyText.fontWeight)});
      font-style: var(${unsafeCSS(bodyText.fontStyle)});
      font-stretch: var(${unsafeCSS(bodyText.fontStretch)});
      line-height: var(${unsafeCSS(bodyText.lineHeight)});

      /* used in global.css em styling (Lit can't style nested slots) */
      --highlight-color: var(${unsafeCSS(body.text.color.highlight)});

      em,
      ::slotted(em) {
        color: var(--highlight-color);
        font-style: normal;
      }
    }
  `;
};

export const textWrapperStyles = createTextWrapperStyles();
