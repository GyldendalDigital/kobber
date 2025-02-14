import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { buttonVariants, controlCheckedClassName, ButtonVariant, controlName } from "./Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createButtonStyles = () => {
  const button = component.input.selection["radio-indicator"];
  return css`
    :host {
      --control-outline-color: transparent;
      --transition-time: 0.5s;
      --icon-height: var(${unsafeCSS(button.shape.height)});
      --icon-width: var(${unsafeCSS(button.shape.width)});
    }

    .${unsafeCSS(controlName)} {
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
  const button = component.input.selection["radio-indicator"];
  const variableClasses = buttonVariants.flatMap(variant => {
    const variantClassName = `&.${variant}`;
    const borderColor = button.indicator.color[variant].fallback;
    return css`
      ${unsafeCSS(variantClassName)} {
        --control-border-color: var(${unsafeCSS(borderColor)});
      }
    `;
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const controlStyles = createButtonStyles();
