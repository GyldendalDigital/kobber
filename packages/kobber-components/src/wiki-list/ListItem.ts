import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { themeContext } from "../utils/theme-context";

export const customElementName = "kobber-wiki-list-item";

/**
 * Used as a child of the `kobber-list` component.
 *
 * Inherits the `direction` attribute from the parent.
 *
 * @todo handle image
 * @todo handle icon
 */
@customElement(customElementName)
export class ListItem extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "menuitem");
    this.setAttribute("direction", this.parentElement?.getAttribute("direction") ?? "vertical");
  }

  render() {
    return html` <style>
        ${this.themedStyles()}
      </style>
      <span class="text">
        <slot></slot>
      </span>
      <slot name="icon"></slot>`;
  }

  themedStyles() {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("should never occur");
      return css``;
    }

    const component = tokens.component["wiki-list-item"];
    const typography = tokens.typography.ui;
    const temporaryMinWidth = 200;

    return css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        gap: ${component.container.gap}px;
        padding: ${component.container.padding.bottom}px;
        border-radius: ${component.container.border.radius}px;
        color: ${unsafeCSS(component.text.color)};
        font-size: ${typography["label large - single line"].fontSize}px;
        min-width: ${temporaryMinWidth}px;

        .text {
          padding-bottom: ${component["border-bottom"].padding.top}px;
        }
      }

      :host(:hover) {
        background-color: ${unsafeCSS(component.background.color.hover)};
      }

      :host(:active) {
        .text {
          box-shadow: 0 ${component["border-bottom"].width.active}px 0 0
            ${unsafeCSS(component["border-bottom"].color.active)};
        }
      }

      :host(:focus-visible) {
        outline: none;
        box-shadow: 0 0 0 ${tokens.global.focus.border.width}px ${unsafeCSS(tokens.global.focus.color)};
      }

      ::slotted([slot="icon"]) {
        color: ${unsafeCSS(component.icon.color)};
        --icon-width: 16px;

        /* To account for text box bottom padding */
        padding-bottom: ${component["border-bottom"].padding.top}px;
      }
    `;
  }
}

/*
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
         aspect-ratio: 1 / 1; 
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
*/
