export class Redo extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#eja)"><path fill="currentColor" d="M9.991 19.998c-5.509 0-9.993-4.483-9.997-9.994a9.936 9.936 0 0 1 2.928-7.07A9.93 9.93 0 0 1 9.985-.002c3.657 0 7.02 2.032 8.76 5.175V.623a.625.625 0 1 1 1.25 0v6.25a.625.625 0 0 1-.626.625h-6.248a.625.625 0 1 1 0-1.25h4.773a8.716 8.716 0 0 0-7.903-5 8.691 8.691 0 0 0-6.185 2.57 8.695 8.695 0 0 0-2.562 6.185c.002 4.822 3.927 8.745 8.747 8.745.35 0 .63.28.63.625a.629.629 0 0 1-.63.625Z"></path></g><defs><clipPath id="eja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-redo";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Redo);
}
