import { css, unsafeCSS } from "lit";
import { GroupClassNames } from "../Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createRadioGroupStyles = () => {
  return css`
    .${unsafeCSS("kobber-radio-group" satisfies GroupClassNames)} {
      border: none;
    }

    .${unsafeCSS("kobber-radio-group--horizontal" satisfies GroupClassNames)} .default-slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(7em, 1fr));
      gap: 0.5em;
    }
  `;
};

export const radioGroupStyles = createRadioGroupStyles();
