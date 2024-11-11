import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import "../wiki-list/List";
import "../wiki-list/ListItem";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { themeContext } from "../utils/theme-context";
import KobberElement from "../base/kobber-element";

export const customElementName = "kobber-wiki-accordion";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Show or hide list items.
 *
 * @todo Add "exclusive" option which makes sure only one accordion is open at a time. See {@link https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/#using_details_name_to_create_exclusive_accordions|example}.
 */
@customElement(customElementName)
export class Accordion extends KobberElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property()
  expanded = false;

  @property()
  headingLevel: HeadingLevel = 2;

  @query(".accordion-content")
  contentElement!: any; // HTMLElement; // TODO: fix SSR issue

  toggle() {
    this.expanded = !this.expanded;
    this.contentElement.toggleAttribute("inert", !this.expanded);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.toggle();
    }
  }

  override render() {
    const dateNowAsElementId = new Date().toISOString();
    return html`
      <style>
        ${this.themedStyles()}
      </style>

      <div class="accordion" tabindex="-1">
        <div role="heading" aria-level="${this.headingLevel}">
          <kobber-wiki-list-item
            class="accordion-toggle-button"
            role="button"
            aria-expanded="${this.expanded}"
            aria-controls="content-${dateNowAsElementId}"
            tabindex="0"
            @keypress="${this.handleKeyDown}"
            @click="${this.toggle}"
            >${this.title}
            ${this.expanded
              ? html`<icon-chevron_up slot="icon" />`
              : html`<icon-chevron_down slot="icon" />`}</kobber-wiki-list-item
          >
        </div>

        <div id="content-${dateNowAsElementId}" class="accordion-content" aria-hidden="${!this.expanded}">
          <slot></slot>
        </div>
      </div>
    `;
  }

  themedStyles = () => {
    const component = this.tokens().component["wiki-list-item"];

    return css`
      .accordion {
        border-radius: ${component.container.border.radius}px;
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
  };
}
