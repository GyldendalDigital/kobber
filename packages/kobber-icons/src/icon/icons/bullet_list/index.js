export class BulletList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#ata)"><path fill="currentColor" d="M2.5 4.998a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5S5 1.12 5 2.498c0 1.379-1.122 2.5-2.5 2.5Zm0-3.75a1.251 1.251 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm0 11.25a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5S5 8.62 5 9.998c0 1.379-1.122 2.5-2.5 2.5Zm0-3.75a1.251 1.251 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm0 11.25a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5S5 16.12 5 17.498c0 1.379-1.122 2.5-2.5 2.5Zm0-3.75a1.251 1.251 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.375-12.5a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25h-12.5Zm0 7.5a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25h-12.5Zm0 7.5a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25h-12.5Z"></path></g><defs><clipPath id="ata"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-bullet_list";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, BulletList);
}
