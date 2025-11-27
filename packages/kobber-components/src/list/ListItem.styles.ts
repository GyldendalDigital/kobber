import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { listItemClassNames, listItemName } from "./ListItem.core";

const createListItemStyles = () => {
  const listItem = component["menu-item"];
  return css`
    .${unsafeCSS(listItemClassNames(listItemName))} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      gap: var(${unsafeCSS(listItem.gap)});
      padding-block: var(${unsafeCSS(listItem.padding.block)});
      padding-inline: var(${unsafeCSS(listItem.padding.inline)});
      border-radius: var(${unsafeCSS(listItem.border.radius)});
      color: var(${unsafeCSS(universal["text-label"].text.color.brand["tone-a"])});
      font-size: var(${unsafeCSS(universal["text-label"].text.size.large)});

      &:focus-visible,
      &.focus {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
          var(${unsafeCSS(universal.focus.border.color)});
      }

      &[aria-disabled="true"],
      &.disabled {
        pointer-events: none;
        opacity: 0.7;
      }

      &:hover,
      &.hover {
        background-color: var(${unsafeCSS(listItem.background.color.hover)});
      }

      .text {
        align-self: center;
      }

      &[data-active="true"],
      &.active {
        .text {
          box-shadow: 0 var(${unsafeCSS(listItem["text-container"].border.width.active)}) 0 0
            var(${unsafeCSS(listItem["text-container"].border.color.active)});
        }
      }

      --icon-width: 1rem;
      --icon-height: 1rem;

      svg {
        display: inline;
        width: var(--icon-width);
        height: var(--icon-height);
      }
    }
  `;
};

export const listItemStyles = createListItemStyles();
