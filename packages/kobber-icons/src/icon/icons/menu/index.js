export class Menu extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M1.875 15.627a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Zm0-5a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Zm0-5a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-menu";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Menu);
}
