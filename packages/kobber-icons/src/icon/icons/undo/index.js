export class Undo extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fpa)"><path fill="currentColor" d="M9.997 19.998a.633.633 0 0 1-.625-.625c0-.344.281-.625.625-.625h.006c4.82 0 8.744-3.923 8.747-8.745.003-4.825-3.918-8.752-8.742-8.755a8.715 8.715 0 0 0-7.908 5h4.773a.625.625 0 0 1 0 1.25H.625A.625.625 0 0 1 0 6.873V.623a.625.625 0 1 1 1.25 0v4.551c1.74-3.143 5.1-5.176 8.753-5.176 5.518.004 10 4.492 9.997 10.006-.003 5.511-4.488 9.994-9.997 9.994h-.006Z"></path></g><defs><clipPath id="fpa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-undo";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Undo);
}
