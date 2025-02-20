import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  inputVariants,
  InputClassNames,
  InputVariant,
  InputLabelClassNames,
  InputControlPartNames,
} from "../Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createInputStyles = () => {
  const input = component.input.selection;
  return css`
    .${unsafeCSS("kobber-radio-input" satisfies InputClassNames)} {
      --control-outline-color: transparent;
      display: flex;
      gap: var(${unsafeCSS(input.container.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding-inline: var(${unsafeCSS(input.wrapper.padding)});

      ${typographyButton()}
      ${buttonVariantStyles()}
      ${buttonStates()}
      
      &.${unsafeCSS("kobber-radio-input--as-link" satisfies InputClassNames)} {
        text-decoration: none;
      }
    }
    .${unsafeCSS("kobber-radio-input__label" satisfies InputLabelClassNames)} {
      display: block;
    }
  `;
};

const buttonVariantStyles = () => {
  const variantClasses = inputVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    return css`
      ${unsafeCSS(variantClassName)} {
        ${buttonStatesPerVariant(variant)}
      }
    `;
  });

  return unsafeCSS(variantClasses.join("\n"));
};

const buttonStatesPerVariant = (variant: InputVariant) => {
  const outlineColor = component.input.selection["radio-indicator"].outline.color[variant];
  return css`
    &.hover:not(.disabled):not([disabled])
      .${unsafeCSS("kobber-radio-input__control" satisfies InputControlPartNames)} {
      --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
    }

    &.active:not(.disabled):not([disabled])
      .${unsafeCSS("kobber-radio-input__control" satisfies InputControlPartNames)} {
      --control-outline-color: var(${unsafeCSS(outlineColor.active)});
    }
  `;
};

const buttonStates = () => {
  return css`
    &.disabled {
      /* TODO: wait for tokens to expose percent as number, not rem */
      /* opacity: var(${unsafeCSS(universal.disabled.container.opacity)}); */
      opacity: 0.5;
      cursor: auto;
    }

    &:focus-visible,
    &.focus {
      &:not(.disabled):not([disabled]) {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)}) var(${unsafeCSS(universal.focus.color)});
        border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
      }
    }
  `;
};

const typographyButton = () => {
  const text = universal.text.ui;

  return css`
    font-size: var(${unsafeCSS(text.size.label.large)});
    font-family: var(${unsafeCSS(text["font-family"])});
    font-weight: var(${unsafeCSS(text.weight.label.large)});
    font-style: normal;
    line-height: var(${unsafeCSS(text["line-height"].label.large["multi-line"])});
  `;
};

export const buttonStyles = createInputStyles();
