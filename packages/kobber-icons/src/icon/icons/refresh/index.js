export class Refresh extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M4.098 16.252H.625a.625.625 0 0 1 0-1.25h2.197A8.747 8.747 0 0 1 1.26 9.817a8.697 8.697 0 0 1 2.697-6.132 8.716 8.716 0 0 1 6.055-2.43 8.71 8.71 0 0 1 3.355.67.624.624 0 1 1-.48 1.153 7.457 7.457 0 0 0-2.875-.574 7.472 7.472 0 0 0-5.19 2.083 7.454 7.454 0 0 0-2.313 5.257 7.483 7.483 0 0 0 1.241 4.3v-2.269a.625.625 0 1 1 1.25.001v3.75a.625.625 0 0 1-.625.626h-.198a.313.313 0 0 1-.038.003l-.042-.003Zm5.898 2.502a8.713 8.713 0 0 1-3.365-.673.623.623 0 0 1-.202-1.021.624.624 0 0 1 .682-.134 7.467 7.467 0 0 0 2.885.578 7.466 7.466 0 0 0 5.195-2.09 7.452 7.452 0 0 0 2.306-5.26 7.48 7.48 0 0 0-1.248-4.299v2.27a.625.625 0 0 1-1.249 0v-3.75a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 0 1.25h-2.196a8.755 8.755 0 0 1 1.569 5.18 8.703 8.703 0 0 1-2.69 6.136 8.716 8.716 0 0 1-6.062 2.438Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-refresh";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Refresh);
}
