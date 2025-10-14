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
        figcaption {
          display: none;
        }
      }
      
      &[data-credit-placement="right"] {
        figcaption {
          right: 0;
        }
      }
      
      &[data-credit-placement="left"] {
        figcaption {
          left: 0;
        }
      }
      ::slotted(img) { 
          height: var(--image-height);
          width: var(--image-width);
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
      position: relative;
      height: var(--image-height);
      margin: 0;
      display: flex;
      gap: 1em;
    }
    
    figcaption {
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .credit {
        padding: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"].padding)});
        white-space: nowrap;
        max-width: var(--image-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  `;
};

export const mediaModuleStyles = createMediaModuleStyles();
