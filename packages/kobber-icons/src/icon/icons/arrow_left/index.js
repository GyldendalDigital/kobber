export class ArrowLeft extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#aja)"><path fill="currentColor" d="M9.375 19.375a.619.619 0 0 1-.442-.183l-8.75-8.75a.618.618 0 0 1-.136-.204l-.008-.022a.625.625 0 0 1 .146-.659L8.933.808a.62.62 0 0 1 .884 0A.619.619 0 0 1 10 1.25a.619.619 0 0 1-.183.442L2.133 9.375h17.242a.625.625 0 0 1 0 1.25H2.135l7.683 7.683a.627.627 0 0 1-.443 1.067Z"></path></g><defs><clipPath id="aja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-arrow_left";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ArrowLeft);
}