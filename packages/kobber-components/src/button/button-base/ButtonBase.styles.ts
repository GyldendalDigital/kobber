import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { resetButton } from "../../base/styles/reset.styles";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import type { ButtonClassNames } from "./ButtonBase.core";

const button = component.button;

const createBaseButtonStyles = () => {
  return css`
    .${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
      --icon-color: inherit;
      --background-color: transparent;
      ${resetButton()}
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      max-width: 100%;
      border: 1px solid transparent;
      background-color: var(--background-color);
      gap: var(${unsafeCSS(button.gap)});
      padding-inline: var(${unsafeCSS(button.padding.inline)});
      border-radius: var(${unsafeCSS(button.border.radius)});
      height: var(${unsafeCSS(button.size.height)});

      &.${unsafeCSS("kobber-button--full-width" satisfies ButtonClassNames)} {
        width: 100%;
      }

      &.${unsafeCSS("kobber-button--used-in-other-interactive" satisfies ButtonClassNames)} {
        align-items: start;
        height: auto;
      }

      &[disabled],
      &.disabled {
        opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
        cursor: auto;
      }

      &:focus-visible,
      &.focus {
        &:not([aria-disabled="true"]) {
          outline: none;
          box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
            var(${unsafeCSS(universal.focus.border.color)});
        }
      }

      &.${unsafeCSS("kobber-button--icon" satisfies ButtonClassNames)} {
        --icon-width: var(${unsafeCSS(button.icon.size)});
        --icon-height: var(${unsafeCSS(button.icon.size)});
        color: var(--icon-color);

        &.${unsafeCSS("kobber-button--icon-only" satisfies ButtonClassNames)} {
          padding: 0;
          aspect-ratio: 1 / 1;
          min-width: var(
            ${unsafeCSS(button.size.height)}
          ); /* Implements aspect-ratio, that does not always work in Safari. */
        }
      }

      &.${unsafeCSS("kobber-button--link" satisfies ButtonClassNames)} {
        text-decoration: none;
      }

      &:not(.${unsafeCSS("kobber-button--icon-only" satisfies ButtonClassNames)}) slot:not([name]) {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: block;
      }
    }
  `;
};

export const baseButtonStyles = createBaseButtonStyles();

export const buttonColorVariables = (
  iconColor: string,
  backgroundColor: string,
  hoverColor: string,
  borderColor?: string,
) => css`
--icon-color: var(${unsafeCSS(iconColor)});
--border-color: var(${unsafeCSS(borderColor)});
--background-color: var(${unsafeCSS(backgroundColor)});
${hover(hoverColor)}`;

const hover = (hoverColor: string) => css`
&:hover,
&.hover {
  &:not([disabled]) {
    background-image: linear-gradient(0deg, var(${unsafeCSS(hoverColor)}) 0%, var(${unsafeCSS(hoverColor)}) 100%);
  }
}`;

export const getIconColor = (
  colorTheme: keyof (typeof universal)["text-label"]["text"]["color"],
  colorVariant: keyof (typeof universal)["text-label"]["text"]["color"]["brand"],
) => {
  return universal["text-label"].text.color[colorTheme]?.[invertColorVariant(colorVariant)];
};
