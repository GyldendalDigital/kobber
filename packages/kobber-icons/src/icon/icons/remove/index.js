export class Remove extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ema)"><path fill="currentColor" d="M10 19.999c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10Zm0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75-3.925-8.75-8.75-8.75Z"></path><path fill="currentColor" d="M13.75 14.374a.621.621 0 0 1-.442-.183L10 10.883l-3.308 3.309a.622.622 0 0 1-1.066-.442c0-.166.065-.325.182-.443L9.117 10 5.808 6.691a.619.619 0 0 1-.183-.442c0-.167.065-.324.183-.441a.619.619 0 0 1 .442-.184c.167 0 .324.065.442.184L10 9.116l3.308-3.308a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.441.619.619 0 0 1-.183.442l-3.309 3.308 3.309 3.308a.627.627 0 0 1-.442 1.067Z"></path></g><defs><clipPath id="ema"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-remove";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Remove);
}
