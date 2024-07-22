export class SynchronizeArrowsSquare extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fba)"><path fill="currentColor" d="M6.251 17.708a3.128 3.128 0 0 1-3.125-3.125v-4.118l-2.058 2.058a.619.619 0 0 1-.884 0 .626.626 0 0 1 0-.884L3.31 8.514a.384.384 0 0 1 .048-.039.613.613 0 0 1 .788 0 .318.318 0 0 1 .047.038l3.125 3.125a.627.627 0 0 1-.681 1.02.618.618 0 0 1-.202-.135l-2.059-2.059v4.12a1.877 1.877 0 0 0 1.875 1.874h6.875a.625.625 0 0 1 0 1.25H6.251Zm10-5.625a.626.626 0 0 1-.466-.21l-3.1-3.1a.619.619 0 0 1 0-.884.624.624 0 0 1 .883 0l2.058 2.059V5.833a1.877 1.877 0 0 0-1.875-1.875H6.876a.625.625 0 1 1 0-1.25h6.875a3.129 3.129 0 0 1 3.125 3.125v4.114l2.059-2.059a.62.62 0 0 1 .883 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.442l-3.113 3.113a.611.611 0 0 1-.454.198Z"></path></g><defs><clipPath id="fba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-synchronize__arrows__square";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, SynchronizeArrowsSquare);
}
