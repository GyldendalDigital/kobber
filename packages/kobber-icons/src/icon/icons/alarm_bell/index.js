export class AlarmBell extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#ada)"><path fill="currentColor" d="M9.992 20a2.362 2.362 0 0 1-2.265-1.698.625.625 0 0 1 1.199-.353 1.113 1.113 0 0 0 2.137.001.63.63 0 0 1 .992-.311.626.626 0 0 1 .207.663A2.37 2.37 0 0 1 9.992 20Zm-7.499-3.749a.63.63 0 0 1-.623-.69.623.623 0 0 1 .13-.32c.005-.008 1.118-1.616 1.118-6.49a6.864 6.864 0 0 1 6.25-6.847V.626a.625.625 0 1 1 1.25 0v1.278a6.864 6.864 0 0 1 6.25 6.847c0 5.253 1.038 6.405 1.048 6.416a.63.63 0 0 1-.071.973.621.621 0 0 1-.352.111h-15Zm13.925-1.25c-.402-1.027-.801-2.892-.801-6.25a5.631 5.631 0 0 0-5.625-5.625 5.631 5.631 0 0 0-5.625 5.625c0 3.298-.484 5.23-.872 6.25h12.922Z"></path></g><defs><clipPath id="ada"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-alarm_bell";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AlarmBell);
}
