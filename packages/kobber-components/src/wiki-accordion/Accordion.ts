import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
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
export class List extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  expanded = false;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }

  toggle() {
    console.log(this.shadowRoot);
    const listElement = this.shadowRoot.querySelector("kobber-wiki-list");
    if (!listElement) {
      console.debug("no list found");
      return;
    }

    listElement.classList.toggle("open");
    console.log(listElement);
  }

  render() {
    return html` <style>
        ${this.themedStyles()}
      </style>
      <div class="accordion-container">
        /*bruk wiki item som toggle?*/
        <div class="accordion-toggle" @click=${this.toggle}>${this.title}</div>
        <kobber-wiki-list>
          <slot></slot>
        </kobber-wiki-list>
      </div>`;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.debug("theme context not found");
      return css``;
    }

    const component = tokens.component["wiki-side-menu"];

    return css`
      .accordion-container {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        gap: ${component.container.gap}px;
        padding: ${component.container.padding}px;
      }

      kobber-wiki-list {
        display: none;
      }
      kobber-wiki-list.open {
        display: block;
      }
    `;
  };
}
