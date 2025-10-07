import { css, unsafeCSS } from "lit";
import {
  textListOrderedStyleTypes,
  textListTokens,
  textListUnorderedStyleTypes,
  type TextListClassNames,
} from "./TextList.core";
import type { NestedListSlotNames } from "../text-list-element/TextListElement.core";

const createTextListStyles = () => css`
.${unsafeCSS("kobber-text-list" satisfies TextListClassNames)} {
  display: flex;
  flex-direction: column;
  gap: var(--list-gap);
  counter-reset: var(--list-counter);
  
  --list-counter: list;

  :host([slot="${unsafeCSS("nested" satisfies NestedListSlotNames)}"]) & {
    --list-counter: nested-list;
  }
  
  &[data-type="ordered"] {
    --list-item-alignment: baseline;
    --list-style-suffix: ".";
    --list-style: ${unsafeCSS(getListStyle("ordered", 0))};
    :host([slot="${unsafeCSS("nested" satisfies NestedListSlotNames)}"]) & {
      --list-style: ${unsafeCSS(getListStyle("ordered", 1))};
    }

    &[data-size="medium"] {
      --list-gap: var(${unsafeCSS(textListTokens.gap.ordered.medium)});
    }
    &[data-size="small"] {
      --list-gap: var(${unsafeCSS(textListTokens.gap.ordered.small)});
    }
  }

  &[data-type="unordered"] {
    --list-item-alignment: start;
    --list-style-suffix: "";
    --list-style: ${unsafeCSS(getListStyle("unordered", 0))};
    :host([slot="${unsafeCSS("nested" satisfies NestedListSlotNames)}"]) & {
      --list-style: ${unsafeCSS(getListStyle("unordered", 1))};
    }

    &[data-size="medium"] {
      --list-gap: var(${unsafeCSS(textListTokens.gap.unordered.medium)});
    }
    &[data-size="small"] {
      --list-gap: var(${unsafeCSS(textListTokens.gap.unordered.small)});
    }
  }
}
`;

const getListStyle = (style: "ordered" | "unordered", nestingLevel: number) => {
  const getStyleTypesArray = (styleTypes: "ordered" | "unordered") => {
    if (styleTypes === "ordered") {
      return textListOrderedStyleTypes;
    } else {
      return textListUnorderedStyleTypes;
    }
  };

  const getCurrentOrPreviousElement = (array: string[], index: number) => {
    const previousNumber = index - 1;
    return array[index] !== undefined ? array[index] : array[previousNumber];
  };

  return getCurrentOrPreviousElement(getStyleTypesArray(style), nestingLevel);
};

export const textListStyles = createTextListStyles();
