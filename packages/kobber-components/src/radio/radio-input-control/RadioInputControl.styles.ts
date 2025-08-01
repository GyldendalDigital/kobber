import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { inputColorThemes, InputControlClassNames } from "../Radio.core";

const indicatorStyles = component._radiobutton.indicator;
const inputColor = indicatorStyles.border.color;

const createInputControlStyles = () => {
  return css`
    :host {
      --transition-time: 0.5s;
      --icon-wrapper-height: var(${unsafeCSS(indicatorStyles.height)});
      --icon-wrapper-width: var(${unsafeCSS(indicatorStyles.width)});
      --icon-height: var(${unsafeCSS(indicatorStyles.shape.height)});
      --icon-width: var(${unsafeCSS(indicatorStyles.shape.width)});
    }

    .${unsafeCSS("kobber-radio-input-control" satisfies InputControlClassNames)} {
      margin-top: 0.3em; /* A top margin emulates label being vertically aligned with idle input control, but not when multiple lines. */
      width: var(--icon-wrapper-width);
      height: var(--icon-wrapper-height);
      color: var(--control-color);
      border: var(${unsafeCSS(indicatorStyles.border.width)}) solid;
      outline: var(${unsafeCSS(indicatorStyles.outline.border.width)}) solid var(--control-outline-color);
      border-radius: 50%;
      transition: var(--transition-time) outline;

      ${buttonColorThemeStyles()}
    }
  `;
};

const buttonColorThemeStyles = () => {
  const variableClasses = inputColorThemes.flatMap(colorTheme => {
    const colorThemeSelector = `&[data-color-theme="${colorTheme}"]`;
    const borderColor = inputColor[colorTheme];
    return css`
      ${unsafeCSS(colorThemeSelector)} {
        --control-color: var(${unsafeCSS(borderColor)});
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const radioInputControlStyles = createInputControlStyles();
