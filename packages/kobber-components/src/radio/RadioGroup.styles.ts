import { css, unsafeCSS } from "lit";
import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  buttonVariants,
  inputName,
  ButtonClassNames,
  controlClassName,
  labelClassName,
  controlCheckedClassName,
  ButtonVariant,
  buttonGroupName,
  horizontalClassName,
} from "./Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createButtonGroupStyles = () => {
  return css`
    :host {
      --sl-input-required-content: "";
      --sl-input-required-content-offset: 2em;
    }

    .${unsafeCSS(buttonGroupName)} {
      border: none;
    }

    .${unsafeCSS(horizontalClassName)} .default-slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(7em, 1fr));
      gap: 0.5em;
    }
  `;
};

export const buttonGroupStyles = createButtonGroupStyles();
