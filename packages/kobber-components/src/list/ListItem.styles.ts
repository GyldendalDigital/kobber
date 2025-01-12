import { component, global, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { css, unsafeCSS } from "lit";
import { listItemClassNames, listItemName } from "./ListItem.core";

const createListItemStyles = () => {
  const listItem = component["wiki-list-item"];
  return css`
    .${unsafeCSS(listItemClassNames(listItemName))} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      gap: ${unsafeCSS(listItem.container.gap)};
      padding: ${unsafeCSS(listItem.container.padding.bottom)};
      border-radius: ${unsafeCSS(listItem.container.border.radius)};
      color: ${unsafeCSS(listItem.text.color)};
      font-size: ${unsafeCSS(typography.ui["label large - single line"].fontSize)};

      &:focus-visible,
      &.focus {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(global.focus.border.width)}) var(${unsafeCSS(global.focus.color)});
      }

      &[disabled],
      &.disabled {
        pointer-events: none;
        opacity: 0.7;
      }

      &:hover,
      &.hover {
        background-color: ${unsafeCSS(listItem.background.color.hover)};
      }

      .text {
        align-self: center;
        line-height: calc(1rem + ${unsafeCSS(listItem["border-bottom"].padding.top)});
      }
    }

    &[active],
    &.active {
      .text {
        box-shadow: 0 ${unsafeCSS(listItem["border-bottom"].width.active)} 0 0
          ${unsafeCSS(listItem["border-bottom"].color.active)};
      }
    }

    --icon-width: 1rem;
    --icon-height: 1rem;
  `;
};

export const listItemStyles = createListItemStyles();
