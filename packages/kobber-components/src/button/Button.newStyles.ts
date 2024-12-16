import { css, unsafeCSS } from "lit";
import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";

const customElementName = "kobber-button";

const cssVariables = () => {
  const button = defaultTokens.component.button;
  const typography = defaultTokens.typography.ui.button;

  // Common for all variants
  return css`
    .${unsafeCSS(customElementName)} {
      display: flex;
      flex-direction: "row-reverse";
      align-items: end;
      border: 2px solid transparent;
      cursor: pointer;
      gap: ${unsafeCSS(button.container.gap)}px;
      padding-block: ${unsafeCSS(button.container.padding.block)}px;
      padding-inline: ${unsafeCSS(button.container.padding.inline)}px;
      border-radius: ${unsafeCSS(button.container.border.radius)}px;
      min-height: ${unsafeCSS(button.container.size.height)}px;
      font-size: ${unsafeCSS(typography.fontSize / 16)}rem;
      font-family: ${unsafeCSS(typography.fontFamily)};
      font-weight: ${unsafeCSS(typography.fontWeight)};
      font-style: ${unsafeCSS(typography.fontStyle)};
      font-stretch: ${unsafeCSS(typography.fontStretch)};
      transition: scale 200ms ease-in 0s;

      --background-color-primary: ${unsafeCSS(button.background.color.carmine.main.primary.fallback)};
      --text-color-primary: ${unsafeCSS(button.text.color.carmine.main.primary.fallback)};
      --background-color-secondary: ${unsafeCSS(button.background.color.carmine.supplemental.primary.fallback)};
      --text-color-secondary: ${unsafeCSS(button.text.color.carmine.supplemental.primary.fallback)};
    }
  `;
};

const cssStatic = css`
  .${unsafeCSS(customElementName)}.main {
    background-color: var(--background-color-primary);
    color: var(--text-color-primary);
  }

  .${unsafeCSS(customElementName)}.supplemental {
    background-color: var(--background-color-secondary);
    color: var(--button-background-color);
  }

  .${unsafeCSS(customElementName)}.supplemental-alt {
    background-color: transparent;
    height: auto;
    padding: 0;
    text-decoration: underline;
  }

  /* Hover state */
  .${unsafeCSS(customElementName)}:hover {
    opacity: 0.9;
  }

  /* Active state */
  .${unsafeCSS(customElementName)}:active {
    opacity: 0.8;
  }

  /* Focus state */
  .${unsafeCSS(customElementName)}:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--button-background-color), 0.4);
  }

  /* Disabled state */
  .${unsafeCSS(customElementName)}[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const buttonStyles = {
  customElementName,
  cssVariables,
  cssStatic,
  styles: {
    main: `${customElementName} main`,
    supplemental: `${customElementName} supplemental`,
    "supplemental alt": `${customElementName} supplemental-alt`,
  },
};
