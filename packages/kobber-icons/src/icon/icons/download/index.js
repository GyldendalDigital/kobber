export class Download extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#boa)"><path fill="currentColor" d="M10 13.75a.629.629 0 0 1-.216-.04l-.018-.006a.61.61 0 0 1-.208-.137L5.81 9.817a.619.619 0 0 1-.183-.442c0-.167.065-.324.183-.442a.619.619 0 0 1 .442-.183c.167 0 .324.065.442.183l2.683 2.684V3.125a.625.625 0 0 1 1.25 0v8.49l2.683-2.683a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.442l-3.75 3.75a.636.636 0 0 1-.205.136l-.022.009a.605.605 0 0 1-.215.039Z"></path><path fill="currentColor" d="M3.126 17.5a3.128 3.128 0 0 1-3.125-3.125v-1.25a.625.625 0 1 1 1.25 0v1.25a1.877 1.877 0 0 0 1.875 1.875h13.75a1.876 1.876 0 0 0 1.875-1.875v-1.25a.625.625 0 1 1 1.25 0v1.25a3.128 3.128 0 0 1-3.125 3.125H3.126Z"></path></g><defs><clipPath id="boa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-download";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Download);
}
