export class Warning extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#gaa)"><path fill="currentColor" d="M10 15a.937.937 0 1 0 0-1.875A.937.937 0 0 0 10 15Zm0-3.125a.625.625 0 0 1-.625-.625V4.375a.625.625 0 0 1 1.25 0v6.875a.624.624 0 0 1-.625.625Z"></path><path fill="currentColor" d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10Zm0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S14.825 1.25 10 1.25Z"></path></g><defs><clipPath id="gaa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-warning";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Warning);
}
