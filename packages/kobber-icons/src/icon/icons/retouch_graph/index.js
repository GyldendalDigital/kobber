export class RetouchGraph extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#ena)"><path fill="currentColor" d="M17.5 20a.625.625 0 0 1-.442-1.067l.809-.808H2.5a.595.595 0 0 1-.21-.038.617.617 0 0 1-.282-.203l-.021-.028a.588.588 0 0 1-.085-.175l-.008-.032a.493.493 0 0 1-.016-.108l-.003-.041V2.134l-.808.809a.62.62 0 0 1-.884-.001A.619.619 0 0 1 0 2.5c0-.167.065-.324.183-.442L2.058.183a.617.617 0 0 1 .66-.143l.016.006a.61.61 0 0 1 .208.138l1.875 1.874a.622.622 0 0 1 0 .884.62.62 0 0 1-.884 0l-.808-.809v14.479a13.007 13.007 0 0 0 3.556-2.09 2.495 2.495 0 0 1-.431-1.397c0-1.378 1.122-2.5 2.5-2.5.427 0 .838.107 1.207.313.463-.769.843-1.584 1.135-2.432a16.953 16.953 0 0 1 1.596-3.421 2.497 2.497 0 0 1 3.105-3.7A5.63 5.63 0 0 1 19.361.003a.63.63 0 0 1 .598.85.623.623 0 0 1-.569.4 4.377 4.377 0 0 0-2.62.952c.298.42.459.923.46 1.44 0 1.378-1.122 2.5-2.5 2.5-.373 0-.74-.084-1.073-.244a15.73 15.73 0 0 0-1.381 3.007 14.105 14.105 0 0 1-1.395 2.913c.242.393.37.84.37 1.302 0 1.379-1.122 2.5-2.5 2.5-.39 0-.772-.091-1.12-.267a14.351 14.351 0 0 1-2.161 1.517h12.397l-.809-.808a.621.621 0 0 1 .203-1.019.621.621 0 0 1 .68.137l1.876 1.875a.617.617 0 0 1 .136.204l.008.022a.608.608 0 0 1 0 .431l-.004.013a.623.623 0 0 1-.14.214l-1.875 1.875A.62.62 0 0 1 17.5 20Zm-8.75-8.125a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm5.978-9.48a1.251 1.251 0 0 0 0 2.5 1.251 1.251 0 0 0 0-2.5Z"></path></g><defs><clipPath id="ena"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-retouch_graph";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, RetouchGraph);
}
