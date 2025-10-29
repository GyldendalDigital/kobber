import { css, unsafeCSS } from "lit";
import { type MediaModuleClassNames, mediaModuleTokens } from "./MediaModule.core";

const createMediaModuleStyles = () => {
  return css`
    .${unsafeCSS("kobber-media-module" satisfies MediaModuleClassNames)} {
      width: min-content; /*TODO DELETE */
      --credit-height: 0;
      --credit-width: 0;

      display: flex;
      flex-direction: column;
      gap: var(${unsafeCSS(mediaModuleTokens.gap)});
      
      &[data-credit-placement="none"] {
        --credit-height: 0;
        --credit-width: 0;
        figcaption {
          display: none;
        }
      }
      
      &:not([data-credit-placement="none"]) {
        --credit-height: 61px;
        --credit-width: 161px;
      }
      
      &[data-credit-placement="right"] {
        figcaption {
          right: 0;
        }
        ::slotted(img) { 
        }
      }
      
      &[data-credit-placement="left"] {
        figcaption {
          left: 0;
        }
        ::slotted(img) { 
        }
      }

      &[data-media-object-fit="contain"] ::slotted(img) { 
        object-fit: contain;
      }
      &[data-media-object-fit="cover"] ::slotted(img) { 
        object-fit: cover;
      }
      &[data-media-object-fit="fill"] ::slotted(img) { 
        object-fit: fill;
      }
      &[data-media-object-fit="none"] ::slotted(img) { 
        object-fit: none;
      }
      &[data-media-object-fit="scale-down"] ::slotted(img) { 
        object-fit: scale-down;
      }
    }

    figure {
      --figure-width: 100%; /* Is reset by js. */
      position: relative;
      height: 396px;
      margin: 0;
      ::slotted(img) { 
        border-radius: var(${unsafeCSS(mediaModuleTokens.border.radius)});
      }
      display: flex;
      gap: 1em;
    }
    
    figcaption {
      position: absolute;
      bottom: 0;
      height: var(--credit-height);
      width: var(--credit-width);
      display: flex;
      align-items: center;
      justify-content: center;
      .credit {
        padding: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"].padding)});
        white-space: nowrap;
        max-width: var(--figure-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  `;
};

export const mediaModuleStyles = createMediaModuleStyles();
