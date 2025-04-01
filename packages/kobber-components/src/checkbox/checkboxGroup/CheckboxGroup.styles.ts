import { css, unsafeCSS } from "lit";
import { GroupClassNames } from "../Checkbox.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createCheckboxGroupStyles = () => {
  return css`
    .${unsafeCSS("kobber-checkbox-group" satisfies GroupClassNames)} {
      border: none;
    }

    .${unsafeCSS("kobber-checkbox-group--horizontal" satisfies GroupClassNames)} .default-slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
      gap: 0.5em;
    }
  `;
};

export const checkboxGroupStyles = createCheckboxGroupStyles();
