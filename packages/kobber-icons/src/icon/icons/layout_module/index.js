export class LayoutModule extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") || ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		const role = ariaHidden ? "presentation" : "img";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#cta)"><path fill="currentColor" d="M1.875 8.748A1.877 1.877 0 0 1 0 6.873v-5A1.877 1.877 0 0 1 1.875-.002h5A1.877 1.877 0 0 1 8.75 1.873v5a1.877 1.877 0 0 1-1.875 1.875h-5Zm0-7.5a.625.625 0 0 0-.625.625v5c0 .345.28.625.625.625h5a.625.625 0 0 0 .625-.625v-5a.625.625 0 0 0-.625-.625h-5Zm0 18.75A1.877 1.877 0 0 1 0 18.123v-5a1.877 1.877 0 0 1 1.875-1.875h5a1.877 1.877 0 0 1 1.875 1.875v5a1.877 1.877 0 0 1-1.875 1.875h-5Zm0-7.5a.625.625 0 0 0-.625.625v5c0 .345.28.625.625.625h5a.625.625 0 0 0 .625-.625v-5a.625.625 0 0 0-.625-.625h-5Zm11.25-3.75a1.877 1.877 0 0 1-1.875-1.875v-5a1.876 1.876 0 0 1 1.875-1.875h5A1.877 1.877 0 0 1 20 1.873v5a1.876 1.876 0 0 1-1.875 1.875h-5Zm0-7.5a.625.625 0 0 0-.625.625v5c0 .345.28.625.625.625h5a.625.625 0 0 0 .625-.625v-5a.625.625 0 0 0-.625-.625h-5Zm0 18.75a1.877 1.877 0 0 1-1.875-1.875v-5a1.876 1.876 0 0 1 1.875-1.875h5A1.877 1.877 0 0 1 20 13.123v5a1.876 1.876 0 0 1-1.875 1.875h-5Zm0-7.5a.625.625 0 0 0-.625.625v5c0 .345.28.625.625.625h5a.625.625 0 0 0 .625-.625v-5a.625.625 0 0 0-.625-.625h-5Z"></path></g><defs><clipPath id="cta"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-layout_module";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, LayoutModule);
}
