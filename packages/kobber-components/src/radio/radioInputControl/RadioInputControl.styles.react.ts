import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { inputVariants, InputControlClassNames, InputControlPartNames } from "../Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createInputControlStyles = () => {
  const button = component.radiobutton["radio-circle"];
  return css`
    .${unsafeCSS("kobber-radio-input-control" satisfies InputControlClassNames)} {
      --transition-time: 0.5s;
      --icon-wrapper-height: var(${unsafeCSS(button.height)});
      --icon-wrapper-width: var(${unsafeCSS(button.width)});
      --icon-height: var(${unsafeCSS(button.shape.height)});
      --icon-width: var(${unsafeCSS(button.shape.width)});
      margin-top: 0.1em; /* A top margin emulates label being vertically aligned with idle input control, but not when multiple lines. */
      width: var(--icon-wrapper-width);
      height: var(--icon-wrapper-height);
      color: var(--control-color);
      border: var(${unsafeCSS(button.border.width)}) solid;
      outline: var(${unsafeCSS(button.outline.border.width)}) solid var(--control-outline-color);
      border-radius: 50%;
      transition: var(--transition-time) outline;

      ${buttonVariantStyles()}
    }
  `;
};

const buttonVariantStyles = () => {
  const inputColor = component.radiobutton["radio-circle"].border.color;
  const variableClasses = inputVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    const borderColor = inputColor[variant];
    return css`
      ${unsafeCSS(variantClassName)} {
        --control-color: var(${unsafeCSS(borderColor)});
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const radioInputControlStyles = createInputControlStyles();
