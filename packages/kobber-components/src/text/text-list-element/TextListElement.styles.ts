import { css, unsafeCSS } from "lit";
import { textListTokens } from "../text-list/TextList.core";
import type {
  TextListElementBodyClassNames,
  TextListElementClassNames,
} from "./TextListElement.core";

const createTextListElementStyles = () => css`
.${unsafeCSS("kobber-text-list-element" satisfies TextListElementClassNames)} {

  display: flex;
  align-items: var(--list-item-alignment);
  gap: 0.5em;

  &::before {
    content: counter(var(--list-counter), var(--list-style)) var(--list-style-suffix);
    counter-increment: var(--list-counter);
  }

  .${unsafeCSS("body" satisfies TextListElementBodyClassNames)} {
    display: flex;
    flex-direction: column;
    [data-has-nested-list="true"] & {
      gap: var(${unsafeCSS(textListTokens["list-block"].gap)});
    }
  }
}`;

export const textListElementStyles = createTextListElementStyles();
