import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { css, unsafeCSS } from "lit";
import { accordionClassNames } from "./Accordion.core";

export const accordionStyles = css`
  .${unsafeCSS(accordionClassNames("kobber-accordion"))} {
    border-radius: var(${unsafeCSS(component["docs-list-item"].container.border.radius)});
    font-family: PP Mori;
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
