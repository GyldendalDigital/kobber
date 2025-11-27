import { css, unsafeCSS } from "lit";
import type { NestedListSlotNames } from "../text-list-element/TextListElement.core";
import {
  type TextListClassNames,
  textBodyTokens,
  textListColors,
  textListColorVariants,
  textListOrderedStyleTypes,
  textListTokens,
  textListUnorderedStyleTypes,
} from "./TextList.core";

const createTextListStyles = () => css`
.${unsafeCSS("kobber-text-list" satisfies TextListClassNames)} {
  display: flex;
  flex-direction: column;
  gap: var(--list-gap);

  counter-reset: var(--list-counter);
  
  --list-counter: list;


  :host(:not([slot="${unsafeCSS("nested" satisfies NestedListSlotNames)}"])) & {
    color: var(--text-list-color);
    ${colorVariants()};
  }

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
    &[data-size="large"] {
      --list-gap: var(${unsafeCSS(textListTokens.gap.ordered.large)});
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
    &[data-size="large"] {
      --list-gap: var(${unsafeCSS(textListTokens.gap.unordered.large)});
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

const colorVariants = () =>
  unsafeCSS(
    textListColors
      .flatMap(textListColor =>
        textListColorVariants.flatMap(textListColorVariant => {
          return `
              &[data-color="${textListColor}"][data-color-variant="${textListColorVariant}"] {
                --text-list-color: var(${textBodyTokens.text.color[textListColor][textListColorVariant]});
              }
          `;
        }),
      )
      .join("\n"),
  );

export const textListStyles = createTextListStyles();
