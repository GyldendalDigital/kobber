import { css, unsafeCSS } from "lit";
import { component, universal, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  buttonColors,
  buttonVariants,
  buttonLevels,
  buttonName,
  ButtonClassNames,
  isValidPropCombination,
  hasSupplementalAlt,
  isUiColor,
} from "./Button.core";
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
    .${unsafeCSS(buttonName)} {
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
      gap: var(${unsafeCSS(button.container.gap)});
      /* see TODO: padding-block: var(${unsafeCSS(button.container.padding.block)}); */
      padding-inline: var(${unsafeCSS(button.container.padding.inline)});
      border-radius: var(${unsafeCSS(button.container.border.radius)});
      height: var(${unsafeCSS(button.container.size.height)});

      &.${unsafeCSS("full-width" satisfies ButtonClassNames)} {
        width: 100%;
      }

      &.${unsafeCSS("used-in-other-interactive" satisfies ButtonClassNames)} {
        align-items: start;
        height: auto;
      }

      ${buttonVariableStyles()}

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
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)}) var(${unsafeCSS(universal.focus.color)});
      }

      &.${unsafeCSS("icon" satisfies ButtonClassNames)} {
        --icon-width: var(${unsafeCSS(button.icon.size.width.small)});
        --icon-height: var(${unsafeCSS(button.icon.size.height.small)});

        &.${unsafeCSS("icon-left" satisfies ButtonClassNames)} {
          flex-direction: row-reverse;
        }

        &.${unsafeCSS("icon-only" satisfies ButtonClassNames)} {
          aspect-ratio: 1 / 1;
          padding: 0;
        }
      }

      &.${unsafeCSS("link" satisfies ButtonClassNames)} {
        text-decoration: none;
      }
    }
  `;
};

const buttonVariableStyles = () => {
  const variableClasses = buttonColors.flatMap(color => {
    return buttonVariants.flatMap(variant => {
      return buttonLevels
        .filter(level => isValidPropCombination({ color, variant, level }))
        .map(level => {
          const nestedClassNames = `&.${color}.${variant}.${level}`.replace(" ", "-");

          // rules
          // level secondary: background-color transparent, different hover effect
          // color success, informative, warning: level secondary not available
          // color aubergine, rettsdata, neutral: variant supplemental alt available

          // transparent secondary buttons with alternative hover effect
          if (level === "secondary") {
            if (variant === "supplemental alt" || isUiColor(color)) {
              return;
            }

            return css`
              ${unsafeCSS(nestedClassNames)} {
                --color: var(${unsafeCSS(component.button.text.color[color][variant][level].fallback)});
                ${hoverEffectSecondary()}
              }
            `;
          }

          // not all colors have supplemental alt variant
          let textColor;
          let backgroundColor;
          if (variant === "supplemental alt") {
            if (!hasSupplementalAlt(color)) {
              return;
            }
            textColor = component.button.text.color[color][variant][level];
            backgroundColor = component.button.background.color[color][variant][level];
          } else {
            textColor = component.button.text.color[color][variant][level];
            backgroundColor = component.button.background.color[color][variant][level];
          }

          return css`
            ${unsafeCSS(nestedClassNames)} {
              --background-color: var(${unsafeCSS(backgroundColor.fallback)});
              --color: var(${unsafeCSS(textColor.fallback)});

              ${hoverEffectPrimary(backgroundColor.hover, backgroundColor.fallback)}
            }
          `;
        })
        .filter(x => x !== undefined);
    });
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
        border-bottom: var(${unsafeCSS(component.button.container.border.width.hover)}) solid;
        right: var(${unsafeCSS(component.button.container.padding.inline)});
        left: var(${unsafeCSS(component.button.container.padding.inline)});
      }

      &.${unsafeCSS("icon" satisfies ButtonClassNames)} {
        &.${unsafeCSS("icon-only" satisfies ButtonClassNames)} {
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
