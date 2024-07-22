export class Youtube extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#gba)"><path fill="currentColor" d="M16.508 2.708H3.492A3.492 3.492 0 0 0 0 6.2v7.6a3.492 3.492 0 0 0 3.492 3.492h13.016A3.493 3.493 0 0 0 20 13.8V6.2a3.491 3.491 0 0 0-3.492-3.492ZM18.75 13.8a2.242 2.242 0 0 1-2.242 2.242H3.492A2.242 2.242 0 0 1 1.25 13.8V6.2a2.242 2.242 0 0 1 2.242-2.242h13.016A2.242 2.242 0 0 1 18.75 6.2v7.6Z"></path><path fill="currentColor" d="M8.25 5.542a.625.625 0 0 0-.958.525v7.216a.625.625 0 0 0 .958.525l5.642-3.608a.626.626 0 0 0 0-1.05L8.25 5.542Zm.292 6.6V7.208l3.858 2.5-3.858 2.434Z"></path></g><defs><clipPath id="gba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-youtube";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Youtube);
}
