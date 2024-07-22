export class Transfer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#foa)"><path fill="currentColor" d="M16.875 15.625a.626.626 0 0 1-.442-1.068l1.434-1.433H8.75a.625.625 0 0 1 0-1.25h9.116l-1.433-1.433A.618.618 0 0 1 16.25 10a.619.619 0 0 1 .386-.577.625.625 0 0 1 .68.135l2.5 2.5a.617.617 0 0 1 .137.204l.008.022a.608.608 0 0 1 0 .43l-.004.015a.623.623 0 0 1-.14.213l-2.5 2.5a.625.625 0 0 1-.442.183Zm-13.75-5a.621.621 0 0 1-.442-.183l-2.5-2.5A.617.617 0 0 1 0 7.5a.61.61 0 0 1 .04-.218l.006-.017a.617.617 0 0 1 .138-.208l2.5-2.499a.62.62 0 0 1 .883 0A.619.619 0 0 1 3.75 5a.619.619 0 0 1-.183.442L2.133 6.875h9.117a.625.625 0 1 1 0 1.25H2.134l1.433 1.433a.623.623 0 0 1-.442 1.067Z"></path></g><defs><clipPath id="foa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-transfer";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Transfer);
}
