export class Superscript extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#faa)"><path fill="currentColor" d="M13.75 19.998a.619.619 0 0 1-.442-.183l-6.12-6.12-6.121 6.12a.62.62 0 0 1-.884 0 .627.627 0 0 1 0-.884l6.121-6.121-6.12-6.12A.619.619 0 0 1 0 6.248c0-.166.065-.324.183-.441a.619.619 0 0 1 .442-.184c.167 0 .324.065.442.184l6.12 6.12 6.121-6.12a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.441.619.619 0 0 1-.183.442L8.07 12.81l6.12 6.122a.627.627 0 0 1-.441 1.066Zm3.125-13.75a.626.626 0 0 1-.488-1.015l2.11-2.637c.163-.204.253-.461.253-.723a.625.625 0 0 0-1.25 0 .625.625 0 0 1-1.25 0c0-1.034.84-1.875 1.875-1.875C19.159-.002 20 .84 20 1.873c0 .545-.188 1.078-.527 1.503l-1.297 1.622h1.199a.625.625 0 0 1 0 1.25h-2.5Z"></path></g><defs><clipPath id="faa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-superscript";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Superscript);
}
