import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  inputVariants,
  InputClassNames,
  InputVariant,
  InputLabelClassName,
  InputControlPartNames,
} from "../Radio.core";

const inputStyles = component._radiobutton;
const textStyles = universal.text.ui;

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
      font-size: var(--font-size);
      font-family: var(--font-family);
      font-weight: var(--font-weight);
      font-style: var(--font-style);
      line-height: var(--line-height);

      ${typographyStyles()}
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

const typographyStyles = () => {
  return css`
    --font-size: var(${unsafeCSS(textStyles.size.label.medium)});
    --font-family: var(${unsafeCSS(textStyles["font-family"])});
    --font-weight: var(${unsafeCSS(textStyles.weight.label.medium)});
    --font-style: normal;
    --line-height: var(${unsafeCSS(textStyles["line-height"].label.medium["multi-line"])});
  `;
};

export const radioInputStyles = createInputStyles();
