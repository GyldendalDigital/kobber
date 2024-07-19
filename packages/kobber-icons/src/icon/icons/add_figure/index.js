export class AddFigure extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#aba)"><path fill="currentColor" d="M2.5 5A2.503 2.503 0 0 1 0 2.5C0 1.122 1.122 0 2.5 0S5 1.122 5 2.5 3.878 5 2.5 5Zm0-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM2.5 20A2.503 2.503 0 0 1 0 17.5C0 16.122 1.122 15 2.5 15S5 16.122 5 17.5 3.878 20 2.5 20Zm0-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17.5 5A2.503 2.503 0 0 1 15 2.5C15 1.122 16.122 0 17.5 0S20 1.122 20 2.5 18.878 5 17.5 5Zm0-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm0 18.75a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5Zm0-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM6.875 2.5a.625.625 0 0 1 0-1.25h6.25a.625.625 0 1 1 0 1.25h-6.25Zm11.25 11.25a.624.624 0 0 1-.625-.625v-6.25a.625.625 0 1 1 1.25 0v6.25a.624.624 0 0 1-.625.625Zm-11.25 5a.625.625 0 1 1 0-1.25h6.25a.624.624 0 1 1 0 1.25h-6.25Zm-5-5a.625.625 0 0 1-.625-.625v-6.25a.625.625 0 0 1 1.25 0v6.25a.625.625 0 0 1-.625.625Z"></path></g><defs><clipPath id="aba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-add_figure";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AddFigure);
}
