import { css, unsafeCSS } from "lit";

import {
  type ContentWrapperClassNames,
  contentWrapperTokens,
  contentWrapperColors,
  contentWrapperColorVariants,
  layoutTokens,
} from "./ContentWrapper.core";

const createContentWrapperStyles = () => {
  return css`
    :host {
      display: block;
    }
    .${unsafeCSS("kobber-content-wrapper" satisfies ContentWrapperClassNames)} {
      min-height: 5em;
      border-radius: 1.5em;
      overflow: auto; /* Applicable when max-height attribute is used. */
      background-color: var(--content-wrapper-background-color);
      ${colorVariants()};
      max-width: 700px;

      .content-wrapper-inner {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: ${unsafeCSS(contentWrapperTokens["inner-text-container"].gap)}px;
        padding: ${unsafeCSS(contentWrapperTokens.padding.top)}px ${unsafeCSS(contentWrapperTokens.padding.inline)}px ${unsafeCSS(contentWrapperTokens.padding.bottom)}px;
        max-width: 700px;
        margin: 0 auto;
      }

      &.full-width {
        max-width: 100%;
      }

      .header, .div, ::slotted(div) {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: ${unsafeCSS(contentWrapperTokens.gap)}px;
      }
      
      .top-block {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: ${unsafeCSS(layoutTokens.page.space.small)}px;
      }

    }
  `;
};

const colorVariants = () =>
  unsafeCSS(
    contentWrapperColors
      .flatMap(contentWrapperColor => {
        return contentWrapperColorVariants.flatMap(contentWrapperColorVariant => {
          return `
            &[data-color="${contentWrapperColor}"] {
              &[data-color-variant="${contentWrapperColorVariant}"] {
                --content-wrapper-background-color: ${contentWrapperTokens.background.color[contentWrapperColor][contentWrapperColorVariant]};
              }
            }
          `;
        });
      })
      .join("\n"),
  );

export const contentWrapperStyles = createContentWrapperStyles();
