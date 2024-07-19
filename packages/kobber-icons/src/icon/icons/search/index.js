export class Search extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#era)"><path fill="currentColor" d="M19.37 19.997a.62.62 0 0 1-.44-.184l-5.43-5.43a8.19 8.19 0 0 1-2.127 1.316 8.14 8.14 0 0 1-6.259.058 8.121 8.121 0 0 1-4.466-4.385 8.124 8.124 0 0 1-.057-6.259A8.125 8.125 0 0 1 4.975.647 8.12 8.12 0 0 1 11.233.59 8.12 8.12 0 0 1 15.7 4.975a8.123 8.123 0 0 1 .058 6.258 8.174 8.174 0 0 1-1.374 2.265l5.43 5.432a.624.624 0 1 1-.442 1.067ZM8.173 1.242c-.93 0-1.852.189-2.708.555A6.883 6.883 0 0 0 1.75 5.581a6.883 6.883 0 0 0 .048 5.301 6.884 6.884 0 0 0 3.784 3.716 6.884 6.884 0 0 0 5.301-.05 6.905 6.905 0 0 0 2.162-1.446.303.303 0 0 1 .064-.064 6.871 6.871 0 0 0 1.489-2.273 6.88 6.88 0 0 0-.05-5.302 6.88 6.88 0 0 0-3.783-3.715 6.9 6.9 0 0 0-2.591-.506Z"></path></g><defs><clipPath id="era"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-search";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Search);
}
