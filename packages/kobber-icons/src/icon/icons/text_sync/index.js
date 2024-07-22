export class TextSync extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fma)"><path fill="currentColor" d="M14.5 20.005c-.582 0-1.16-.097-1.71-.287A5.244 5.244 0 0 1 10 17.48v1.27a.625.625 0 0 1-1.25 0v-3.124A.625.625 0 0 1 9.375 15H12.5a.625.625 0 1 1 0 1.25h-1.723a4.021 4.021 0 0 0 3.722 2.502c.613 0 1.207-.139 1.764-.412a3.993 3.993 0 0 0 2.034-2.308.625.625 0 0 1 1.182.404 5.234 5.234 0 0 1-2.666 3.025 5.178 5.178 0 0 1-2.313.543Zm1.75-6.253a.625.625 0 0 1 0-1.25h1.723A4.021 4.021 0 0 0 14.258 10a4.023 4.023 0 0 0-3.805 2.717.623.623 0 0 1-1.012.279.625.625 0 0 1-.171-.683 5.273 5.273 0 0 1 6.69-3.279 5.244 5.244 0 0 1 2.79 2.238v-1.27a.625.625 0 1 1 1.25-.001v3.125a.625.625 0 0 1-.625.625H16.25Zm-13.125-7.5a.625.625 0 0 1 0-1.25h8.75a.625.625 0 1 1 0 1.25h-8.75Zm0 3.75a.625.625 0 1 1 0-1.25h5a.625.625 0 0 1 0 1.25h-5Zm0 3.75a.625.625 0 1 1 0-1.25H6.25a.625.625 0 0 1 0 1.25H3.125Z"></path><path fill="currentColor" d="M1.875 17.502A1.876 1.876 0 0 1 0 15.627V1.877A1.877 1.877 0 0 1 1.875.002h8.857c.501 0 .971.195 1.325.548l2.394 2.393c.354.355.549.826.549 1.326v1.983a.625.625 0 1 1-1.25 0V4.269a.632.632 0 0 0-.182-.441l-2.394-2.394a.623.623 0 0 0-.441-.182H1.874a.625.625 0 0 0-.625.625v13.75c0 .345.28.625.625.625H6.25a.625.625 0 0 1 0 1.25H1.875Z"></path></g><defs><clipPath id="fma"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-text_sync";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TextSync);
}
