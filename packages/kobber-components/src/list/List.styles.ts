import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { listName } from "./List.core";

const createListStyles = () => {
  return css`
    .${unsafeCSS(listName)} {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      list-style-type: none;
      gap: var(${unsafeCSS(component.list.gap)});
      width: 100%;

      &[aria-orientation="horizontal"] {
        flex-direction: row;
      }
    }
  `;
};

export const listStyles = createListStyles();
