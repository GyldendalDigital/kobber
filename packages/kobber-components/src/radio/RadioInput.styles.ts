import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { buttonVariants, inputName, ButtonClassNames, labelClassName, ButtonVariant } from "./Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createButtonStyles = () => {
  const button = component.input.selection["radio-indicator"];
  return css`
    :host {
      --control-outline-color: transparent;
      --transition-time: 0.5s;
      --icon-height: var(${unsafeCSS(button.shape.height)});
      --icon-width: var(${unsafeCSS(button.shape.width)});
    }

    .${unsafeCSS(inputName)} {
      display: flex;
      gap: var(${unsafeCSS(component.input.selection.container.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding-inline: var(${unsafeCSS(component.input.selection.wrapper.padding)});

      ${typographyButton()}
      ${buttonVariantStyles()}
      ${buttonStates()}
      
      &.${unsafeCSS("link" satisfies ButtonClassNames)} {
        text-decoration: none;
      }
    }
    .${unsafeCSS(labelClassName)} {
      display: block;
    }
  `;
};

const buttonVariantStyles = () => {
  const variableClasses = buttonVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    return css`
      ${unsafeCSS(variantClassName)} {
        ${buttonStatesPerVariant(variant)}
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

const buttonStatesPerVariant = (variant: ButtonVariant) => {
  const button = component.input.selection["radio-indicator"];
  const outlineColor = button.outline.color[variant];
  return css`
    &.hover,
    :host(:hover) & {
      &:not(.disabled):not([disabled]) {
        ::part(control) {
          --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        }
      }
    }

    &.active,
    :host(:active) & {
      &:not(.disabled):not([disabled]) {
        ::part(control) {
          --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        }
      }
    }
  `;
};

const buttonStates = () => {
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

export const buttonStyles = createButtonStyles();
