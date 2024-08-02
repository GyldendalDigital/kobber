export class ArrowBack extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#aha)"><path fill="currentColor" d="M19.376 17.503a.625.625 0 0 1-.625-.625V9.375a.625.625 0 0 0-.625-.625H2.134l3.309 3.31a.62.62 0 0 1 0 .883.624.624 0 0 1-.884 0L.183 8.567a.617.617 0 0 1-.135-.204L.039 8.34a.625.625 0 0 1 .001-.434l.006-.017a.625.625 0 0 1 .138-.208L4.56 3.307A.619.619 0 0 1 5 3.123c.167 0 .325.065.442.184a.62.62 0 0 1 .183.442.62.62 0 0 1-.183.441L2.134 7.5h15.992A1.876 1.876 0 0 1 20 9.375v7.503a.626.626 0 0 1-.625.625Z"></path></g><defs><clipPath id="aha"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-arrow_back";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ArrowBack);
}
