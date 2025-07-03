import { css, unsafeCSS } from "lit";
import { component, typography, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  inputVariants,
  InputClassNames,
  InputVariant,
  InputLabelClassNames,
  InputControlPartNames,
} from "../Radio.core";

const createInputStyles = () => {
  const input = component.radiobutton;
  return css`
    :host {
      --control-outline-color: transparent;
    }

    .${unsafeCSS("kobber-radio-input" satisfies InputClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(input.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding: var(${unsafeCSS(input.padding)});

      font-size: var(--font-size);
      font-family: var(--font-family);
      font-weight: var(--font-weight);
      font-style: var(--font-style);
      line-height: var(--line-height);

      ${typographyInput()}
      ${inputVariantStyles()}
      ${inputStates()}
      
      &.${unsafeCSS("input--as-link" satisfies InputClassNames)} {
        text-decoration: none;
      }
    }
    .${unsafeCSS("label" satisfies InputLabelClassNames)} {
      display: block;
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
  const outlineColor = component.radiobutton.indicator.outline.color[variant];
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

const typographyInput = () => {
  const textStyles = universal.text.ui;

  return css`
    --font-size: var(${unsafeCSS(textStyles.size.label.medium)});
    --font-family: var(${unsafeCSS(textStyles["font-family"])});
    --font-weight: var(${unsafeCSS(textStyles.weight.label.medium)});
    --font-style: normal;
    --line-height: var(${unsafeCSS(textStyles["line-height"].label.medium["multi-line"])});
  `;
};

export const radioInputStyles = createInputStyles();
