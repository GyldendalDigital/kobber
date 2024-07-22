export class ArrowRight extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#aka)"><path fill="currentColor" d="M10.625 19.375a.627.627 0 0 1-.441-1.067l7.683-7.684H.625a.624.624 0 1 1 0-1.249h17.241l-7.683-7.683a.621.621 0 0 1 0-.884.619.619 0 0 1 .442-.183c.167 0 .324.065.442.183l8.75 8.75a.616.616 0 0 1 .136.204l.008.022a.609.609 0 0 1 0 .431l-.005.013a.629.629 0 0 1-.14.215l-8.75 8.749a.62.62 0 0 1-.44.183Z"></path></g><defs><clipPath id="aka"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-arrow_right";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ArrowRight);
}
