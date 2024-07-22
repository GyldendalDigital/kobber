export class IndentIncrease extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cna)"><path fill="currentColor" d="M.624 3.123a.625.625 0 0 1 0-1.25h10a.625.625 0 1 1 0 1.25h-10Zm0 3.75a.625.625 0 0 1 0-1.25h5a.625.625 0 0 1 0 1.25h-5Zm0 3.75a.625.625 0 0 1 0-1.25h5a.625.625 0 0 1 0 1.25h-5Zm0 3.75a.625.625 0 0 1 0-1.25h5a.625.625 0 1 1 0 1.25h-5Zm0 3.75a.625.625 0 0 1 0-1.25h10a.625.625 0 1 1 0 1.25h-10Zm13.122-1.253c-.333 0-.645-.128-.88-.363a1.24 1.24 0 0 1-.368-.885v-1.247H9.373A1.877 1.877 0 0 1 7.498 12.5v-5a1.877 1.877 0 0 1 1.875-1.875h3.125V4.373a1.244 1.244 0 0 1 .773-1.156 1.248 1.248 0 0 1 1.36.27l4.901 5.272c.617.721.621 1.75.018 2.456l-4.9 5.274a1.265 1.265 0 0 1-.904.382ZM9.374 6.876a.625.625 0 0 0-.625.625v5c0 .345.28.625.625.625h3.75a.625.625 0 0 1 .625.625v1.872l4.868-5.239a.613.613 0 0 0-.017-.792l-4.846-5.213-.005 1.872a.625.625 0 0 1-.625.625h-3.75Z"></path></g><defs><clipPath id="cna"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-indent_increase";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, IndentIncrease);
}
