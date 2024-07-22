export class ParagraphLeft extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M.625 3.123a.625.625 0 0 1 0-1.25h17.5a.625.625 0 1 1 0 1.25H.625Zm0 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 1 1 0 1.25h-15Zm0 3.75a.625.625 0 0 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.625Zm0 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 1 1 0 1.25h-15Zm0 3.75a.625.625 0 0 1 0-1.25h17.5a.625.625 0 1 1 0 1.25H.625Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-paragraph_left";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ParagraphLeft);
}
