export class Dictionary extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bna)"><path fill="currentColor" d="M2.5 20A2.503 2.503 0 0 1 0 17.5V3.125A3.128 3.128 0 0 1 3.125 0h12.5a.625.625 0 1 1 0 1.25h-12.5A1.877 1.877 0 0 0 1.25 3.125v12.21c.38-.221.811-.336 1.25-.335h13.125a.624.624 0 1 1 0 1.25H15v2.5h.625a.624.624 0 1 1 0 1.25H2.5Zm0-3.75a1.25 1.25 0 0 0 0 2.5h11.25v-2.5H2.5Z"></path><path fill="currentColor" d="M6.875 11.25a.625.625 0 0 1-.625-.625V8.75H5v1.875a.625.625 0 1 1-1.25 0v-5c0-1.034.84-1.875 1.875-1.875 1.034 0 1.875.84 1.875 1.875v5a.625.625 0 0 1-.625.625ZM6.25 7.5V5.625a.625.625 0 0 0-1.25 0V7.5h1.25Zm4.375 6.25a.624.624 0 0 1-.625-.625v-6.25a.625.625 0 0 1 .625-.625h1.25a1.877 1.877 0 0 1 1.875 1.875v.625c0 .47-.172.91-.48 1.25.31.34.48.78.48 1.25v.625a1.876 1.876 0 0 1-1.875 1.875h-1.25Zm1.25-1.25a.624.624 0 0 0 .625-.625v-.625a.624.624 0 0 0-.625-.625h-.625l.625 1.875Zm0-3.125a.625.625 0 0 0 .625-.625v-.625a.625.625 0 0 0-.625-.625h-.625v1.875h.625Zm7.5 1.875a3.128 3.128 0 0 1-3.125-3.125v-1.25a3.128 3.128 0 0 1 3.125-3.125.625.625 0 1 1 0 1.25A1.877 1.877 0 0 0 17.5 6.875v1.25A1.876 1.876 0 0 0 19.375 10a.624.624 0 1 1 0 1.25Z"></path></g><defs><clipPath id="bna"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-dictionary";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Dictionary);
}
