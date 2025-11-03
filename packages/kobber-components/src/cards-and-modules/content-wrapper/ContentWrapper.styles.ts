import { css, unsafeCSS } from "lit";
import {
  type ContentWrapperClassNames,
  contentWrapperColorVariants,
  contentWrapperTokens,
} from "./ContentWrapper.core";

const createContentWrapperStyles = () => {
  return css`
    :host([type="page"]) {
      height: 100%;
    }
    
    .${unsafeCSS("kobber-content-wrapper" satisfies ContentWrapperClassNames)} {
      display: flex;
      justify-content: center;
      flex-direction: column;
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
        padding-inline: var(${unsafeCSS(contentWrapperTokens.padding.inline)});
        max-width: var(${unsafeCSS(contentWrapperTokens.size["max-width"])});
        margin: 0 auto;
      }

      &[data-type="overlay"] {
        border-radius: var(${unsafeCSS(contentWrapperTokens.border.radius.overlay)});
        padding-block: var(${unsafeCSS(contentWrapperTokens.padding.block.overlay)});
      }

      &[data-type="page"] {
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-block: var(${unsafeCSS(contentWrapperTokens.padding.block.page)});
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
                --content-wrapper-background-color: var(${contentWrapperTokens.background.color.brand[contentWrapperColorVariant]});
              }
          `;
      })
      .join("\n"),
  );

export const contentWrapperStyles = createContentWrapperStyles();
