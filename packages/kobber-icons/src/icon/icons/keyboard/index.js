export class Keyboard extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#cpa)"><path fill="currentColor" d="M3.125 20A3.128 3.128 0 0 1 0 16.875v-5A3.128 3.128 0 0 1 3.125 8.75H5v-.625A4.38 4.38 0 0 1 9.375 3.75H12.5A3.128 3.128 0 0 0 15.625.625a.625.625 0 0 1 1.25 0A4.38 4.38 0 0 1 12.5 5H9.375A3.128 3.128 0 0 0 6.25 8.125v.625h10.625A3.128 3.128 0 0 1 20 11.875v5A3.128 3.128 0 0 1 16.875 20H3.125Zm0-10c-1.034 0-1.875.84-1.875 1.875v5c0 1.034.84 1.875 1.875 1.875h13.75c1.034 0 1.875-.84 1.875-1.875v-5c0-1.034-.84-1.875-1.875-1.875H3.125Z"></path><path fill="currentColor" d="M5.625 12.5a.625.625 0 0 1 0-1.25h1.25c.345 0 .625.28.625.625s-1.875.625-1.875.625Zm7.5 0a.625.625 0 0 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25Zm-3.75 0a.625.625 0 0 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25ZM3.75 15a.625.625 0 0 1 0-1.25H5A.625.625 0 0 1 5 15H3.75Zm3.75 0a.625.625 0 0 1 0-1.25h1.25a.625.625 0 0 1 0 1.25H7.5Zm3.75 0a.625.625 0 0 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25ZM15 15a.625.625 0 0 1 0-1.25h1.25a.625.625 0 0 1 0 1.25H15Zm-9.375 2.5a.625.625 0 0 1 0-1.25h8.75a.625.625 0 0 1 0 1.25h-8.75Z"></path></g><defs><clipPath id="cpa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-keyboard";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Keyboard);
}
