import { CSSResultGroup, LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";
import { customElement } from "../utils/customElementDecorator";
import "../list/List";
import "../list/ListItem";
import componentStyles from "../base/styles/component.styles";
import { accordionStyles } from "./Accordion.styles";
import { AccordionAriaHeadingLevel, accordionClassNames, accordionName, AccordionProps } from "./Accordion.core";

/**
 * Show or hide list items.
 *
 * @todo Add "exclusive" option which makes sure only one accordion is open at a time. See {@link https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/#using_details_name_to_create_exclusive_accordions|example}.
 */
@customElement(accordionName)
export class Accordion extends LitElement implements AccordionProps {
  static styles: CSSResultGroup = [componentStyles, accordionStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Number })
  headingLevel: AccordionAriaHeadingLevel = 2;

  @query(".accordion-content")
  contentElement!: HTMLElement;

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
      <div class="${accordionClassNames(accordionName)}" tabindex="-1">
        <div role="heading" aria-level="${this.headingLevel}">
          <kobber-list-item
            role="button"
            aria-expanded="${this.expanded}"
            aria-controls="content-${dateNowAsElementId}"
            tabindex="0"
            @keypress="${this.handleKeyDown}"
            @click="${this.toggle}"
            >${this.title}
            ${this.expanded
              ? html`<kobber-chevron_up slot="icon" />`
              : html`<kobber-chevron_down slot="icon" />`}</kobber-list-item
          >
        </div>

        <div
          id="content-${dateNowAsElementId}"
          class="${accordionClassNames("accordion-content")}"
          aria-hidden="${!this.expanded}"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}
