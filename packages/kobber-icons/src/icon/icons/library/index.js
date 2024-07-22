export class Library extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cva)"><path fill="currentColor" d="M1.972 20a1.876 1.876 0 0 1-1.875-1.875V6.25a1.877 1.877 0 0 1 1.875-1.875h1.682a.625.625 0 0 1 0 1.25H1.972a.625.625 0 0 0-.625.625v11.875c0 .345.28.625.625.625h1.682a.625.625 0 1 1 0 1.25H1.972Zm5 0a1.876 1.876 0 0 1-1.875-1.875V1.875C5.097.841 5.94 0 6.972 0h2.5a1.877 1.877 0 0 1 1.876 1.875v1.403l1.127-.428c.212-.081.438-.123.665-.123.774 0 1.48.486 1.754 1.209l4.888 12.852a1.86 1.86 0 0 1-.042 1.434 1.865 1.865 0 0 1-1.044.985l-1.169.444a1.871 1.871 0 0 1-2.42-1.086l-3.76-9.888v9.448A1.877 1.877 0 0 1 9.472 20h-2.5Zm0-18.75a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h2.5a.625.625 0 0 0 .626-.625V1.875a.625.625 0 0 0-.626-.625h-2.5Zm6.169 2.727a.614.614 0 0 0-.222.04l-1.168.445a.623.623 0 0 0-.362.807l4.888 12.851a.619.619 0 0 0 .806.36l1.17-.443a.623.623 0 0 0 .362-.807l-4.89-12.85a.629.629 0 0 0-.584-.403Z"></path></g><defs><clipPath id="cva"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-library";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Library);
}
