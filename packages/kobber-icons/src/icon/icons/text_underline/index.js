export class TextUnderline extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#fna)"><path fill="currentColor" d="M.625 19.998a.625.625 0 0 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.625ZM10 16.25A6.258 6.258 0 0 1 3.75 10V1.248h-.625a.625.625 0 0 1 0-1.25h2.5a.625.625 0 0 1 0 1.25H5V10c0 2.757 2.243 5 5 5s5-2.243 5-5V1.248h-.625a.625.625 0 1 1 0-1.25h2.5a.625.625 0 1 1 0 1.25h-.625V10A6.258 6.258 0 0 1 10 16.25Z"></path></g><defs><clipPath id="fna"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-text_underline";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TextUnderline);
}
