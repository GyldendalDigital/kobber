export class ParagraphCenter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#dra)"><path fill="currentColor" d="M1.867 3.123a.625.625 0 0 1 0-1.25h16.25a.625.625 0 1 1 0 1.25H1.867Zm2.5 3.75a.625.625 0 0 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.367Zm-3.75 3.75a.625.625 0 0 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.617Zm3.75 3.75a.625.625 0 0 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.367Zm-2.5 3.75a.625.625 0 0 1 0-1.25h16.25a.625.625 0 1 1 0 1.25H1.867Z"></path></g><defs><clipPath id="dra"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-paragraph_center";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ParagraphCenter);
}
