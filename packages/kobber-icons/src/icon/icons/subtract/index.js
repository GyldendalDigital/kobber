export class Subtract extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#eza)"><path fill="currentColor" d="M.625 10.657a.625.625 0 1 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.625Z"></path></g><defs><clipPath id="eza"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-subtract";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Subtract);
}
