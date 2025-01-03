import { css, unsafeCSS } from "lit";
import { component, global } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { linkName } from "./Link.core";

/**
 * TODO: svg from icon component
 */
const createStyles = () => {
  const link = component.link;

  return css`
    .${unsafeCSS(linkName)} {
      position: relative;
      display: inline-flex;
      text-decoration: none;
      gap: var(${unsafeCSS(link.container.gap)});
      color: var(${unsafeCSS(link.text.color)});

      &:active,
      &.active,
      &:hover,
      &.hover {
        &:not([disabled]) {
          &:after {
            content: "";
            position: absolute;
            border-bottom: var(${unsafeCSS(link.container.border.width.hover)}) solid currentColor;
            bottom: 0;
            right: 0;
            left: 0;
          }
        }
      }

      &:focus-visible,
      &.focus {
        outline: none;
        border-radius: var(${unsafeCSS(global.focus.border.radius.xsmall)});
        box-shadow: 0 0 0 var(${unsafeCSS(global.focus.border.width)}) var(${unsafeCSS(global.focus.color)});
        padding-inline: var(${unsafeCSS(link.container.gap)});

        &:active,
        &.active,
        &:hover,
        &.hover {
          &:not([disabled]) {
            &:after {
              /* prevents hover from colliding with focus border */
              bottom: 0.2rem;
              right: var(${unsafeCSS(link.container.gap)});
              left: var(${unsafeCSS(link.container.gap)});
            }
          }
        }
      }

      svg {
        display: inline;
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  `;
};

export const linkStyles = createStyles();
