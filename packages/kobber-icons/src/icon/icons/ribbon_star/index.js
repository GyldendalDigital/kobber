export class RibbonStar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") ||
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#eoa)"><path fill="currentColor" d="M15 20a.623.623 0 0 1-.53-.292l-3.052-4.844c-.937.18-1.9.18-2.836 0l-3.054 4.844a.621.621 0 0 1-.922.151.628.628 0 0 1-.198-.287l-1.136-3.405-2.77-.555a.629.629 0 0 1-.492-.718.63.63 0 0 1 .13-.29l3.123-3.815A7.507 7.507 0 0 1 2.5 7.5C2.5 3.364 5.864 0 10 0s7.5 3.364 7.5 7.5a7.512 7.512 0 0 1-.762 3.29l3.121 3.814a.627.627 0 0 1-.361 1.009l-2.77.554-1.135 3.405A.625.625 0 0 1 15 20Zm-.175-2.075.833-2.498a.625.625 0 0 1 .47-.415l2.105-.42-2.183-2.667a7.552 7.552 0 0 1-3.38 2.583l2.155 3.417ZM3.873 15.012a.624.624 0 0 1 .47.415l.832 2.497 2.153-3.417a7.554 7.554 0 0 1-3.38-2.583l-2.182 2.667 2.107.421ZM10 1.25A6.257 6.257 0 0 0 3.75 7.5 6.258 6.258 0 0 0 10 13.75a6.258 6.258 0 0 0 6.25-6.25A6.258 6.258 0 0 0 10 1.25Z"></path><path fill="currentColor" d="M7.577 11.433a1.106 1.106 0 0 1-.967-.555 1.123 1.123 0 0 1-.064-.991l.734-1.685-1.322-1.3a1.103 1.103 0 0 1-.335-.778 1.102 1.102 0 0 1 .313-.79 1.092 1.092 0 0 1 .79-.338h1.408l.867-1.704a1.13 1.13 0 0 1 1.58-.447c.175.106.318.257.413.438L11.866 5h1.41a1.113 1.113 0 0 1 .762 1.908l-1.317 1.294.73 1.676a1.12 1.12 0 0 1-1.098 1.553 1.118 1.118 0 0 1-.488-.148L10 10.232l-1.873 1.054a1.105 1.105 0 0 1-.55.146ZM10 8.891c.107 0 .213.027.307.08l1.836 1.033-.739-1.698a.63.63 0 0 1 .135-.695l1.385-1.361h-1.441a.622.622 0 0 1-.558-.342L10 4.086l-.926 1.819a.623.623 0 0 1-.557.342H7.075L8.462 7.61a.63.63 0 0 1 .135.695l-.74 1.698L9.694 8.97A.62.62 0 0 1 10 8.89Z"></path></g><defs><clipPath id="eoa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-ribbon_star";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, RibbonStar);
}
