export class Subtract extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eza)"><path fill="currentColor" d="M.625 10.657a.625.625 0 1 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.625Z"></path></g><defs><clipPath id="eza"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-subtract";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Subtract);
}
