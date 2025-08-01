/* eslint  @typescript-eslint/no-explicit-any: 0 */ // --> OFF
import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  ButtonClassNames,
  buttonColorLevels,
  buttonColorThemes,
  buttonColorVariants,
  buttonDefaultProps,
  ButtonProps,
  buttonThemeProps,
  ButtonType,
  buttonUiProps,
} from "./Button.core";
import { resetButton } from "../base/styles/reset.styles";
import { getTypographyStyles } from "../base/getTypographyStyles";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 * TODO:
 * - choose between padding block or fixed height. Both are not needed.
 */

const button = component.button;

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

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("button", "ui"))}

      &.${unsafeCSS("kobber-button--full-width" satisfies ButtonClassNames)} {
        width: 100%;
      }

      &.${unsafeCSS("kobber-button--used-in-other-interactive" satisfies ButtonClassNames)} {
        align-items: start;
        height: auto;
      }

      ${getThemeSizeVariantStyles("button")}
      ${getThemeSizeVariantStyles("ui-button")}
      ${getThemeSizeVariantStyles("theme-button")}
      
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

const getThemeSizeVariantStyles = (buttonType: ButtonType) => {
  console.info(`buttonType: ${buttonType}`);
  return css`
    ${unsafeCSS(
      buttonColorThemes
        .flatMap(colorTheme =>
          buttonColorLevels.flatMap(colorLevel =>
            buttonColorVariants.flatMap(colorVariant => {
              const textColor =
                (component[buttonType] as any).text.color?.[colorTheme]?.[colorLevel]?.[colorVariant] ??
                (component[buttonType] as any).text.color?.[colorTheme]?.[colorLevel];
              const backgroundColor =
                (component[buttonType] as any).background?.color?.[colorTheme]?.[colorLevel]?.[colorVariant] ??
                (component[buttonType] as any).background?.color?.[colorTheme]?.[colorVariant];
              const borderColor = (component[buttonType] as any)?.border?.color?.[colorTheme]?.[colorLevel]?.[
                colorVariant
              ];

              console.info(
                `backgroundColor (colorTheme: ${colorTheme}, colorLevel: ${colorLevel}, colorVariant: ${colorVariant})`,
              );
              console.info(backgroundColor);

              return css`
                ${unsafeCSS(`
                  &[data-color-variant="${colorVariant}"][data-color-theme="${colorTheme}"][data-color-level="${colorLevel}"] {
                    --color: var(${unsafeCSS(textColor)});
                    --border-color: var(${unsafeCSS(borderColor)});
                    --background-color: var(${unsafeCSS(backgroundColor.fallback)});
                    ${hover(backgroundColor.hover, backgroundColor.fallback)};
                  }
                `)}
              `;
            }),
          ),
        )
        .join("\n"),
    )}
  `;
};

const hover = (hoverColor: string, fallbackColor: string) => css`
  &:hover,
  &.hover {
    &:not([disabled]) {
      --background-color: var(${unsafeCSS(fallbackColor)});
      background-image: linear-gradient(0deg, var(${unsafeCSS(hoverColor)}) 0%, var(${unsafeCSS(hoverColor)}) 100%);
    }
  }
`;

export const buttonStyles = createButtonStyles();
