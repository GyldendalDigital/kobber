import { css, unsafeCSS } from "lit";

import {
  type ContentWrapperClassNames,
  contentWrapperTokens,
  contentWrapperColorVariants,
} from "./ContentWrapper.core";

const createContentWrapperStyles = () => {
  return css`
    :host {
      display: block;
    }
    .${unsafeCSS("kobber-content-wrapper" satisfies ContentWrapperClassNames)} {
      min-height: 5em;
      overflow: auto; /* Applicable when max-height attribute is used. */
      background-color: var(--content-wrapper-background-color);
      max-width: 720px;
      ${colorVariants()};

      .inner-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: var(${unsafeCSS(contentWrapperTokens["inner-container"].gap)});
        padding: 0 var(${unsafeCSS(contentWrapperTokens.padding.inline)}) var(${unsafeCSS(contentWrapperTokens.padding.bottom)});
        max-width: var(${unsafeCSS(contentWrapperTokens.size["max-width"])});
        margin: 0 auto;
      }

      &[data-type="overlay"] {
        border-radius: var(${unsafeCSS(contentWrapperTokens.border.radius.overlay)});
        padding-top: var(${unsafeCSS(contentWrapperTokens.padding.top.overlay)});
      }

      &[data-type="page"] {
        max-width: 100%;
        padding-top: var(${unsafeCSS(contentWrapperTokens.padding.top.page)});
      }
    }
  `;
};

const colorVariants = () =>
  unsafeCSS(
    contentWrapperColorVariants
      .flatMap(contentWrapperColorVariant => {
        return `
              &[data-color-variant="${contentWrapperColorVariant}"] {
                --content-wrapper-background-color: var(${contentWrapperTokens.background.color[contentWrapperColorVariant]});
              }
          `;
      })
      .join("\n"),
  );

export const contentWrapperStyles = createContentWrapperStyles();
