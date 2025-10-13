import { css, unsafeCSS } from "lit";

import {
  type TextModuleClassNames,
  textModuleColors,
  textModuleColorVariants,
  textModuleTokens,
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
      gap: var(${unsafeCSS(textModuleTokens["inner-text-container"].gap)});
      padding: var(${unsafeCSS(textModuleTokens.padding.top)}) var(${unsafeCSS(textModuleTokens.padding.inline)}) var(${unsafeCSS(textModuleTokens.padding.bottom)});
      min-height: 5em;
      border-radius: 1.5em;
      
      max-width: 600px;
      ::slotted(kobber-text-module) {
        max-width: 400px;
      }

      .header, .div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: var(${unsafeCSS(textModuleTokens.gap)});
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
            --text-module-background-color: var(${textModuleTokens.color.background[textModuleColor][textModuleColorVariant]});
          }
        }`;
        });
      })
      .join("\n"),
  );

export const textModuleStyles = createTextModuleStyles();
