export class Paragraph extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#dqa)"><path fill="currentColor" d="M14.375 19.998a.625.625 0 0 1-.625-.625V1.248H10v18.125a.625.625 0 0 1-1.25 0v-6.875h-2.5A6.258 6.258 0 0 1 0 6.248a6.258 6.258 0 0 1 6.25-6.25h13.125a.625.625 0 1 1 0 1.25H15v18.125a.625.625 0 0 1-.625.625ZM6.25 1.248c-2.757 0-5 2.244-5 5 0 2.757 2.243 5 5 5h2.5v-10h-2.5Z"></path></g><defs><clipPath id="dqa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-paragraph";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Paragraph);
}
