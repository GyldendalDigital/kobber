import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  checkboxVariants,
  CheckboxClassName,
  CheckboxVariant,
  InputLabelClassName,
  NativeInputClassName,
  InputControlClassName,
  WrapperClassName,
  IconClassName,
  CheckboxState,
} from "../Checkbox.core";
import { getTypographyStyles } from "../../base/getTypographyStyles";

const checkbox = component._checkbox;
const indicator = component._checkbox.indicator;

const createCheckboxStyles = () => {
  return css`
    :host {
      --control-outline-color: transparent;
      --icon-width: 1.2em;
      --icon-height: var(--icon-width);
    }

    .${unsafeCSS("wrapper" satisfies WrapperClassName)} {
      display: flex;
      flex-direction: column;
      gap: 0 var(${unsafeCSS(checkbox["container-right"].gap)});
    }

    .${unsafeCSS("kobber-checkbox-input" satisfies CheckboxClassName)} {
      display: flex;
      gap: var(${unsafeCSS(checkbox.gap)});
      justify-content: start;
      align-items: center;
      cursor: pointer;
      padding: var(${unsafeCSS(checkbox.padding)});

      ${variantStyles()}
      ${inputStates()}
    }

    .${unsafeCSS("label" satisfies InputLabelClassName)} {
      display: block;
      color: var(${unsafeCSS(checkbox.text.color)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("label" satisfies InputLabelClassName, "ui", "medium"))}
    }

    .${unsafeCSS("control" satisfies InputControlClassName)} {
      width: var(${unsafeCSS(indicator.width)});
      height: var(${unsafeCSS(indicator.height)});
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(${unsafeCSS(indicator.outline.radius)});
      &:not([checked]) {
        border: var(${unsafeCSS(indicator.border.width)}) solid var(--control-border-color);
        outline: var(${unsafeCSS(indicator.outline.width)}) solid var(--control-outline-color);
      }
      flex-shrink: 0;
      background-color: var(--control-background-color);
      transition: var(--transition-time) outline;
    }

    .${unsafeCSS("control--shape" satisfies IconClassName)} {
      display: flex;
      align-items: center;
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
  const outlineColor = indicator.outline.color[variant];
  const borderColor = indicator.border.color[variant];
  const bgColor = indicator.background.color[variant];
  return css`
    & {
      --control-border-color: var(
        ${unsafeCSS(borderColor.idle)}
      ); /* Must be first, to enable being overridden by non-idle styles. */
    }

    &.hover,
    :host(:hover) & {
      &:not(.disabled, [disabled]) {
        --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        --control-border-color: var(${unsafeCSS(borderColor.hover)});
      }
    }

    &.active,
    :host(:active) & {
      &:not(.disabled, [disabled]) {
        --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        --control-border-color: var(${unsafeCSS(borderColor.active)});
      }
    }

    &:focus-visible,
    &.focus,
    :host(:focus) &,
    :host(:focus-visible) & {
      &:not(.disabled, [disabled]) {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
          var(${unsafeCSS(universal.focus.border.color)});
        border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
        --control-border-color: var(${unsafeCSS(borderColor.focus)});
      }
    }

    :host([checked]) & {
      :host(.${unsafeCSS("idle" satisfies CheckboxState)}) & {
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
      opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
      cursor: auto;
    }
  `;
};

export const checkboxStyles = createCheckboxStyles();
