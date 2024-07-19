export class Clock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#bea)"><path fill="currentColor" d="M10 19.375C4.83 19.375.625 15.169.625 10 .625 4.83 4.831.625 10 .625c5.17 0 9.375 4.206 9.375 9.375 0 5.17-4.206 9.375-9.375 9.375Zm0-17.5C5.52 1.875 1.875 5.52 1.875 10S5.52 18.125 10 18.125 18.125 14.48 18.125 10 14.48 1.875 10 1.875Z"></path><path fill="currentColor" d="M13.906 14.532a.619.619 0 0 1-.442-.184l-3.906-3.906a.618.618 0 0 1-.136-.204l-.007-.021a.614.614 0 0 1-.04-.217V6.875a.625.625 0 0 1 1.25 0v2.866l3.723 3.723a.62.62 0 0 1 0 .883.626.626 0 0 1-.442.185Z"></path></g><defs><clipPath id="bea"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-clock";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Clock);
}
