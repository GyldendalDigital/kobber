import { css, unsafeCSS } from "lit";

import { mediaModuleTokens, type MediaModuleClassNames } from "./MediaModule.core";

const createMediaModuleStyles = () => {
  return css`
    :host {
      --credit-height: 0;
      --credit-width: 0;
      
      [data-has-credit="true"] {
        --credit-height: 60px;
        --credit-width: 160px;
      } 
      
      ::slotted(img) { 
        clip-path: polygon(
          0% 0%, 100% 0%, 100% 0%, 100% 100%, 
          100% calc(100% - var(--credit-height)), 
          calc(100% - var(--credit-width)) calc(100% - var(--credit-height)), 
          calc(100% - var(--credit-width)) 100%, 
          0% 100%
        );
      }
      &:host([credits-placement-left]) {
        ::slotted(img) { 
          clip-path: polygon(
            0% 0%, 100% 0%, 100% 0%, 100% 100%,
            var(--credit-width) 100%,
            var(--credit-width) calc(100% - var(--credit-height)),
            0 calc(100% - var(--credit-height)),
            0 0
          );
        }
      }
    }

    .${unsafeCSS("kobber-media-module" satisfies MediaModuleClassNames)} {
      box-sizing: border-box;
      width: min-content;
      height: min-content;
      display: flex;
      flex-direction: column;
      gap: var(${unsafeCSS(mediaModuleTokens.gap)});
    }

    figure {
      position: relative;
      margin: 0;
      ::slotted(img) { 
        border-radius: var(${unsafeCSS(mediaModuleTokens.border.radius)});
      }
      display: flex;
      [data-credit-placement-left="false"] & {
        justify-content: end;
      }
      [data-credit-placement-left="true"] & {
        justify-content: start;
      }
    }
    
    figcaption {
      position: absolute;
      bottom: 0;
      [data-credit-placement-left="false"] & {
        right: 0;
      }
      [data-credit-placement-left="true"] & {
        left: 0;
      }
      height: var(--credit-height);
      width: var(--credit-width);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
};

export const mediaModuleStyles = createMediaModuleStyles();
