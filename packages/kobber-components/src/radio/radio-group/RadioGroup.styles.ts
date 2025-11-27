import { css, unsafeCSS } from "lit";
import type { GroupClassNames, Orientation } from "../Radio.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */
const createRadioGroupStyles = () => {
  return css`
    .${unsafeCSS("kobber-radio-group" satisfies GroupClassNames)} {
      border: none;
    }

    [data-orientation="${unsafeCSS("horizontal" satisfies Orientation)}"] .default-slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
      gap: 0.5em;
    }
  `;
};

export const radioGroupStyles = createRadioGroupStyles();
