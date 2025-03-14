import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { LinkClassNames, LinkProps, linkName } from "./Link.core";
import { resetButton } from "../base/styles/reset.styles";

/**
 * TODO: svg from icon component
 */
const createStyles = () => {
  const link = component.link;

  return css`
    .${unsafeCSS(linkName)} {
      position: relative;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      gap: var(${unsafeCSS(link.container.gap)});
      line-height: var(${unsafeCSS(universal.text.ui["line-height"].label.medium["multi-line"])});
      color: var(${unsafeCSS(link.text.color.base)});

      &.${unsafeCSS("subtle" satisfies LinkProps["type"])} {
        color: var(${unsafeCSS(component.breadcrumb.text.color.fallback)});
      }

      &.${unsafeCSS("prominent" satisfies LinkProps["type"])} {
        color: var(${unsafeCSS(link.text.color.highlight)});
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
        border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)}) var(${unsafeCSS(universal.focus.color)});
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

      &.${unsafeCSS("kobber-link--icon" satisfies LinkClassNames)} {
        --icon-width: var(${unsafeCSS(link.icon.size)});
        --icon-height: var(${unsafeCSS(link.icon.size)});

        &.${unsafeCSS("kobber-link--icon-left" satisfies LinkClassNames)} {
          flex-direction: row-reverse;
        }
      }

      svg {
        display: inline;
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
