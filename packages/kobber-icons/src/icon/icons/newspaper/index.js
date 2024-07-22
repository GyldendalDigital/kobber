export class Newspaper extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dla)"><path fill="currentColor" d="M2.5 19.375a2.503 2.503 0 0 1-2.5-2.5V2.5A1.877 1.877 0 0 1 1.875.625h12.5A1.877 1.877 0 0 1 16.25 2.5v14.375a1.25 1.25 0 0 0 2.5 0V5A.625.625 0 1 1 20 5v11.875c0 1.378-1.122 2.5-2.5 2.5h-15Zm-.625-17.5a.625.625 0 0 0-.625.625v14.375c0 .69.56 1.25 1.25 1.25h12.834a2.477 2.477 0 0 1-.334-1.25V2.5a.625.625 0 0 0-.625-.625h-12.5Z"></path><path fill="currentColor" d="M3.75 13.125a.625.625 0 1 1 0-1.25h8.75a.624.624 0 1 1 0 1.25H3.75Zm0 2.5a.625.625 0 1 1 0-1.25h5a.625.625 0 1 1 0 1.25h-5ZM4.375 10c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25h-7.5Zm0-1.25h7.5V5h-7.5v3.75Z"></path></g><defs><clipPath id="dla"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-newspaper";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Newspaper);
}
