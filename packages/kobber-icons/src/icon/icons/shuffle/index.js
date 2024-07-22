export class Shuffle extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ewa)"><path fill="currentColor" d="M8.417 8.125a.626.626 0 0 1-.502-.253 4.052 4.052 0 0 0-2.938-1.624H.625a.625.625 0 0 1 0-1.25H5a5.303 5.303 0 0 1 3.918 2.13.622.622 0 0 1-.501.997Z"></path><path fill="currentColor" d="M.625 14.998a.625.625 0 1 1 0-1.25H5c2.663 0 4.408-3.956 4.426-3.996.083-.194 2.079-4.754 5.574-4.754h2.866l-1.433-1.433a.619.619 0 0 1-.184-.442.619.619 0 0 1 .386-.577.624.624 0 0 1 .68.136l2.5 2.5a.617.617 0 0 1 .137.204l.008.021a.59.59 0 0 1 0 .431l-.004.014a.636.636 0 0 1-.14.214l-2.5 2.499a.62.62 0 0 1-.883 0 .619.619 0 0 1-.183-.442c0-.166.065-.324.183-.441l1.434-1.434H15c-2.667 0-4.408 3.957-4.426 3.997-.083.194-2.082 4.753-5.574 4.753H.625Z"></path><path fill="currentColor" d="M16.875 17.498a.625.625 0 0 1-.442-1.066l1.434-1.434H15l-.047-.001a5.292 5.292 0 0 1-3.871-2.124.627.627 0 0 1 .501-.997c.197 0 .384.094.502.252a4.048 4.048 0 0 0 2.938 1.621h2.844l-1.434-1.433a.622.622 0 0 1 .442-1.067.625.625 0 0 1 .442.183l2.5 2.5a.617.617 0 0 1 .136.205l.008.021a.6.6 0 0 1 0 .43l-.004.014a.623.623 0 0 1-.14.214l-2.5 2.5a.624.624 0 0 1-.442.182Z"></path></g><defs><clipPath id="ewa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-shuffle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Shuffle);
}
