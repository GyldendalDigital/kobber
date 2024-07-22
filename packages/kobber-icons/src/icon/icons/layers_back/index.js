export class LayersBack extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") ||
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cra)"><path fill="currentColor" d="M1.875 16.25A1.876 1.876 0 0 1 0 14.375v-12.5A1.877 1.877 0 0 1 1.875 0h12.5a1.877 1.877 0 0 1 1.875 1.875v12.5a1.876 1.876 0 0 1-1.875 1.875h-12.5Zm0-15a.625.625 0 0 0-.625.625v12.5c0 .345.28.625.625.625h12.5a.624.624 0 0 0 .625-.625v-12.5a.625.625 0 0 0-.625-.625h-12.5Z"></path><path fill="currentColor" d="M5.625 20a1.876 1.876 0 0 1-1.875-1.875.625.625 0 1 1 1.25 0c0 .345.28.625.625.625h12.5a.624.624 0 0 0 .625-.625v-12.5A.625.625 0 0 0 18.125 5a.625.625 0 1 1 0-1.25A1.877 1.877 0 0 1 20 5.625v12.5A1.876 1.876 0 0 1 18.125 20h-12.5Z"></path></g><defs><clipPath id="cra"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-layers_back";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, LayersBack);
}
