export class Calendar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#aua)"><path fill="currentColor" d="M1.877 20a1.876 1.876 0 0 1-1.875-1.875V4.375A1.877 1.877 0 0 1 1.877 2.5h3.125V.625a.625.625 0 0 1 1.25 0V2.5h7.5V.625a.625.625 0 1 1 1.25 0V2.5h3.125a1.877 1.877 0 0 1 1.875 1.875v13.75A1.877 1.877 0 0 1 18.127 20H1.877Zm-.625-1.875c0 .345.28.625.625.625h16.25a.625.625 0 0 0 .625-.625V8.75h-17.5v9.375ZM18.752 7.5V4.375a.625.625 0 0 0-.625-.625h-3.125V5a.625.625 0 0 1-1.25 0V3.75h-7.5V5a.625.625 0 0 1-1.25 0V3.75H1.877a.625.625 0 0 0-.625.625V7.5h17.5Z"></path></g><defs><clipPath id="aua"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-calendar";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Calendar);
}
