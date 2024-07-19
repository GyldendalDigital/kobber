export class Heart extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#cha)"><path fill="currentColor" d="M9.998 18.83a.627.627 0 0 1-.45-.192l-7.99-8.333a5.337 5.337 0 0 1-.994-6.172A5.33 5.33 0 0 1 5.36 1.176c.834 0 1.637.19 2.386.564a5.33 5.33 0 0 1 1.39 1.002l.864.863.864-.863a5.315 5.315 0 0 1 3.785-1.565 5.32 5.32 0 0 1 3.785 1.565 5.347 5.347 0 0 1 0 7.569l-7.982 8.326a.63.63 0 0 1-.453.194ZM5.355 2.424c-.44 0-.877.072-1.3.213a4.075 4.075 0 0 0-2.373 2.056A4.096 4.096 0 0 0 2.45 9.43l7.548 7.872 7.54-7.865a4.106 4.106 0 0 0 .009-5.81 4.075 4.075 0 0 0-2.901-1.199 4.075 4.075 0 0 0-2.9 1.2L10.44 4.931a.624.624 0 0 1-.883 0L8.252 3.627a4.108 4.108 0 0 0-1.066-.768 4.06 4.06 0 0 0-1.83-.436Z"></path></g><defs><clipPath id="cha"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-heart";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Heart);
}
