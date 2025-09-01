import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { accordionClassNames } from "./Accordion.core";

export const accordionStyles = css`
  .${unsafeCSS(accordionClassNames("kobber-accordion"))} {
    border-radius: var(${unsafeCSS(component["menu-item"].border.radius)});
  }

  .${unsafeCSS(accordionClassNames("accordion-content"))} {
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    max-height: 9000px;

    &[aria-hidden="true"] {
      max-height: 0;
    }
  }
`;
