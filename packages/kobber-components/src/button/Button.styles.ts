import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  type ButtonClassNames,
  type ButtonColorLevel,
  type ButtonColorTheme,
  type ButtonColorVariant,
  type ButtonType,
  buttonTypes,
  buttonColorLevels,
  buttonColorVariants,
  buttonColorThemes,
} from "./Button.core";
import { resetButton } from "../base/styles/reset.styles";
import { getTypographyStyles } from "../base/getTypographyStyles2";
import { isValidPropCombination } from "../base/internal/buttonUtils";

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
      --icon-color: inherit;
      --background-color: transparent;
      ${resetButton()};
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

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${getTypographyStyles("text-label")}

      &.${unsafeCSS("kobber-button--full-width" satisfies ButtonClassNames)} {
        width: 100%;
      }

      &.${unsafeCSS("kobber-button--used-in-other-interactive" satisfies ButtonClassNames)} {
        align-items: start;
        height: auto;
      }

      ${getTypeThemeVariantLevelStyles()}

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

const getTypeThemeVariantLevelStyles = () => {
  return css`
    ${unsafeCSS(
      buttonTypes
        .flatMap((buttonType: ButtonType) =>
          buttonColorThemes[buttonType].flatMap(colorTheme =>
            buttonColorVariants[buttonType].flatMap(colorVariant => {
              if (buttonColorLevels[buttonType].length > 0) {
                return buttonColorLevels[buttonType].flatMap(colorLevel =>
                  getColorStyles(
                    buttonType,
                    component,
                    universal,
                    colorTheme as ButtonColorTheme,
                    colorVariant as ButtonColorVariant,
                    colorLevel as ButtonColorLevel,
                  ),
                );
              } else {
                return getColorStyles(
                  buttonType,
                  component,
                  universal,
                  colorTheme as ButtonColorTheme,
                  colorVariant as ButtonColorVariant,
                );
              }
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

const getColorStyles = (
  buttonType: ButtonType,
  // biome-ignore lint: tokens can really be of any type.
  component: any,
  // biome-ignore lint: tokens can really be of any type.
  universal: any,
  colorTheme: ButtonColorTheme,
  colorVariant: ButtonColorVariant,
  colorLevel?: ButtonColorLevel,
) => {
  if (
    !isValidPropCombination(buttonType, component, universal, colorTheme, colorVariant, colorLevel)
  ) {
    return;
  }

  const textColorVariant = colorVariant === "tone-a" ? "tone-b" : "tone-a";

  let backgroundColor: { hover: string; fallback: string },
    borderColor: { hover: string; active: string };
  const iconColor = universal["text-label"]?.text.color[colorTheme]?.[textColorVariant];

  if (colorLevel) {
    backgroundColor =
      component[buttonType].background?.color?.[colorTheme]?.[colorLevel]?.[colorVariant];
    borderColor = component[buttonType]?.border?.color?.[colorTheme]?.[colorLevel]?.[colorVariant];
  } else {
    backgroundColor = component[buttonType].background?.color?.[colorTheme]?.[colorVariant];
    borderColor = component[buttonType]?.border?.color?.[colorTheme]?.[colorVariant];
  }

  let selectorString = `&[data-button-type="${buttonType}"][data-color-variant="${colorVariant}"][data-color="${colorTheme}"]`;
  if (colorLevel) {
    selectorString += `[data-color-level="${colorLevel}"]`;
  }

  return css`
    ${unsafeCSS(`
      ${selectorString} {
        --icon-color: var(${unsafeCSS(iconColor)});
        --border-color: var(${unsafeCSS(borderColor?.active)});
        --background-color: var(${unsafeCSS(backgroundColor?.fallback)});
        ${hover(backgroundColor?.hover, backgroundColor?.fallback)};
      }
    `)}
  `;
};

export const buttonStyles = createButtonStyles();
