import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../list/List";
import "../list/ListItem";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { themeContext } from "../utils/theme-context";

export const customElementName = "kobber-wiki-accordion";

/**
 * Show or hide list items
 */
@customElement(customElementName)
export class Accordion extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property()
  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.toggle();
    }
  }

  override render() {
    return html`
      <style>
        ${this.themedStyles()}
      </style>

      <div class="accordion" tabindex="0" @keypress="${this.handleKeyDown}">
        <kobber-wiki-list-item
          class="accordion-toggle-button"
          role="button"
          aria-expanded="${this.expanded}"
          aria-controls="content-${this.id}"
          @click="${this.toggle}"
          >${this.title}
          ${this.expanded
            ? html`<icon-chevron_up slot="icon" />`
            : html`<icon-chevron_down slot="icon" />`}</kobber-wiki-list-item
        >
        <div id="content-${this.id}" class="accordion-content" aria-hidden="${!this.expanded}">
          <slot></slot>
        </div>
      </div>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.debug("theme context not found");
      return css``;
    }

    const component = tokens.component["wiki-list-item"];

    return css`
      .accordion {
        --icon-width: 16px;
        border-radius: ${component.container.border.radius}px;
      }

      .accordion-toggle-button {
        width: unset;
      }

      .accordion-content {
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        max-height: 1000px;
      }

      .accordion-content[aria-hidden="true"] {
        max-height: 0;
      }

      .accordion:focus-visible {
        outline: none;
        box-shadow: 0 0 0 ${tokens.global.focus.border.width}px ${unsafeCSS(tokens.global.focus.color)};
      }
    `;
  };
}
