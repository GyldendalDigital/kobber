export class ArrowUp extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#ala)"><path fill="currentColor" d="M10 20a.625.625 0 0 1-.625-.625V2.135L1.692 9.817a.622.622 0 0 1-.884-.001.619.619 0 0 1-.183-.442c0-.167.065-.324.183-.442l8.75-8.75a.617.617 0 0 1 .204-.135l.02-.008a.62.62 0 0 1 .435 0l.018.006c.08.033.15.08.208.138l8.749 8.75a.619.619 0 0 1 .183.441.619.619 0 0 1-.386.577.625.625 0 0 1-.68-.135l-7.684-7.684v17.242A.625.625 0 0 1 10 20Z"></path></g><defs><clipPath id="ala"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-arrow_up";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ArrowUp);
}
