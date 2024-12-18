import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { css, unsafeCSS } from "lit";

export const accordionStyles = css`
  .accordion {
    border-radius: var(${unsafeCSS(component["wiki-list-item"].container.border.radius)});
  }

  .accordion-content {
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    max-height: 1000px;
  }

  .accordion-content[aria-hidden="true"] {
    max-height: 0;
  }
`;
