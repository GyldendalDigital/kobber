export class Banned extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#apa)"><path fill="currentColor" d="M10 20C4.486 20 0 15.514 0 10a9.933 9.933 0 0 1 2.89-7.025.348.348 0 0 1 .083-.082A9.93 9.93 0 0 1 10 0c5.514 0 10 4.486 10 10a9.933 9.933 0 0 1-2.89 7.025.304.304 0 0 1-.082.082A9.93 9.93 0 0 1 10 20ZM3.39 4.275A8.71 8.71 0 0 0 1.25 10c0 4.825 3.925 8.75 8.75 8.75a8.707 8.707 0 0 0 5.725-2.14L3.391 4.274Zm13.22 11.45A8.706 8.706 0 0 0 18.75 10c0-4.825-3.925-8.75-8.75-8.75a8.711 8.711 0 0 0-5.725 2.14l12.334 12.335Z"></path></g><defs><clipPath id="apa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-banned";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Banned);
}
