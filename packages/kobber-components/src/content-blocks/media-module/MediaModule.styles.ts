import { css, unsafeCSS } from "lit";
import { type MediaModuleClassNames, mediaModuleTokens } from "./MediaModule.core";

const createMediaModuleStyles = () => {
  return css`
    .${unsafeCSS("kobber-media-module" satisfies MediaModuleClassNames)} {

      width: auto; /* Combined with image's width: 100%: Scale image within container. */
      display: flex;
      flex-direction: column;
      gap: var(${unsafeCSS(mediaModuleTokens.gap)});
      
      &[data-credit-placement="none"] {
        figcaption {
          display: none;
        }
      }
      
      &:not([data-credit-placement="none"]) {
        figcaption {
          /* Custom Property --credit-fill-color is defined in inline css. */
          background-color: var(--credit-fill-color);
          fill: var(--credit-fill-color);

          .curve {
            height: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"].shape.height)});
            width: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"].shape.width)});
            position: absolute;
          }
        }
      }
      
      &[data-credit-placement="right"] {
        figcaption {
          right: 0;
          border-top-left-radius: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"]["border-radius"]["top-left"]["right-align"])});
          border-bottom-right-radius: calc(var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"]["border-radius"]["bottom-right"]["right-align"])}) - 2px);

          .curve:first-of-type {
            left: -1em;
            bottom: 0;
          }
          .curve:last-of-type {
            right: 0;
            top: -1em;
          }
        }
      }
      
      &[data-credit-placement="left"] {
        figcaption {
          left: 0;
          border-top-right-radius: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"]["border-radius"]["top-right"]["left-align"])});
          border-bottom-left-radius: calc(var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"]["border-radius"]["bottom-left"]["left-align"])}) - 2px);

          .curve {
            rotate: 90deg;
          }
          .curve:first-of-type {
            left: 0;
            top: -1em;
          }
          .curve:last-of-type {
            right: -1em;
            bottom: 0;
          }
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

    .symbols {
       position: absolute; 
       width: 0; 
       height: 0; 
       overflow: hidden;
    }
    figure {
      position: relative;
      margin: 0;
      display: flex;
      ::slotted(img) { 
        width: 100%; /* Combined with .kobber-media-module's width: auto: Scale image within container. */
        height: var(${unsafeCSS(mediaModuleTokens["image-container"].size.height)});
        border-radius: var(${unsafeCSS(mediaModuleTokens.border.radius)});
      }
    }
    
    figcaption {
      position: absolute;
      bottom: 0;
      max-width: 60%; /* To enable kobber-text-label to truncate text. Max 45 characters. */
      padding: var(${unsafeCSS(mediaModuleTokens["inner-inner-credit-container"].padding)});

      kobber-text-label {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  `;
};

export const mediaModuleStyles = createMediaModuleStyles();
