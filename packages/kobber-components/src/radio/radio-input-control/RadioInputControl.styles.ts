import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { type InputControlClassNames, inputColors } from "../Radio.core";

const indicatorStyles = component._radiobutton.indicator;
const inputColor = indicatorStyles.border.color;

const createInputControlStyles = () => {
  return css`
    .${unsafeCSS("kobber-radio-input-control" satisfies InputControlClassNames)} {
      --transition-time: 0.5s;
      --icon-wrapper-height: var(${unsafeCSS(indicatorStyles.height)});
      --icon-wrapper-width: var(${unsafeCSS(indicatorStyles.width)});
      --icon-height: var(${unsafeCSS(indicatorStyles.shape.height)});
      --icon-width: var(${unsafeCSS(indicatorStyles.shape.width)});
      margin-top: 0.3em; /* A top margin emulates label being vertically aligned with idle input control, but not when multiple lines. */
      width: var(--icon-wrapper-width);
      height: var(--icon-wrapper-height);
      color: var(--control-color);
      border: var(${unsafeCSS(indicatorStyles.border.width)}) solid;
      outline: var(${unsafeCSS(component._radiobutton.outline.border.width)}) solid var(--control-outline-color);
      border-radius: 50%;
      transition: var(--transition-time) outline;

      ${buttonColorStyles()}
    }
  `;
};

const buttonColorStyles = () => {
  const variableClasses = inputColors.flatMap(color => {
    const colorSelector = `&[data-color="${color}"]`;
    const borderColor = inputColor[color];
    return css`
      ${unsafeCSS(colorSelector)} {
        --control-color: var(${unsafeCSS(borderColor)});
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const radioInputControlStyles = createInputControlStyles();
