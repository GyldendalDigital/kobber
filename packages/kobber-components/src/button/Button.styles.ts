/* eslint  @typescript-eslint/no-explicit-any: 0 */ // --> OFF
import { css, unsafeCSS } from "lit";
import { component, universal, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { ButtonClassNames, buttonDefaultProps, ButtonProps, buttonThemeProps, buttonUiProps } from "./Button.core";
import { resetButton } from "../base/styles/reset.styles";

// TODO: get from tokens
const paddingIconOnly = 12 / 16 + "rem";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 * TODO:
 * - choose between padding block or fixed height. Both are not needed.
 * - padding as icon only should be a token, or use fixed width same as height
 */
const createButtonStyles = () => {
  const button = component.button;

  return css`
    .${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
      --color: inherit;
      --background-color: transparent;
      ${resetButton()};
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid transparent;
      color: var(--color);
      background-color: var(--background-color);
      gap: var(${unsafeCSS(button.gap)});
      /* see TODO: padding-block: var(${unsafeCSS(button.padding.block)}); */
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

      ${createVariableStyles(buttonDefaultProps, "button", prop => prop?.includes("tertiary") === true)}

      ${createVariableStyles(buttonUiProps, "ui-button", _ => false)}

      ${createVariableStyles(buttonThemeProps, "theme-button", prop => prop?.includes("secondary") === true)}

      ${typographyButton()}

      &[disabled],
      &.disabled {
        /* TODO: wait for tokens to expose percent as number, not rem */
        /* opacity: var(${unsafeCSS(universal.disabled.container.opacity)}); */
        opacity: 0.5;
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

        &.${unsafeCSS("kobber-button--icon-left" satisfies ButtonClassNames)} {
          flex-direction: row-reverse;
        }

        &.${unsafeCSS("kobber-button--icon-only" satisfies ButtonClassNames)} {
          aspect-ratio: 1 / 1;
          padding: 0;
        }
      }

      &.${unsafeCSS("kobber-button--link" satisfies ButtonClassNames)} {
        text-decoration: none;
      }
    }
  `;
};

const createVariableStyles = (
  propArray: ButtonProps["variant"][],
  buttonType: keyof typeof component,
  isTransparent: (prop: ButtonProps["variant"]) => boolean,
) => {
  const variableClasses = propArray.map(prop => {
    if (!prop) {
      return;
    }

    const [color = "", level = "", variant = ""] = prop.split("-");

    const textColor =
      (component[buttonType] as any).text.color?.[color]?.[level]?.[variant] ??
      (component[buttonType] as any).text.color?.[color]?.[level];
    const backgroundColor =
      (component[buttonType] as any).background?.color?.[color]?.[level]?.[variant] ??
      (component[buttonType] as any).background?.color?.[color]?.[level];
    const borderColor = (component[buttonType] as any)?.border?.color?.[color]?.[level]?.[variant];

    if (
      typeof textColor !== "string" ||
      (typeof backgroundColor?.fallback !== "string" && typeof borderColor?.active !== "string")
    ) {
      console.log("Invalid prop combination", prop);
      return;
    }

    const nestedClassNames = `&.${prop satisfies ButtonClassNames}`;

    if (isTransparent(prop)) {
      return css`
        ${unsafeCSS(nestedClassNames)} {
          --color: var(${unsafeCSS(textColor)});
          ${hoverEffectSecondary()};
        }
      `;
    }

    return css`
      ${unsafeCSS(nestedClassNames)} {
        --color: var(${unsafeCSS(textColor)});
        --background-color: var(${unsafeCSS(backgroundColor.fallback)});
        ${hoverEffectPrimary(backgroundColor.hover, backgroundColor.fallback)};
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

const hoverEffectPrimary = (hoverColor: string, fallbackColor: string) => css`
  &:hover,
  &.hover {
    &:not([disabled]) {
      --background-color: var(${unsafeCSS(fallbackColor)});
      background-image: linear-gradient(0deg, var(${unsafeCSS(hoverColor)}) 0%, var(${unsafeCSS(hoverColor)}) 100%);
    }
  }
`;

const hoverEffectSecondary = () => css`
  &:active,
  &.active,
  &:hover,
  &.hover {
    &:not([disabled]) {
      &:after {
        content: "";
        position: absolute;
        /* TODO: find out what this value should be */
        bottom: 0.2rem;
        border-bottom: var(${unsafeCSS(component.button.border.width.hover)}) solid;
        right: var(${unsafeCSS(component.button.padding.inline)});
        left: var(${unsafeCSS(component.button.padding.inline)});
      }

      &.${unsafeCSS("kobber-button--icon" satisfies ButtonClassNames)} {
        &.${unsafeCSS("kobber-button--icon-only" satisfies ButtonClassNames)} {
          &:after {
            right: ${unsafeCSS(paddingIconOnly)};
            left: ${unsafeCSS(paddingIconOnly)};
          }
        }
      }
    }
  }
`;

const typographyButton = () => {
  const button = typography.ui.button;

  return css`
    font-size: var(${unsafeCSS(button.fontSize)});
    font-family: var(${unsafeCSS(button.fontFamily)});
    font-weight: var(${unsafeCSS(button.fontWeight)});
    font-style: var(${unsafeCSS(button.fontStyle)});
    font-stretch: var(${unsafeCSS(button.fontStretch)});
    line-height: normal;
  `;
};

export const buttonStyles = createButtonStyles();
