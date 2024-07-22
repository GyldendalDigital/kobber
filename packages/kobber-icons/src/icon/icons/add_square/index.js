export class AddSquare extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#aca)"><path fill="currentColor" d="M10 14.375a.625.625 0 0 1-.625-.625v-3.125H6.25a.625.625 0 1 1 0-1.25h3.125V6.25a.625.625 0 0 1 1.25 0v3.125h3.125a.625.625 0 1 1 0 1.25h-3.125v3.125a.624.624 0 0 1-.625.625Z"></path><path fill="currentColor" d="M3.125 20A3.128 3.128 0 0 1 0 16.875V3.125A3.128 3.128 0 0 1 3.125 0h13.75A3.128 3.128 0 0 1 20 3.125v13.75A3.128 3.128 0 0 1 16.875 20H3.125Zm0-18.75A1.877 1.877 0 0 0 1.25 3.125v13.75a1.877 1.877 0 0 0 1.875 1.875h13.75a1.876 1.876 0 0 0 1.875-1.875V3.125a1.876 1.876 0 0 0-1.875-1.875H3.125Z"></path></g><defs><clipPath id="aca"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-add_square";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AddSquare);
}
