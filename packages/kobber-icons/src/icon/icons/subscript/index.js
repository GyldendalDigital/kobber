export class Subscript extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eya)"><path fill="currentColor" d="M13.75 14.373a.619.619 0 0 1-.442-.183l-6.12-6.12-6.121 6.12a.62.62 0 0 1-.884 0 .627.627 0 0 1 0-.884l6.121-6.121-6.12-6.12A.619.619 0 0 1 0 .623.62.62 0 0 1 .183.182a.619.619 0 0 1 .442-.184c.167 0 .324.065.442.184l6.12 6.12 6.121-6.12a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.441.619.619 0 0 1-.183.442l-6.12 6.12 6.12 6.122a.627.627 0 0 1-.442 1.066Zm3.125 5.625a.627.627 0 0 1-.488-1.015l2.11-2.638c.164-.204.253-.46.253-.722a.625.625 0 0 0-1.25 0 .625.625 0 0 1-1.25 0c0-1.034.84-1.875 1.875-1.875 1.034 0 1.875.841 1.875 1.875 0 .545-.188 1.078-.527 1.503l-1.297 1.622h1.199a.625.625 0 0 1 0 1.25h-2.5Z"></path></g><defs><clipPath id="eya"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-subscript";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Subscript);
}
