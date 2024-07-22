export class ArrowLeft extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#aja)"><path fill="currentColor" d="M9.375 19.375a.619.619 0 0 1-.442-.183l-8.75-8.75a.618.618 0 0 1-.136-.204l-.008-.022a.625.625 0 0 1 .146-.659L8.933.808a.62.62 0 0 1 .884 0A.619.619 0 0 1 10 1.25a.619.619 0 0 1-.183.442L2.133 9.375h17.242a.625.625 0 0 1 0 1.25H2.135l7.683 7.683a.627.627 0 0 1-.443 1.067Z"></path></g><defs><clipPath id="aja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-arrow_left";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ArrowLeft);
}
