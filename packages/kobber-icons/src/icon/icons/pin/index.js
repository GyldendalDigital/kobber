export class Pin extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dza)"><path fill="currentColor" d="M10.208 20a.623.623 0 0 1-.609-.486c-.233-1.018-1.013-3.848-1.817-4.707a52.204 52.204 0 0 0-.692-.721c-1.76-1.814-3.757-3.871-3.757-7.211A6.883 6.883 0 0 1 10.208 0a6.883 6.883 0 0 1 6.875 6.875c0 3.335-1.991 5.39-3.749 7.2-.242.252-.474.49-.696.727-.806.862-1.588 3.694-1.821 4.712a.62.62 0 0 1-.609.486Zm0-18.75a5.632 5.632 0 0 0-5.625 5.625c0 2.833 1.73 4.616 3.404 6.34.246.254.482.497.708.738.602.645 1.123 1.911 1.513 3.108.391-1.198.914-2.467 1.517-3.113.227-.243.463-.486.703-.735 1.679-1.729 3.405-3.51 3.405-6.338a5.632 5.632 0 0 0-5.625-5.625Z"></path><path fill="currentColor" d="M10.208 10a3.128 3.128 0 0 1-3.125-3.125 3.128 3.128 0 0 1 3.125-3.125 3.128 3.128 0 0 1 3.125 3.125A3.128 3.128 0 0 1 10.208 10Zm0-5c-1.034 0-1.875.84-1.875 1.875 0 1.034.841 1.875 1.875 1.875s1.875-.84 1.875-1.875c0-1.034-.84-1.875-1.875-1.875Z"></path></g><defs><clipPath id="dza"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-pin";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Pin);
}
