import { css, unsafeCSS } from "lit";
import { component, typography, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  checkboxVariants,
  CheckboxClassNames,
  CheckboxVariant,
  CheckboxLabelClassNames,
  CheckboxInputClassNames,
  CheckboxControlClassNames,
} from "./Checkbox.core";

const createCheckboxStyles = () => {
  const checkbox = component.checkbox;
  return css`
    :host {
      --control-outline-color: transparent;
    }

    .${unsafeCSS("kobber-checkbox" satisfies CheckboxClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(checkbox.container.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding: calc(var(${unsafeCSS(checkbox.wrapper.padding)}) + 0.15em) var(${unsafeCSS(checkbox.wrapper.padding)})
        var(${unsafeCSS(checkbox.wrapper.padding)}); /* A larger top padding emulates label being vertically aligned with idle input control, but not when multiple lines. */

      ${typographyCheckbox()}
      ${variantStyles()}
      ${inputStates()}
    }
    .${unsafeCSS("kobber-checkbox__label" satisfies CheckboxLabelClassNames)} {
      display: block;
    }
    .${unsafeCSS("kobber-checkbox__control" satisfies CheckboxControlClassNames)} {
      width: var(${unsafeCSS(checkbox.checkbox.width)});
      height: var(${unsafeCSS(checkbox.checkbox.height)});
      border-radius: var(${unsafeCSS(checkbox.checkbox.outline.radius)});
      border: var(${unsafeCSS(checkbox.checkbox.border.width)}) solid
        var(${unsafeCSS(checkbox.checkbox.border.color.success.idle)}); /* TODO: Variant? */
      flex-shrink: 0;
    }
    .${unsafeCSS("native-input" satisfies CheckboxInputClassNames)} {
      pointer-events: none;
    }
  `;
};

const variantStyles = () => {
  const variantClasses = checkboxVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    return css`
      ${unsafeCSS(variantClassName)} {
        ${statesPerVariant(variant)}
      }
    `;
  });

  return unsafeCSS(variantClasses.join("\n"));
};

const statesPerVariant = (variant: CheckboxVariant) => {
  const outlineColor = component.checkbox.checkbox.outline.color[variant];
  return css`
    &.hover,
    :host(:hover) & {
      &:not(.disabled):not([disabled]) {
        --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
      }
    }

    &.active,
    :host(:active) & {
      &:not(.disabled):not([disabled]) {
        --control-outline-color: var(${unsafeCSS(outlineColor.active)});
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

const typographyCheckbox = () => {
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

export const checkboxStyles = createCheckboxStyles();
