import { CSSResultGroup, LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
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

  @property()
  defaultExpanded = false;

  @property()
  headingLevel: AccordionAriaHeadingLevel = 2;

  @query(".accordion-content")
  contentElement!: HTMLElement;

  toggle() {
    this.defaultExpanded = !this.defaultExpanded;
    this.contentElement.toggleAttribute("inert", !this.defaultExpanded);
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
            aria-expanded="${this.defaultExpanded}"
            aria-controls="content-${dateNowAsElementId}"
            tabindex="0"
            @keypress="${this.handleKeyDown}"
            @click="${this.toggle}"
            >${this.title}
            ${this.defaultExpanded
              ? html`<icon-chevron_up slot="icon" />`
              : html`<icon-chevron_down slot="icon" />`}</kobber-list-item
          >
        </div>

        <div
          id="content-${dateNowAsElementId}"
          class="${accordionClassNames("accordion-content")}"
          aria-hidden="${!this.defaultExpanded}"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}
