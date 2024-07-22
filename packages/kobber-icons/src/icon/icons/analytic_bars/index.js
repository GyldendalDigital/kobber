export class AnalyticBars extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M.625 18.75a.625.625 0 1 1 0-1.25h.625V10c0-.69.56-1.25 1.25-1.25H5c.69 0 1.25.56 1.25 1.25v7.5H7.5v-15c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v15h1.25V6.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V17.5h.625a.624.624 0 1 1 0 1.25H.625ZM17.5 17.5V6.25H15V17.5h2.5Zm-6.25 0v-15h-2.5v15h2.5ZM5 17.5V10H2.5v7.5H5Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-analytic_bars";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AnalyticBars);
}
