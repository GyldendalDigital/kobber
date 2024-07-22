export class ViewOff extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#fxa)"><path fill="currentColor" d="M2.32 18.125a.63.63 0 0 1-.583-.397.62.62 0 0 1 .15-.679l15.625-15a.62.62 0 0 1 .883.019.623.623 0 0 1-.017.884l-15.626 15a.628.628 0 0 1-.433.173Zm7.67-1.25h-.092a8.837 8.837 0 0 1-2.614-.402.626.626 0 0 1 .371-1.193c.74.23 1.5.347 2.257.347h.208c3.21 0 6.463-2.321 8.438-4.494a.758.758 0 0 0-.002-1.016 16.485 16.485 0 0 0-2.466-2.211.619.619 0 0 1-.197-.767.627.627 0 0 1 .934-.243 17.79 17.79 0 0 1 2.655 2.382c.694.769.694 1.926.003 2.694-2.155 2.371-5.746 4.905-9.364 4.905l-.131-.002Zm-6.842-2.699a.625.625 0 0 1-.383-.132 18.021 18.021 0 0 1-2.244-2.071 2.008 2.008 0 0 1-.003-2.695c2.155-2.371 5.747-4.904 9.364-4.904l.197.001c.705 0 1.406.085 2.084.254a.625.625 0 1 1-.303 1.214 7.34 7.34 0 0 0-1.774-.217h-.19c-3.22 0-6.477 2.32-8.45 4.492a.758.758 0 0 0 0 1.017c.64.7 1.338 1.344 2.087 1.925a.622.622 0 0 1-.385 1.116Z"></path><path fill="currentColor" d="M6.875 11.25a.625.625 0 0 1-.625-.625c0-1 .39-1.94 1.098-2.65a3.72 3.72 0 0 1 2.65-1.1c.172 0 .311.14.312.312l.002.625a.315.315 0 0 1-.091.221.309.309 0 0 1-.221.092 2.483 2.483 0 0 0-1.768.733 2.483 2.483 0 0 0-.732 1.767.623.623 0 0 1-.625.625ZM10 14.375a.311.311 0 0 1-.312-.313v-.624a.31.31 0 0 1 .312-.313 2.483 2.483 0 0 0 1.768-.732 2.488 2.488 0 0 0 .732-1.769.625.625 0 1 1 1.25 0 3.726 3.726 0 0 1-1.098 2.652 3.726 3.726 0 0 1-2.651 1.099Z"></path></g><defs><clipPath id="fxa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-view_off";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ViewOff);
}
