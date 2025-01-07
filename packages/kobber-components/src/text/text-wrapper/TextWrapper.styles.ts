import { css, unsafeCSS } from "lit";
import { component, template, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const textWrapperName = "kobber-text-wrapper";

const createTextWrapperStyles = () => {
  const textWrapper = template["text-wrapper"];
  const body = component.article.body;
  const bodyText = typography.primary.body;

  return css`
    .${unsafeCSS(textWrapperName)} {
      display: flex;
      flex-direction: column;
      gap: var(${unsafeCSS(textWrapper.gap.horizontal)});
      color: var(${unsafeCSS(body.text.color.base)});
      font-family: var(${unsafeCSS(bodyText.fontFamily)});
      font-size: var(${unsafeCSS(bodyText.fontSize)});
      font-weight: var(${unsafeCSS(bodyText.fontWeight)});
      font-style: var(${unsafeCSS(bodyText.fontStyle)});
      font-stretch: var(${unsafeCSS(bodyText.fontStretch)});
      line-height: var(${unsafeCSS(bodyText.lineHeight)});
    }
  `;
};

export const textWrapperStyles = createTextWrapperStyles();
