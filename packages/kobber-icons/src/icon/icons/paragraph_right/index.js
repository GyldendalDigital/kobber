export class ParagraphRight extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#dta)"><path fill="currentColor" d="M1.667 3.123a.625.625 0 0 1 0-1.25h17.5a.625.625 0 0 1 0 1.25h-17.5Zm2.5 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 0 1 0 1.25h-15Zm-3.75 3.75a.625.625 0 0 1 0-1.25h18.75a.625.625 0 0 1 0 1.25H.417Zm3.75 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 1 1 0 1.25h-15Zm-2.5 3.75a.625.625 0 0 1 0-1.25h17.5a.625.625 0 1 1 0 1.25h-17.5Z"></path></g><defs><clipPath id="dta"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-paragraph_right";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ParagraphRight);
}
