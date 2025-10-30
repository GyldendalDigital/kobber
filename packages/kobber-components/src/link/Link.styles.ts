import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { resetButton } from "../base/styles/reset.styles";
import { type LinkClassNames, type LinkProps, linkName } from "./Link.core";

/**
 * TODO: svg from icon component
 */
const createStyles = () => {
  const link = component["nav-link"];

  return css`
    .${unsafeCSS(linkName)} {
      position: relative;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      gap: var(${unsafeCSS(link.gap)});

      &.${unsafeCSS("subtle" satisfies LinkProps["type"])} {
        color: var(${unsafeCSS(universal["text-label"].text.color.subtle["tone-a"])});
      }

      &.${unsafeCSS("prominent" satisfies LinkProps["type"])} {
        color: var(${unsafeCSS(universal["text-label"].text.color.accent["tone-a"])});
      }

      &[disabled],
      &.disabled {
        opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
        cursor: auto;
      }

      &:active,
      &.active,
      &:hover,
      &.hover {
        &:not([disabled]) {
          &::after {
            content: "";
            position: absolute;
            border-bottom: var(${unsafeCSS(link.border.width.hover)}) solid;
            bottom: 0;
            right: 0;
            left: 0;
          }
        }
      }

      &:focus-visible,
      &.focus {
        outline: none;
        border-radius: var(${unsafeCSS(universal.focus.border.radius.small)});
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
          var(${unsafeCSS(universal.focus.border.color)});
        padding-inline: var(${unsafeCSS(link.gap)});

        &:active,
        &.active,
        &:hover,
        &.hover {
          &:not([disabled]) {
            &::after {
              /* prevents hover from colliding with focus border */
              bottom: 0.2rem;
              right: var(${unsafeCSS(link.gap)});
              left: var(${unsafeCSS(link.gap)});
            }
          }
        }
      }

      &.${unsafeCSS("kobber-link--icon" satisfies LinkClassNames)} {
        --icon-width: var(${unsafeCSS(link.icon.size)});
        --icon-height: var(${unsafeCSS(link.icon.size)});

        &.${unsafeCSS("kobber-link--icon-only" satisfies LinkClassNames)} {
          aspect-ratio: 1 / 1;
          padding: 0;
        }
      }
    }

    button.${unsafeCSS(linkName)} {
      ${resetButton()};
      font-size: inherit;
      border: 1px solid transparent;
      background-color: transparent;
      padding: 0;
    }
  `;
};

export const linkStyles = createStyles();
