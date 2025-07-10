/* eslint  @typescript-eslint/no-explicit-any: 0 */ // --> OFF
import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { ButtonClassNames, buttonDefaultProps, ButtonProps, buttonThemeProps, buttonUiProps } from "./Button.core";
import { resetButton } from "../base/styles/reset.styles";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 * TODO:
 * - choose between padding block or fixed height. Both are not needed.
 */

const button = component.button;
const textStyles = universal.text.ui;

const createButtonStyles = () => {
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

      ${typographyStyles()}

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
      [name="icon"] {
        position: relative;
        display: block;
        &:after {
          content: "";
          position: absolute;
          /* TODO: find out what this value should be */
          bottom: -0.4rem;
          border-bottom: var(${unsafeCSS(button.border.width.hover)}) solid;
          right: var(${unsafeCSS(button.padding.inline)});
          left: var(${unsafeCSS(button.padding.inline)});
        }
      }

      &.${unsafeCSS("kobber-button--icon" satisfies ButtonClassNames)} {
        &.${unsafeCSS("kobber-button--icon-only" satisfies ButtonClassNames)} {
          [name="icon"]:after {
            right: 0;
            left: 0;
          }
        }
      }
    }
  }
`;

const typographyStyles = () => {
  return css`
    --font-size: var(${unsafeCSS(textStyles.size.button)});
    --font-family: var(${unsafeCSS(textStyles["font-family"])});
    --font-weight: var(${unsafeCSS(textStyles.weight.button)});
    --font-style: normal;
    --line-height: normal;
  `;
};

export const buttonStyles = createButtonStyles();
