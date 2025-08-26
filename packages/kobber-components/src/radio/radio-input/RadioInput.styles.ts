import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  inputColorThemes,
  InputClassNames,
  InputColorTheme,
  InputLabelClassNames,
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

      ${inputColorThemeStyles()}
      ${inputStates()}
      
      &.${unsafeCSS("input--as-link" satisfies InputClassNames)} {
        text-decoration: none;
      }
    }

    .${unsafeCSS("label" satisfies InputLabelClassNames)} {
      display: block;
      color: var(${unsafeCSS(inputStyles.text.color)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("label" satisfies InputLabelClassNames, "ui", "medium"))}
    }
  `;
};

const inputColorThemeStyles = () => {
  const colorThemeClasses = inputColorThemes.flatMap(colorTheme => {
    const colorThemeSelector = `&[data-color-theme="${colorTheme}"]`;
    return css`
      ${unsafeCSS(colorThemeSelector)} {
        ${inputStatesPerColorTheme(colorTheme)}
      }
    `;
  });

  return unsafeCSS(colorThemeClasses.join("\n"));
};

const inputStatesPerColorTheme = (colorTheme: InputColorTheme) => {
  const outlineColor = inputStyles.indicator.outline.color[colorTheme];
  return css`
    :host(.hover) &,
    :host(:hover) & {
      &:not(.disabled, [disabled]) {
        ::part(${unsafeCSS("control" satisfies InputControlPartNames)}) {
          --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        }
      }
    }

    :host(.active) &,
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

    :host(.focus) &,
    :host(:focus) &,
    :host(.focus-visible) &,
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
