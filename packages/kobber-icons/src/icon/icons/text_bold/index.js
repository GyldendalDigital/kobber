export class TextBold extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#fia)"><path fill="currentColor" d="M3.125 19.998a.625.625 0 0 1 0-1.25H5v-17.5H3.125a.625.625 0 0 1 0-1.25h8.75a4.38 4.38 0 0 1 4.375 4.375 4.4 4.4 0 0 1-2.194 3.791 6.283 6.283 0 0 1 3.444 5.584 6.258 6.258 0 0 1-6.25 6.25H3.125Zm8.125-1.25c2.757 0 5-2.243 5-5 0-2.756-2.243-5-5-5h-5v10h5Zm.625-11.25A3.128 3.128 0 0 0 15 4.373a3.128 3.128 0 0 0-3.125-3.125H6.25v6.25h5.625Z"></path></g><defs><clipPath id="fia"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-text_bold";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TextBold);
}
