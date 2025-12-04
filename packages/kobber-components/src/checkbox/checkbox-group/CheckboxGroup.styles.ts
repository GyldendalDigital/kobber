import { css, unsafeCSS } from "lit";
import {
  checkboxInnerTokens,
  checkboxTokens,
  type GroupClassNames,
  type Orientation,
} from "../Checkbox.core";

const createCheckboxGroupStyles = () => {
  return css`
    .${unsafeCSS("kobber-checkbox-group" satisfies GroupClassNames)} {
      display: flex;
      flex-direction: column;
      padding: 0;
      gap: var(${unsafeCSS(checkboxTokens["container-right"].gap)});
      border: none;
    }
    .default-slot {
      display: flex;
      flex-wrap: wrap;

      
      [data-orientation="${unsafeCSS("vertical" satisfies Orientation)}"] & {
        flex-direction: column;
        gap: var(${unsafeCSS(checkboxInnerTokens["input-container"].gap.list)});
        [data-type="hierarchical"] & {
          padding-left: var(${unsafeCSS(checkboxInnerTokens["inner-input-container"].padding.left)});
        }
      }
      [data-orientation="${unsafeCSS("horizontal" satisfies Orientation)}"] & {
        gap: var(${unsafeCSS(checkboxInnerTokens["input-container"].gap.row)});
      }
    }
  `;
};

export const checkboxGroupStyles = createCheckboxGroupStyles();
