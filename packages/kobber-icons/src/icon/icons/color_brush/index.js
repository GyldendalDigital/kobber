export class ColorBrush extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bha)"><path fill="currentColor" d="M2.09 19.856c-.46 0-.92-.04-1.374-.12a.62.62 0 0 1-.503-.754.622.622 0 0 1 .159-.293c.006-.007 1.017-1.149 1.128-3.936a3.785 3.785 0 0 1 1.086-2.699 3.762 3.762 0 0 1 3.557-.893l8.491-9.987A2.918 2.918 0 0 1 16.867.145a2.914 2.914 0 0 1 2.236 1.032 2.91 2.91 0 0 1 .69 2.136 2.91 2.91 0 0 1-1.022 2L8.79 13.85a3.762 3.762 0 0 1-.883 3.484 8.014 8.014 0 0 1-5.816 2.52Zm-.2-1.254a6.757 6.757 0 0 0 5.103-2.122 2.508 2.508 0 0 0-.001-3.407 2.508 2.508 0 0 0-1.83-.794c-.635 0-1.24.238-1.704.67a2.547 2.547 0 0 0-.709 1.817c-.073 1.863-.5 3.106-.858 3.836Zm5.498-6.975c.374.261.695.587.952.964l1.956-1.673L9.05 9.671l-1.662 1.955Zm3.861-1.525 6.71-5.74c.343-.293.552-.7.588-1.149a1.674 1.674 0 0 0-.49-1.326 1.673 1.673 0 0 0-1.19-.493 1.671 1.671 0 0 0-1.281.59L9.862 8.716l1.387 1.386Z"></path></g><defs><clipPath id="bha"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-color_brush";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ColorBrush);
}
