import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  checkboxColorThemes,
  type CheckboxClassNames,
  type CheckboxColorTheme,
  type InputLabelClassNames,
  type NativeInputClassNames,
  type InputControlClassNames,
  type WrapperClassNames,
  type IconClassNames,
  type CheckboxState,
} from "../Checkbox.core";
import { getTypographyStyles } from "../../base/getTypographyStyles2";

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
      color: var(${unsafeCSS(universal["text-label"].text.color.brand["tone-a"])});


      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("text-label"))}
    }

    .${unsafeCSS("control" satisfies InputControlClassNames)} {
      width: var(${unsafeCSS(indicator.size.width)});
      height: var(${unsafeCSS(indicator.size.height)});
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(${unsafeCSS(checkbox.outline.border.radius)});
      &:not([checked]) {
        border: var(${unsafeCSS(indicator.border.width)}) solid var(--control-border-color);
        outline: var(${unsafeCSS(checkbox.outline.border.width)}) solid var(--control-outline-color);
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
  const outlineColor = checkbox.outline.border.color[colorTheme];
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
    &:has(> input:focus-visible) {
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
