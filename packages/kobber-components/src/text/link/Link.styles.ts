import { css, unsafeCSS } from "lit";
import { component, global } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { linkName } from "./Link.core";
import { resetButton } from "../../base/styles/reset.styles";

/**
 * TODO: svg from icon component
 */
const createStyles = () => {
  const link = component.link;

  return css`
    .${unsafeCSS(linkName)} {
      ${resetButton()};
      position: relative;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      gap: var(${unsafeCSS(link.container.gap)});
      line-height: var(${unsafeCSS(global.text.ui["line-height"].input)});
      color: var(${unsafeCSS(link.text.color)});

      &.color-text {
        color: var(${unsafeCSS(component.article.body.text.color.base)});
      }

      &.color-heading {
        color: var(${unsafeCSS(component.article.heading.text.color.h1.base)});
      }

      &[disabled],
      &.disabled {
        /* TODO: wait for tokens to expose percent as number, not rem */
        /* opacity: var(${unsafeCSS(global.disabled.container.opacity)}); */
        opacity: 0.5;
        cursor: auto;
      }

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
