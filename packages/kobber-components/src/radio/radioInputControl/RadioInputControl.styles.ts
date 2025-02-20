import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { inputVariants, InputControlClassNames } from "../Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createInputControlStyles = () => {
  const button = component.input.selection["radio-indicator"];
  return css`
    :host {
      --transition-time: 0.5s;
      --icon-height: var(${unsafeCSS(button.shape.height)});
      --icon-width: var(${unsafeCSS(button.shape.width)});
    }

    .${unsafeCSS("kobber-radio-input-control" satisfies InputControlClassNames)} {
      box-sizing: content-box; /* Avoid vertical "shrinking" effect. */
      margin-top: 0.45em; /* Emulate vertical justification, but not when multiple lines.  */
      width: var(--icon-width);
      height: var(--icon-height);
      border: var(${unsafeCSS(button.border.width)}) solid var(--control-border-color);
      outline: var(${unsafeCSS(button.outline.border.width)}) solid var(--control-outline-color);
      border-radius: 50%;
      transition: var(--transition-time) outline;

      ${buttonVariantStyles()}
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
        --control-border-color: var(${unsafeCSS(borderColor)});
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const controlStyles = createInputControlStyles();
