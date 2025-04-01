import { css, unsafeCSS } from "lit";
import { GroupClassNames } from "../Checkbox.core";
import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createCheckboxGroupStyles = () => {
  return css`
    .${unsafeCSS("kobber-checkbox-group" satisfies GroupClassNames)} {
      display: flex;
      flex-direction: column;
      padding: 0;
      /* TOOD: Use real tokens when available: */
      gap: var(--checkbox-group-input-container-gap, 4px);
      border: none;
    }
    .default-slot {
      display: flex;
      flex-wrap: wrap;

      [data-orientation="vertical"] & {
        flex-direction: column;
        gap: var(--checkbox-group-inner-input-container-gap, 4px);
        [data-type="hierarchical"] & {
          padding-left: var(--checkbox-group-inner-input-container-padding-left, 16px);
        }
      }
      [data-orientation="horisontal"] & {
        gap: 0 16px;
      }
    }
    /* /TOOD */
  `;
};

export const checkboxGroupStyles = createCheckboxGroupStyles();
