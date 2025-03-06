import { css, unsafeCSS } from "lit";
import { component, typography, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
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
    :host {
      --control-outline-color: transparent;
    }

    .${unsafeCSS("kobber-radio-input" satisfies InputClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(input.container.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding: calc(var(--kobber-component-input-selection-wrapper-padding) + 0.15em)
        var(--kobber-component-input-selection-wrapper-padding) var(--kobber-component-input-selection-wrapper-padding); /* A larger top padding emulates label being vertically aligned with idle input control, but not when multiple lines. */

      ${typographyInput()}
      ${inputVariantStyles()}
      ${inputStates()}
      
      &.${unsafeCSS("kobber-radio-input--as-link" satisfies InputClassNames)} {
        text-decoration: none;
      }
    }
    .${unsafeCSS("kobber-radio-input__label" satisfies InputLabelClassNames)} {
      display: block;
    }
  `;
};

const inputVariantStyles = () => {
  const variantClasses = inputVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    return css`
      ${unsafeCSS(variantClassName)} {
        ${inputStatesPerVariant(variant)}
      }
    `;
  });

  return unsafeCSS(variantClasses.join("\n"));
};

const inputStatesPerVariant = (variant: InputVariant) => {
  const outlineColor = component.input.selection["radio-indicator"].outline.color[variant];
  return css`
    &.hover,
    :host(:hover) & {
      &:not(.disabled):not([disabled]) {
        ::part(${unsafeCSS("kobber-radio-input__control" satisfies InputControlPartNames)}) {
          --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        }
      }
    }

    &.active,
    :host(:active) & {
      &:not(.disabled):not([disabled]) {
        ::part(${unsafeCSS("kobber-radio-input__control" satisfies InputControlPartNames)}) {
          --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        }
      }
    }
  `;
};

const inputStates = () => {
  return css`
    :host([disabled]) &,
    &.disabled {
      /* TODO: wait for tokens to expose percent as number, not rem */
      /* opacity: var(${unsafeCSS(universal.disabled.container.opacity)}); */
      opacity: 0.5;
      cursor: auto;
    }

    &:focus-visible,
    &.focus,
    :host(:focus) &,
    :host(:focus-visible) & {
      &:not(.disabled):not([disabled]) {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)}) var(${unsafeCSS(universal.focus.color)});
        border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
      }
    }
  `;
};

const typographyInput = () => {
  const input = typography.ui.input;

  return css`
    font-size: var(${unsafeCSS(input.fontSize)});
    font-family: var(${unsafeCSS(input.fontFamily)});
    font-weight: var(${unsafeCSS(input.fontWeight)});
    font-style: var(${unsafeCSS(input.fontStyle)});
    font-stretch: var(${unsafeCSS(input.fontStretch)});
    line-height: normal;
  `;
};

export const radioInputStyles = createInputStyles();
