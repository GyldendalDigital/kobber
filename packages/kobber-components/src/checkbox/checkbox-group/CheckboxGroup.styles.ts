import { css, unsafeCSS } from "lit";
import { GroupClassNames } from "../Checkbox.core";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 */

const _checkbox = component._checkbox;
const checkbox = component.checkbox;

const createCheckboxGroupStyles = () => {
  return css`
    .${unsafeCSS("kobber-checkbox-group" satisfies GroupClassNames)} {
      display: flex;
      flex-direction: column;
      padding: 0;
      gap: var(${unsafeCSS(_checkbox["container-right"].gap)});
      border: none;
    }
    .default-slot {
      display: flex;
      flex-wrap: wrap;

      [data-orientation="vertical"] & {
        flex-direction: column;
        gap: var(${unsafeCSS(checkbox["input-container"].gap.list)});
        [data-type="hierarchical"] & {
          padding-left: var(${unsafeCSS(checkbox["inner-input-container"].padding.left)});
        }
      }
      [data-orientation="horisontal"] & {
        gap: var(${unsafeCSS(checkbox["input-container"].gap.row)});
      }
    }
    /* /TOOD */
  `;
};

export const checkboxGroupStyles = createCheckboxGroupStyles();
