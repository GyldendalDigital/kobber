export class Menu extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M1.875 15.627a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Zm0-5a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Zm0-5a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-menu";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Menu);
}
