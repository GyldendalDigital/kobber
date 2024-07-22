export class Backspace extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#aoa)"><path fill="currentColor" d="M3.75 19.373a3.128 3.128 0 0 1-3.125-3.125v-12.5A3.128 3.128 0 0 1 3.75.623h12.5a3.128 3.128 0 0 1 3.125 3.125v12.5a3.128 3.128 0 0 1-3.125 3.125H3.75Zm0-17.5a1.877 1.877 0 0 0-1.875 1.875v12.5a1.877 1.877 0 0 0 1.875 1.875h12.5a1.877 1.877 0 0 0 1.875-1.875v-12.5a1.876 1.876 0 0 0-1.875-1.875H3.75Z"></path><path fill="currentColor" d="M13.75 12.498a.617.617 0 0 1-.442-.184l-1.433-1.433-1.433 1.433a.622.622 0 0 1-1.066-.442c0-.165.065-.324.182-.442l1.434-1.433-1.434-1.434a.619.619 0 0 1-.183-.441c0-.167.065-.324.183-.442A.619.619 0 0 1 10 7.497c.167 0 .324.065.442.183l1.433 1.433 1.433-1.433a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.441l-1.434 1.434 1.434 1.433a.627.627 0 0 1-.442 1.068Z"></path><path fill="currentColor" d="M9.267 15.625a1.858 1.858 0 0 1-1.325-.55l-4.437-4.18A1.256 1.256 0 0 1 3.22 9.52c.062-.152.154-.29.27-.406l4.466-4.207c.343-.341.81-.533 1.31-.533H15a1.877 1.877 0 0 1 1.875 1.875v7.5A1.877 1.877 0 0 1 15 15.625H9.267Zm-.455-1.446a.647.647 0 0 0 .455.196H15a.625.625 0 0 0 .625-.625v-7.5A.625.625 0 0 0 15 5.625H9.26a.63.63 0 0 0-.435.182l-4.45 4.19 4.437 4.182Z"></path></g><defs><clipPath id="aoa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-backspace";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Backspace);
}
