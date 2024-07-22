export class LayoutLeft extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#csa)"><path fill="currentColor" d="M2.5 19.373a1.877 1.877 0 0 1-1.875-1.875v-15A1.877 1.877 0 0 1 2.5.623h15a1.877 1.877 0 0 1 1.875 1.875v15a1.876 1.876 0 0 1-1.875 1.875h-15Zm15-1.25a.625.625 0 0 0 .625-.625v-15a.625.625 0 0 0-.625-.625H6.875v16.25H17.5Zm-15-16.25a.625.625 0 0 0-.625.625v15c0 .345.28.625.625.625h3.125V1.873H2.5Z"></path></g><defs><clipPath id="csa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-layout_left";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, LayoutLeft);
}
