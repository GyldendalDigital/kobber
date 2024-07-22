export class Close extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bga)"><path fill="currentColor" d="M19.375 20a.619.619 0 0 1-.442-.184L10 10.883l-8.933 8.933a.62.62 0 0 1-.884 0 .627.627 0 0 1 0-.884l8.934-8.934L.183 1.066A.619.619 0 0 1 0 .624C0 .457.065.3.183.182A.619.619 0 0 1 .625 0c.167 0 .324.065.442.183L10 9.115 18.933.182a.62.62 0 0 1 .884 0 .622.622 0 0 1 0 .884l-8.934 8.933 8.934 8.934a.627.627 0 0 1-.442 1.066Z"></path></g><defs><clipPath id="bga"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-close";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Close);
}
