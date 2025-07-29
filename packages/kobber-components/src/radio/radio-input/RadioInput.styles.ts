import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  inputVariants,
  InputClassNames,
  InputVariant,
  InputLabelClassName,
  InputControlPartNames,
} from "../Radio.core";
import { getTypographyStyles } from "../../base/getTypographyStyles";

const inputStyles = component._radiobutton;

const createInputStyles = () => {
  return css`
    :host {
      --control-outline-color: transparent;
    }

    .${unsafeCSS("kobber-radio-input" satisfies InputClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(inputStyles.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding: var(${unsafeCSS(inputStyles.padding)});

      ${inputVariantStyles()}
      ${inputStates()}
      
      &.${unsafeCSS("input--as-link" satisfies InputClassNames)} {
        text-decoration: none;
      }
    }

    .${unsafeCSS("label" satisfies InputLabelClassName)} {
      display: block;
      color: var(${unsafeCSS(inputStyles.text.color)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("label" satisfies InputLabelClassName, "ui", "medium"))}
    }
  `;
};

const inputVariantStyles = () => {
  const variantClasses = inputVariants.flatMap(variant => {
    const variantSelector = `&[data-variant="${variant}"]`;
    return css`
      ${unsafeCSS(variantSelector)} {
        ${inputStatesPerVariant(variant)}
      }
    `;
  });

  return unsafeCSS(variantClasses.join("\n"));
};

const inputStatesPerVariant = (variant: InputVariant) => {
  const outlineColor = inputStyles.indicator.outline.color[variant];
  return css`
    &.hover,
    :host(:hover) & {
      &:not(.disabled, [disabled]) {
        ::part(${unsafeCSS("control" satisfies InputControlPartNames)}) {
          --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        }
      }
    }

    &.active,
    :host(:active) & {
      &:not(.disabled, [disabled]) {
        ::part(${unsafeCSS("control" satisfies InputControlPartNames)}) {
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
      opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
      cursor: auto;
    }

    &:focus-visible,
    &.focus,
    :host(:focus) &,
    :host(:focus-visible) & {
      &:not(.disabled):not([disabled]) {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
          var(${unsafeCSS(universal.focus.border.color)});
        border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
      }
    }
  `;
};

export const radioInputStyles = createInputStyles();
