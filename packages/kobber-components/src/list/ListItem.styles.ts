import { css } from "lit";

export const listItemStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--kobber-component-list-listitem-gap);
    color: var(--kobber-component-list-listitem-color-foreground);
    background-color: var(--kobber-component-list-listitem-color-background-default);

    &:focus,
    &:active {
      background-color: var(--kobber-component-list-listitem-color-background-selected);
    }
  }

  :host(:hover) {
    background-color: var(--kobber-component-list-listitem-color-background-hover);
  }

  :host(:focus, :active) {
    background-color: var(--kobber-component-list-listitem-color-background-selected);
  }

  :host([direction="vertical"]) {
    padding: var(--kobber-component-list-listitem-medium-container-padding-block)
      var(--kobber-component-list-listitem-medium-container-padding-inline);
    width: var(--kobber-component-list-listitem-medium-container-size-width);
    height: var(--kobber-component-list-listitem-medium-container-size-height);
  }

  :host([direction="vertical"]:first-child) {
    border-radius: var(--kobber-component-list-listcontainer-border-radius)
      var(--kobber-component-list-listcontainer-border-radius) 0 0;
  }

  :host([direction="vertical"]:last-child) {
    border-radius: 0 0 var(--kobber-component-list-listcontainer-border-radius)
      var(--kobber-component-list-listcontainer-border-radius);
  }

  :host([direction="horizontal"]) {
    padding: var(--kobber-component-list-listitem-large-container-padding);
    width: var(--kobber-component-list-listitem-large-container-size-width);
    height: var(--kobber-component-list-listitem-large-container-size-height);
    // remove height and use aspect-ratio?
    /* aspect-ratio: 1 / 1; */
  }

  :host([direction="horizontal"]:first-child) {
    border-radius: var(--kobber-component-list-listcontainer-border-radius) 0 0
      var(--kobber-component-list-listcontainer-border-radius);
  }

  :host([direction="horizontal"]:last-child) {
    border-radius: 0 var(--kobber-component-list-listcontainer-border-radius)
      var(--kobber-component-list-listcontainer-border-radius) 0;
  }

  :host([direction]:only-child) {
    border-radius: var(--kobber-component-list-listcontainer-border-radius);
  }

  slot {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;
