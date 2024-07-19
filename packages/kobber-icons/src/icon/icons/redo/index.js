export class Redo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eja)"><path fill="currentColor" d="M9.991 19.998c-5.509 0-9.993-4.483-9.997-9.994a9.936 9.936 0 0 1 2.928-7.07A9.93 9.93 0 0 1 9.985-.002c3.657 0 7.02 2.032 8.76 5.175V.623a.625.625 0 1 1 1.25 0v6.25a.625.625 0 0 1-.626.625h-6.248a.625.625 0 1 1 0-1.25h4.773a8.716 8.716 0 0 0-7.903-5 8.691 8.691 0 0 0-6.185 2.57 8.695 8.695 0 0 0-2.562 6.185c.002 4.822 3.927 8.745 8.747 8.745.35 0 .63.28.63.625a.629.629 0 0 1-.63.625Z"></path></g><defs><clipPath id="eja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-redo";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Redo);
}
