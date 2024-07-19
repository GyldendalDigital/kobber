export class TextStyle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#fla)"><path fill="currentColor" d="M6.25 19.998a.625.625 0 0 1 0-1.25h3.125v-17.5h-6.25A1.245 1.245 0 0 0 1.875 2.5v.624a.625.625 0 0 1-1.25 0V2.5a2.482 2.482 0 0 1 .73-1.767 2.485 2.485 0 0 1 1.768-.735h13.752c1.378 0 2.5 1.122 2.5 2.5v.627a.625.625 0 1 1-1.25 0V2.5c0-.69-.56-1.252-1.25-1.252h-6.25v17.5h3.125a.625.625 0 1 1 0 1.25h-7.5Z"></path></g><defs><clipPath id="fla"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-text_style";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TextStyle);
}
