import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { inputVariants, InputControlClassNames, InputControlPartNames } from "../Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createInputControlStyles = () => {
  const button = component.input.selection["radio-indicator"];
  return css`
    .${unsafeCSS("kobber-radio-input-control" satisfies InputControlClassNames)} {
      --transition-time: 0.5s;
      --icon-height: var(${unsafeCSS(button.shape.height)});
      --icon-width: var(${unsafeCSS(button.shape.width)});
      box-sizing: content-box; /* Avoid vertical "shrinking" effect. */
      margin-top: 0.2em; /* Emulate vertical justification, but not when multiple lines.  */
      width: var(--icon-width);
      height: var(--icon-height);
      color: var(--control-color);
      border: var(${unsafeCSS(button.border.width)}) solid;
      outline: var(${unsafeCSS(button.outline.border.width)}) solid var(--control-outline-color);
      border-radius: 50%;
      transition: var(--transition-time) outline;

      ${buttonVariantStyles()}
      &.${unsafeCSS("kobber-radio-input__control--checked" satisfies InputControlPartNames)} {
        background-color: black;
      }
    }
  `;
};

const buttonVariantStyles = () => {
  const inputColor = component.input.selection["radio-indicator"].indicator.color;
  const variableClasses = inputVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    const borderColor = inputColor[variant].fallback;
    return css`
      ${unsafeCSS(variantClassName)} {
        --control-color: var(${unsafeCSS(borderColor)});
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const radioInputControlStyles = createInputControlStyles();
