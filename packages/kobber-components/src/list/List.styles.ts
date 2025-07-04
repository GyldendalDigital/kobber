import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { listClassNames } from "./List.core";

const createListStyles = () => {
  return css`
    .${unsafeCSS(listClassNames("kobber-list"))} {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      list-style-type: none;
      gap: var(${unsafeCSS(component["docs-side-menu"].gap)});
      width: 100%;
      font-family: PP Mori;

      &[aria-orientation="horizontal"] {
        flex-direction: row;
      }
    }
  `;
};

export const listStyles = createListStyles();
