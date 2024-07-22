export class ChevronUp extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#bba)"><path fill="currentColor" d="M.625 14.953a.627.627 0 0 1-.442-1.068L9.12 4.95a1.243 1.243 0 0 1 1.766-.002l8.936 8.937a.627.627 0 0 1-.681 1.021.619.619 0 0 1-.203-.136l-8.935-8.936-8.935 8.936a.618.618 0 0 1-.442.183Z"></path></g><defs><clipPath id="bba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-chevron_up";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ChevronUp);
}
