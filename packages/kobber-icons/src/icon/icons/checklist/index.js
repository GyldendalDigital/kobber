export class Checklist extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#aza)"><path fill="currentColor" d="M1.875 19.999A1.877 1.877 0 0 1 0 18.124V1.874A1.877 1.877 0 0 1 1.875-.001h16.25A1.877 1.877 0 0 1 20 1.874v16.25a1.876 1.876 0 0 1-1.875 1.875H1.875Zm0-18.75a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h16.25a.625.625 0 0 0 .625-.625V1.874a.625.625 0 0 0-.625-.625H1.875Z"></path><path fill="currentColor" d="M6.25 9.374a.62.62 0 0 1-.442-.183l-2.5-2.5a.619.619 0 0 1-.183-.442c0-.167.065-.324.183-.441a.619.619 0 0 1 .442-.184c.167 0 .324.065.442.184l1.99 1.99L9.5 3.373a.628.628 0 0 1 1.12.287.622.622 0 0 1-.12.463l-3.75 5a.625.625 0 0 1-.456.248l-.044.002ZM11.875 7.5a.625.625 0 1 1 0-1.25h3.75a.625.625 0 1 1 0 1.25h-3.75ZM6.25 16.874a.62.62 0 0 1-.442-.183l-2.5-2.5a.627.627 0 0 1 .442-1.068c.167 0 .324.065.442.184l1.99 1.99L9.5 10.873a.63.63 0 0 1 1.038.057.625.625 0 0 1-.038.693l-3.75 5a.625.625 0 0 1-.5.251ZM11.875 15a.625.625 0 1 1 0-1.25h3.75a.625.625 0 0 1 0 1.25h-3.75Z"></path></g><defs><clipPath id="aza"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-checklist";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Checklist);
}
