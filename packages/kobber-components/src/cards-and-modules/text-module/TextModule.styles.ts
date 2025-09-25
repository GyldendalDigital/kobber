import { css, unsafeCSS } from "lit";

import {
  type TextModuleClassNames,
  textModuleTokens,
  textModuleColors,
  textModuleColorVariants,
} from "./TextModule.core";

const createTextModuleStyles = () => {
  return css`
    :host {
      display: block;
    }
    .${unsafeCSS("kobber-text-module" satisfies TextModuleClassNames)} {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: ${unsafeCSS(textModuleTokens["inner-text-container"].gap)}px;
      padding: ${unsafeCSS(textModuleTokens.padding.top)}px ${unsafeCSS(textModuleTokens.padding.inline)}px ${unsafeCSS(textModuleTokens.padding.bottom)}px;
      min-height: 5em;
      border-radius: 1.5em;
      
      max-width: 600px;
      ::slotted(kobber-text-module) {
        max-width: 400px;
      }

      .header, .div, ::slotted(div) {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: ${unsafeCSS(textModuleTokens.gap)}px;
      }

      background-color: var(--text-module-background-color);
      ${colorVariants()};
    }
  `;
};

const colorVariants = () =>
  unsafeCSS(
    textModuleColors
      .flatMap(textModuleColor => {
        return textModuleColorVariants.flatMap(textModuleColorVariant => {
          return `
      &[data-color="${textModuleColor}"] {
          &[data-color-variant="${textModuleColorVariant}"] {
            --text-module-background-color: ${textModuleTokens.background.color[textModuleColor][textModuleColorVariant]};
          }
        }`;
        });
      })
      .join("\n"),
  );

export const textModuleStyles = createTextModuleStyles();
