export class SynchronizeArrowClock extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#fca)"><path fill="currentColor" d="M11.25 18.958a.625.625 0 0 1 0-1.25c4.136 0 7.5-3.364 7.5-7.5 0-4.135-3.364-7.5-7.5-7.5-3.787 0-6.966 2.871-7.438 6.551l1.371-1.37a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.442L3.578 11.26a.61.61 0 0 1-.453.197.625.625 0 0 1-.467-.21L.183 8.773A.62.62 0 0 1 0 8.33c0-.167.065-.324.183-.442a.619.619 0 0 1 .442-.183c.167 0 .324.065.442.183l1.476 1.476c.429-4.42 4.194-7.907 8.707-7.907 4.825 0 8.75 3.925 8.75 8.75s-3.925 8.75-8.75 8.75Z"></path><path fill="currentColor" d="M10.625 11.456A.625.625 0 0 1 10 10.83V5.206a.625.625 0 1 1 1.25 0v5H15a.625.625 0 0 1 0 1.25h-4.375Z"></path></g><defs><clipPath id="fca"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-synchronize_arrow_clock";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, SynchronizeArrowClock);
}
