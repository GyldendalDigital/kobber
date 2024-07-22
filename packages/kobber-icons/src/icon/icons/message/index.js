export class Message extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#dda)"><path fill="currentColor" d="M.623 20a.625.625 0 0 1-.565-.893l2.426-5.095A9.371 9.371 0 0 1 1.248 9.35C1.256 4.194 5.456 0 10.61 0h.028a9.38 9.38 0 0 1 4.95 1.413 9.31 9.31 0 0 1 4.176 5.834 9.312 9.312 0 0 1-1.164 7.078 9.312 9.312 0 0 1-5.832 4.18 9.34 9.34 0 0 1-6.782-.99L.893 19.94a.647.647 0 0 1-.27.06Zm9.988-18.75c-4.467 0-8.106 3.634-8.113 8.1a8.103 8.103 0 0 0 1.225 4.3.62.62 0 0 1 .034.598l-1.812 3.806 3.805-1.812a.622.622 0 0 1 .598.034 8.092 8.092 0 0 0 6.135 1.012 8.075 8.075 0 0 0 5.055-3.623c2.366-3.805 1.195-8.825-2.61-11.19a8.117 8.117 0 0 0-4.29-1.225h-.027Z"></path><path fill="currentColor" d="M6.872 7.5a.625.625 0 0 1 0-1.25h7.5a.625.625 0 0 1 0 1.25h-7.5ZM5.622 10a.625.625 0 0 1 0-1.25h10a.625.625 0 0 1 0 1.25h-10Zm1.25 2.5a.625.625 0 1 1 0-1.25h7.5a.625.625 0 1 1 0 1.25h-7.5Z"></path></g><defs><clipPath id="dda"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-message";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Message);
}
