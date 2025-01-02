import { css, unsafeCSS } from "lit";
import { component, global, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
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

/**
 * Shared styles, used in web component, React and CSS module.
 */
const createButtonStyles = () => {
  const button = component.button;

  return css`
    .${unsafeCSS(buttonName)} {
      ${resetButton()};
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid transparent;
      gap: var(${unsafeCSS(button.container.gap)});
      padding-block: var(${unsafeCSS(button.container.padding.block)});
      padding-inline: var(${unsafeCSS(button.container.padding.inline)});
      border-radius: var(${unsafeCSS(button.container.border.radius)});
      min-height: var(${unsafeCSS(button.container.size.height)});

      ${buttonVariableStyles()}

      ${typographyButton()}

      &:not(.icon-only)::after {
        right: var(${unsafeCSS(button.container.padding.inline)});
        left: var(${unsafeCSS(button.container.padding.inline)});
      }

      &.icon.icon-only::after {
        right: 12px;
        left: 12px;
      }

      &[disabled],
      &.disabled {
        /* TODO: wait for tokens to expose percent as number, not rem */
        /* opacity: var(${unsafeCSS(global.disabled.container.opacity)}); */
        opacity: 0.5;
        cursor: auto;
      }

      &:focus-visible,
      &.focus {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(global.focus.border.width)}) var(${unsafeCSS(global.focus.color)});
      }

      &.${unsafeCSS("icon" satisfies ButtonClassNames)} {
        --icon-width: var(${unsafeCSS(button.icon.size.width.small)});
        --icon-height: var(${unsafeCSS(button.icon.size.height.small)});

        &.${unsafeCSS("icon-left" satisfies ButtonClassNames)} {
          flex-direction: row-reverse;
        }

        &.${unsafeCSS("icon-only" satisfies ButtonClassNames)} {
          gap: 0;
          padding-block: 12px;
          padding-inline: 12px;
        }
      }

      &.${unsafeCSS("link" satisfies ButtonClassNames)} {
        text-decoration: none;
        /* color: var(${unsafeCSS(component.link.text.color)}) !important; */
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
                background-color: transparent;
                color: var(${unsafeCSS(component.button.text.color[color][variant][level].fallback)});

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
              background-color: var(${unsafeCSS(backgroundColor.fallback)});
              color: var(${unsafeCSS(textColor.fallback)});

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
      background: linear-gradient(0deg, var(${unsafeCSS(hoverColor)}) 0%, var(${unsafeCSS(hoverColor)}) 100%),
        var(${unsafeCSS(fallbackColor)});
    }
  }
`;

const hoverEffectSecondary = () => css`
  &:active,
  &.active,
  &:hover,
  &.hover {
    &:not([disabled]):after {
      content: "";
      position: absolute;
      bottom: 0;
      border-bottom: var(${unsafeCSS(component.button.container.border.width.hover)}) solid currentColor;
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
