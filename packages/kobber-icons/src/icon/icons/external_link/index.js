export class ExternalLink extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#bva)"><path fill="currentColor" d="M6.876 13.748a.628.628 0 0 1-.442-1.067L17.867 1.247h-4.115a.625.625 0 0 1 0-1.25h5.625a.625.625 0 0 1 .578.387l.007.022a.61.61 0 0 1 .04.216v5.625a.625.625 0 0 1-1.25 0V2.132L7.318 13.566a.626.626 0 0 1-.442.182Z"></path><path fill="currentColor" d="M1.876 19.998a1.877 1.877 0 0 1-1.875-1.875v-12.5a1.877 1.877 0 0 1 1.875-1.875h7.5a.625.625 0 0 1 0 1.25h-7.5a.625.625 0 0 0-.625.625v12.5c0 .345.28.625.625.625h12.5a.625.625 0 0 0 .625-.625v-7.5a.625.625 0 1 1 1.25 0v7.5a1.877 1.877 0 0 1-1.875 1.875h-12.5Z"></path></g><defs><clipPath id="bva"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-external_link";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ExternalLink);
}
