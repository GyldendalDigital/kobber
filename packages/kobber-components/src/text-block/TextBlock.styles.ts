import { css, unsafeCSS } from "lit";

import {
  type TextBlockClassNames,
  textBlockTokens,
  textBlockThemes,
  textBlockThemeVariants,
} from "./TextBlock.core";

const createTextBlockStyles = () => {
  return css`
    :host {
      display: block;
    }
    .${unsafeCSS("kobber-text-block" satisfies TextBlockClassNames)} {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5em;
      padding: 2.5em 2em;
      min-height: 5em;
      border-radius: 1.5em;
      background-color: var(--text-block-background-color);
      ${colorVariantStyles()}
    }
  `;
};

const colorVariantStyles = () =>
  unsafeCSS(
    textBlockThemes
      .flatMap(textBlockTheme => {
        return textBlockThemeVariants.flatMap(textBlockThemeVariant => {
          return `&[data-color-theme="${textBlockTheme}"] {
              &[data-color-theme-variant="${textBlockThemeVariant}"] {
                --text-block-background-color: ${textBlockTokens.background.color[textBlockTheme][textBlockThemeVariant]};
              }
            }
          `;
        });
      })
      .join("\n"),
  );

export const textBlockStyles = createTextBlockStyles();
