export class Printer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eca)"><path fill="currentColor" d="M4.375 20a.624.624 0 0 1-.612-.747l.6-3.003H1.874A1.876 1.876 0 0 1 0 14.375v-5c0-.043.004-.085.013-.127l.005-.018a.61.61 0 0 1 .05-.14L2.22 4.788A1.864 1.864 0 0 1 3.897 3.75H5V.625A.625.625 0 0 1 5.625 0h8.75A.625.625 0 0 1 15 .625V3.75h1.102c.715 0 1.358.397 1.678 1.037l2.154 4.309c.023.046.04.095.052.146l.003.018c.007.038.01.076.011.115v5a1.876 1.876 0 0 1-1.875 1.875h-2.488l.6 3.003a.625.625 0 0 1-.612.747H4.375Zm10.488-1.25-1-5H6.138l-1 5h9.725ZM18.125 15a.624.624 0 0 0 .625-.625V10H1.25v4.375c0 .345.28.625.625.625h2.737l.4-1.998a.627.627 0 0 1 .613-.502h8.75c.297 0 .555.212.613.502l.4 1.998h2.737Zm.24-6.25-1.702-3.405a.625.625 0 0 0-.56-.345H15v1.875a.625.625 0 0 1-.625.625h-8.75A.625.625 0 0 1 5 6.875V5H3.897a.622.622 0 0 0-.559.346L1.636 8.75h16.728Zm-4.615-2.5v-5h-7.5v5h7.5Z"></path><path fill="currentColor" d="M17.188 13.125a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM8.125 17.5a.625.625 0 1 1 0-1.25h3.75a.624.624 0 1 1 0 1.25h-3.75Z"></path></g><defs><clipPath id="eca"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-printer";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Printer);
}
