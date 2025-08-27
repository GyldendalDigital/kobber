import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  checkboxColorThemes,
  CheckboxClassNames,
  CheckboxColorTheme,
  InputLabelClassNames,
  NativeInputClassNames,
  InputControlClassNames,
  WrapperClassNames,
  IconClassNames,
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

    .${unsafeCSS("wrapper" satisfies WrapperClassNames)} {
      display: flex;
      flex-direction: column;
      gap: 0 var(${unsafeCSS(checkbox["container-right"].gap)});
    }

    .${unsafeCSS("kobber-checkbox-input" satisfies CheckboxClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(checkbox.gap)});
      justify-content: start;
      align-items: center;
      cursor: pointer;
      padding: var(${unsafeCSS(checkbox.padding)});

      ${colorThemeStyles()}
      ${inputStates()}
    }

    .${unsafeCSS("label" satisfies InputLabelClassNames)} {
      display: block;
      color: var(${unsafeCSS(checkbox.text.color)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("label" satisfies InputLabelClassNames, "ui", "medium"))}
    }

    .${unsafeCSS("control" satisfies InputControlClassNames)} {
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

    .${unsafeCSS("control--shape" satisfies IconClassNames)} {
      display: flex;
      align-items: center;
    }

    .${unsafeCSS("native-input" satisfies NativeInputClassNames)} {
      pointer-events: none;
    }
  `;
};

const colorThemeStyles = () => {
  const colorThemes = checkboxColorThemes.flatMap(colorTheme => {
    return css`
      ${unsafeCSS(`&[data-color-theme="${String(colorTheme)}"]`)} {
        ${statesPerColorTheme(colorTheme)}
      }
    `;
  });

  return unsafeCSS(colorThemes.join("\n"));
};

const statesPerColorTheme = (colorTheme: CheckboxColorTheme) => {
  const outlineColor = indicator.outline.color[colorTheme];
  const borderColor = indicator.border.color[colorTheme];
  const bgColor = indicator.background.color[colorTheme];
  return css`
    & {
      --control-border-color: var(
        ${unsafeCSS(borderColor.idle)}
      ); /* Must be first, to enable being overridden by non-idle styles. */
    }

    :host(.hover) &,
    :host(:hover) & {
      :host(:not(.disabled, [disabled])) & {
        --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        --control-border-color: var(${unsafeCSS(borderColor.hover)});
      }
    }

    :host(.active) &,
    :host(:active) & {
      :host(:not(.disabled, [disabled])) & {
        --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        --control-border-color: var(${unsafeCSS(borderColor.active)});
      }
    }

    :host(.focus) &,
    :host(:focus) &,
    :host(.focus-visible) & :host(:focus-visible) & {
      :host(:not(.disabled, [disabled])) & {
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
