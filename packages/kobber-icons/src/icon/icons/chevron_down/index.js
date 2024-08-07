export class ChevronDown extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") || ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		const role = ariaHidden ? "presentation" : "img";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#baa)"><path fill="currentColor" d="M10 15.835c-.334 0-.647-.13-.883-.365L.183 6.534a.62.62 0 0 1 0-.884.62.62 0 0 1 .884 0l8.932 8.935 8.933-8.935a.62.62 0 0 1 .883 0 .619.619 0 0 1 0 .884l-8.933 8.935a1.242 1.242 0 0 1-.883.366Z"></path></g><defs><clipPath id="baa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-chevron_down";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ChevronDown);
}
