export class SchoolTeacher extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eqa)"><path fill="currentColor" d="M4.375 6.25A3.128 3.128 0 0 1 1.25 3.125 3.128 3.128 0 0 1 4.375 0 3.128 3.128 0 0 1 7.5 3.125 3.128 3.128 0 0 1 4.375 6.25Zm0-5c-1.034 0-1.875.84-1.875 1.875C2.5 4.159 3.34 5 4.375 5 5.409 5 6.25 4.16 6.25 3.125c0-1.034-.84-1.875-1.875-1.875ZM2.5 20a.623.623 0 0 1-.622-.563L1.31 13.75H.625A.625.625 0 0 1 0 13.125v-2.5A4.38 4.38 0 0 1 4.375 6.25a4.38 4.38 0 0 1 4.375 4.375v2.5a.625.625 0 0 1-.625.625h-.684l-.569 5.688A.624.624 0 0 1 6.25 20H2.5Zm3.184-1.25.569-5.688a.624.624 0 0 1 .622-.562H7.5v-1.875A3.15 3.15 0 0 0 5 7.565v4.31a.625.625 0 1 1-1.25 0v-4.31a3.15 3.15 0 0 0-2.5 3.06V12.5h.625c.322 0 .59.242.622.563l.569 5.687h2.618Zm4.941-4.375a.624.624 0 1 1 0-1.25h7.5a.624.624 0 0 0 .625-.625V1.875a.625.625 0 0 0-.625-.625h-8.75a.625.625 0 0 1 0-1.25h8.75A1.877 1.877 0 0 1 20 1.875V12.5a1.876 1.876 0 0 1-1.875 1.875h-7.5Z"></path></g><defs><clipPath id="eqa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-school_teacher";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, SchoolTeacher);
}
