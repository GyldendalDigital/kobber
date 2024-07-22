export class SettingsSlider extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eta)"><path fill="currentColor" d="M1.876 20a1.876 1.876 0 0 1-1.875-1.875V1.875A1.877 1.877 0 0 1 1.876 0h16.25a1.877 1.877 0 0 1 1.875 1.875v16.25A1.877 1.877 0 0 1 18.126 20H1.876Zm0-18.75a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h16.25a.625.625 0 0 0 .625-.625V1.875a.625.625 0 0 0-.625-.625H1.876Z"></path><path fill="currentColor" d="M8.75 15.625a2.514 2.514 0 0 1-2.417-1.875H4.376a.625.625 0 1 1 0-1.25h1.957a2.512 2.512 0 0 1 2.417-1.875c1.143 0 2.137.79 2.42 1.875h4.456a.625.625 0 1 1 0 1.25h-4.457a2.514 2.514 0 0 1-2.418 1.875Zm0-3.75a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm5-2.5A2.514 2.514 0 0 1 11.333 7.5H4.376a.625.625 0 0 1 0-1.25h6.956a2.513 2.513 0 0 1 2.419-1.875c1.378 0 2.5 1.122 2.5 2.5a2.504 2.504 0 0 1-2.501 2.5Zm0-3.75c-.688 0-1.25.56-1.25 1.25s.562 1.25 1.25 1.25a1.25 1.25 0 0 0 0-2.5Z"></path></g><defs><clipPath id="eta"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-settings_slider";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, SettingsSlider);
}
