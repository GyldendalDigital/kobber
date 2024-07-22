export class ParagraphRight extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#dta)"><path fill="currentColor" d="M1.667 3.123a.625.625 0 0 1 0-1.25h17.5a.625.625 0 0 1 0 1.25h-17.5Zm2.5 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 0 1 0 1.25h-15Zm-3.75 3.75a.625.625 0 0 1 0-1.25h18.75a.625.625 0 0 1 0 1.25H.417Zm3.75 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 1 1 0 1.25h-15Zm-2.5 3.75a.625.625 0 0 1 0-1.25h17.5a.625.625 0 1 1 0 1.25h-17.5Z"></path></g><defs><clipPath id="dta"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-paragraph_right";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ParagraphRight);
}
