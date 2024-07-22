export class FormTemplate extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#caa)"><path fill="currentColor" d="M10 19.375a.625.625 0 0 1-.625-.625V17.5h-1.25a.625.625 0 1 1 0-1.25h1.25V15a.625.625 0 1 1 1.25 0v1.25h1.25a.624.624 0 1 1 0 1.25h-1.25v1.25a.624.624 0 0 1-.625.625Z"></path><path fill="currentColor" d="M13.75 20a.624.624 0 1 1 0-1.25h4.375a.624.624 0 0 0 .625-.625V16.25h-5a.624.624 0 1 1 0-1.25h5v-3.75H1.25V15h5a.625.625 0 1 1 0 1.25h-5v1.875c0 .345.28.625.625.625H6.25a.625.625 0 1 1 0 1.25H1.875A1.876 1.876 0 0 1 0 18.125V1.875A1.877 1.877 0 0 1 1.875 0h16.25A1.877 1.877 0 0 1 20 1.875v16.25A1.876 1.876 0 0 1 18.125 20H13.75Zm5-10V6.25H1.25V10h17.5Zm0-5V1.875a.625.625 0 0 0-.625-.625H1.875a.625.625 0 0 0-.625.625V5h17.5Z"></path><path fill="currentColor" d="M16.25 9.1a.937.937 0 1 0 0-1.876.937.937 0 0 0 0 1.875Zm0 4.96a.937.937 0 1 0 0-1.874.937.937 0 0 0 0 1.875Zm0-10.034a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"></path></g><defs><clipPath id="caa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-form_template";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FormTemplate);
}
