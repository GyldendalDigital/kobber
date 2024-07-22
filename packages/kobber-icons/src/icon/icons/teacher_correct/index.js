export class TeacherCorrect extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#fha)"><path fill="currentColor" d="M4.375 6.25A3.128 3.128 0 0 1 1.25 3.125 3.128 3.128 0 0 1 4.375 0 3.128 3.128 0 0 1 7.5 3.125 3.128 3.128 0 0 1 4.375 6.25Zm0-5c-1.034 0-1.875.84-1.875 1.875C2.5 4.159 3.34 5 4.375 5 5.409 5 6.25 4.16 6.25 3.125c0-1.034-.84-1.875-1.875-1.875ZM2.5 20a.622.622 0 0 1-.622-.563L1.31 13.75H.625A.625.625 0 0 1 0 13.125v-2.5A4.38 4.38 0 0 1 4.375 6.25a4.38 4.38 0 0 1 4.375 4.375v2.5c0 .345-.28.625-.625.625h-.684l-.569 5.688A.624.624 0 0 1 6.25 20H2.5Zm3.184-1.25.569-5.688c.032-.32.3-.562.622-.562H7.5v-1.875A3.15 3.15 0 0 0 5 7.565v4.31a.625.625 0 0 1-1.25 0v-4.31a3.15 3.15 0 0 0-2.5 3.06V12.5h.625c.322 0 .59.242.622.563l.569 5.687h2.618Zm3.691-17.5a.625.625 0 0 1 0-1.25h10a.625.625 0 0 1 0 1.25h-10Zm1.25 13.125a.625.625 0 0 1 0-1.25h8.75a.625.625 0 0 1 0 1.25h-8.75ZM13.75 10a.619.619 0 0 1-.442-.183l-2.5-2.5a.619.619 0 0 1-.183-.442.624.624 0 0 1 1.067-.442l1.99 1.99L17 4a.629.629 0 0 1 .874-.126c.276.208.332.6.125.876l-3.75 5a.623.623 0 0 1-.499.25Z"></path></g><defs><clipPath id="fha"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-teacher_correct";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TeacherCorrect);
}
