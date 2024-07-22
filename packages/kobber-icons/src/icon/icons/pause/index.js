export class Pause extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M5.625 17.5a1.876 1.876 0 0 1-1.875-1.875V4.375A1.877 1.877 0 0 1 5.625 2.5h1.25A1.877 1.877 0 0 1 8.75 4.375v11.25A1.877 1.877 0 0 1 6.875 17.5h-1.25Zm0-13.75A.625.625 0 0 0 5 4.375v11.25c0 .345.28.625.625.625h1.25a.625.625 0 0 0 .625-.625V4.375a.625.625 0 0 0-.625-.625h-1.25Zm7.5 13.75a1.876 1.876 0 0 1-1.875-1.875V4.375A1.876 1.876 0 0 1 13.125 2.5h1.25a1.877 1.877 0 0 1 1.875 1.875v11.25a1.876 1.876 0 0 1-1.875 1.875h-1.25Zm0-13.75a.625.625 0 0 0-.625.625v11.25c0 .345.28.625.625.625h1.25a.624.624 0 0 0 .625-.625V4.375a.625.625 0 0 0-.625-.625h-1.25Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-pause";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Pause);
}
