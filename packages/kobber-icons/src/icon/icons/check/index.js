export class Check extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M7.75 14.917h-.333c-.417-.084-.75-.334-.917-.667l-2-2.917c-.167-.25-.167-.666.167-.833.083-.083.25-.083.333-.083.167 0 .417.083.5.25l2.083 2.916c.084.084.084.084.167.084h.083c.084 0 .084 0 .167-.084 0 0 .083 0 .083-.083l6.584-8.25c.083-.167.333-.25.5-.25.166 0 .25.083.416.167.167.083.25.25.25.416 0 .167 0 .334-.166.5l-6.5 8.25-.334.334c-.5.166-.75.25-1.083.25Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-check";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Check);
}
