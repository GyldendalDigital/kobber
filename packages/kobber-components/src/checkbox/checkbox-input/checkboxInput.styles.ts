import { css, unsafeCSS } from "lit";
import { component, typography, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  checkboxVariants,
  CheckboxClassNames,
  CheckboxVariant,
  InputLabelClassName,
  NativeInputClassName,
  InputControlClassName,
  WrapperClassName,
} from "../Checkbox.core";

const createCheckboxStyles = () => {
  const checkbox = component.checkbox;
  return css`
    :host {
      --control-outline-color: transparent;
      --icon-width: 1.2em;
      --icon-height: var(--icon-width);
    }
    .${unsafeCSS("kobber-checkbox-wrapper" satisfies WrapperClassName)} {
      display: flex;
      flex-direction: column;
      gap: var(--checkbox-inner-container-right-gap, 12px);
    }

    .${unsafeCSS("kobber-checkbox" satisfies CheckboxClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(checkbox.container.gap)});
      justify-content: start;
      align-items: center;
      cursor: pointer;
      padding: var(${unsafeCSS(checkbox.wrapper.padding)});

      & ~ * {
        padding-left: calc(var(${unsafeCSS(checkbox.container.gap)}) + var(${unsafeCSS(checkbox.checkbox.width)}));
      }

      ${typographyCheckbox()}
      ${variantStyles()}
      ${inputStates()}
    }
    .${unsafeCSS("kobber-checkbox__label" satisfies InputLabelClassName)} {
      display: block;
    }
    .${unsafeCSS("kobber-checkbox__control" satisfies InputControlClassName)} {
      width: var(${unsafeCSS(checkbox.checkbox.width)});
      height: var(${unsafeCSS(checkbox.checkbox.height)});
      border-radius: var(${unsafeCSS(checkbox.checkbox.outline.radius)});
      &:not([checked]) {
        border: var(${unsafeCSS(checkbox.checkbox.border.width)}) solid var(--control-border-color);
        outline: var(${unsafeCSS(checkbox.checkbox.outline.width)}) solid var(--control-outline-color);
      }
      flex-shrink: 0;
      background-color: var(--control-background-color);
      transition: var(--transition-time) outline;
    }
    .${unsafeCSS("native-input" satisfies NativeInputClassName)} {
      pointer-events: none;
    }
  `;
};

const variantStyles = () => {
  const variants = checkboxVariants.flatMap(variant => {
    const variantSelector = `&[data-variant="${variant}"]`;
    return css`
      ${unsafeCSS(variantSelector)} {
        ${statesPerVariant(variant)}
      }
    `;
  });

  return unsafeCSS(variants.join("\n"));
};

const statesPerVariant = (variant: CheckboxVariant) => {
  const outlineColor = component.checkbox.checkbox.outline.color[variant];
  const bgColor = component.checkbox.checkbox.background.color[variant];
  return css`
    & {
      --control-border-color: var(
        ${unsafeCSS(component.checkbox.checkbox.border.color[variant].idle)}
      ); /* Must be first, to enable being overridden by non-idle styles. */
    }

    &.hover,
    :host(:hover) & {
      &:not(.disabled, [disabled]) {
        --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        --control-border-color: var(${unsafeCSS(component.checkbox.checkbox.border.color[variant].hover)});
      }
    }

    &.active,
    :host(:active) & {
      &:not(.disabled, [disabled]) {
        --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        --control-border-color: var(${unsafeCSS(component.checkbox.checkbox.border.color[variant].active)});
      }
    }

    :host([checked]) & {
      :host(.${unsafeCSS("idle" satisfies CheckboxClassNames)}) & {
        --control-background-color: var(${unsafeCSS(bgColor.idle)});
      }
      :host([disabled]) & {
        --control-background-color: var(${unsafeCSS(bgColor.disabled)});
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
      &:not(.disabled, [disabled]) {
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
