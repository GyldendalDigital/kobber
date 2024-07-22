export class ParagraphCenter extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dra)"><path fill="currentColor" d="M1.867 3.123a.625.625 0 0 1 0-1.25h16.25a.625.625 0 1 1 0 1.25H1.867Zm2.5 3.75a.625.625 0 0 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.367Zm-3.75 3.75a.625.625 0 0 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.617Zm3.75 3.75a.625.625 0 0 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.367Zm-2.5 3.75a.625.625 0 0 1 0-1.25h16.25a.625.625 0 1 1 0 1.25H1.867Z"></path></g><defs><clipPath id="dra"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-paragraph_center";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ParagraphCenter);
}
