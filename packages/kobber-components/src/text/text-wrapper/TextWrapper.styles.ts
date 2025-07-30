import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { TextWrapperClassNames } from "./TextWrapper.core";
import { getTypographyStyles } from "../../base/getTypographyStyles";

const createTextWrapperStyles = () => {
  const body = component.body;

  return css`
    .${unsafeCSS("kobber-text-wrapper" satisfies TextWrapperClassNames)} {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(${unsafeCSS(body.text.color.base)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("text-wrapper", "primary"))}

      /* used in global.css em styling (Lit can't style nested slots) */
      --highlight-color: var(${unsafeCSS(body.text.color.highlight)});

      em,
      ::slotted(em) {
        color: var(--highlight-color);
        font-style: normal;
      }
    }

    .${unsafeCSS("reading-max-width" satisfies TextWrapperClassNames)} {
      max-width: 75ch;
    }
  `;
};

export const textWrapperStyles = createTextWrapperStyles();
