export class Bincular extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#aqa)"><path fill="currentColor" d="M15.625 19.587a4.38 4.38 0 0 1-4.375-4.375v-4.375h-2.5v4.375a4.38 4.38 0 0 1-4.375 4.375A4.38 4.38 0 0 1 0 15.212c0-.355.048-.72.14-1.085a.636.636 0 0 1 .016-.077L3.225 2.9A2.82 2.82 0 0 1 5.937.833 2.817 2.817 0 0 1 8.749 3.65v3.437h2.5V3.649A2.816 2.816 0 0 1 14.057.833 2.822 2.822 0 0 1 16.773 2.9l3.07 11.147a.514.514 0 0 1 .017.09c.093.361.14.723.14 1.075a4.38 4.38 0 0 1-4.375 4.375Zm0-7.5a3.128 3.128 0 0 0-3.125 3.125 3.128 3.128 0 0 0 3.125 3.125 3.128 3.128 0 0 0 3.125-3.125 3.128 3.128 0 0 0-3.125-3.125Zm-11.25 0a3.128 3.128 0 0 0-3.125 3.125 3.128 3.128 0 0 0 3.125 3.125A3.128 3.128 0 0 0 7.5 15.212a3.128 3.128 0 0 0-3.125-3.125ZM14.06 2.083a1.555 1.555 0 0 0-1.103.46 1.551 1.551 0 0 0-.457 1.105v8.508a4.341 4.341 0 0 1 3.125-1.32c.78 0 1.538.21 2.203.601L15.57 3.232a1.567 1.567 0 0 0-1.507-1.149l-.002-.312v.312Zm-9.685 8.754A4.34 4.34 0 0 1 7.5 12.156V3.649c0-.417-.162-.81-.457-1.106a1.553 1.553 0 0 0-2.05-.14c-.273.208-.47.499-.561.829l-2.259 8.205a4.336 4.336 0 0 1 2.202-.6Zm6.875-1.25v-1.25h-2.5v1.25h2.5Z"></path></g><defs><clipPath id="aqa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-bincular";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Bincular);
}
