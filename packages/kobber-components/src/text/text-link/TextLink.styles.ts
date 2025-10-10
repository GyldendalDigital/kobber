import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import focusStyles from "../../base/styles/focus.styles";
import { textLinkName } from "./TextLink.core";

/**
 * TODO: svg from icon component
 */
const createStyles = () => {
  return css`
    .${unsafeCSS(textLinkName)} {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      gap: var(${unsafeCSS(component["text-link"].gap)});
      line-height: normal;

      &::after {
        content: "";
        position: absolute;
        border-bottom: var(${unsafeCSS(component["text-link"].border.width)}) solid;
        bottom: 0;
        right: 0;
        left: 0;
      }

      &[aria-disabled="true"],
      &.disabled {
        opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
        opacity: 0.5;
        cursor: auto;
      }

      &:focus-visible,
      &.focus {
        ${focusStyles};
        padding: 0.5rem;
        &::after {
          /* prevents hover from colliding with focus border */
          bottom: 0.2rem;
          right: var(${unsafeCSS(component["text-link"].gap)});
          left: var(${unsafeCSS(component["text-link"].gap)});
        }
      }

      svg {
        display: inline;
        scale: 0.9;
      }
    }
  `;
};

export const textLinkStyles = createStyles();
