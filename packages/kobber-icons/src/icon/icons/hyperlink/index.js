export class Hyperlink extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cja)"><path fill="currentColor" d="M4.378 17.914a4.345 4.345 0 0 1-3.094-1.279 4.344 4.344 0 0 1-1.279-3.093c0-1.17.454-2.269 1.28-3.094L5.261 6.47a4.346 4.346 0 0 1 3.096-1.282c1.169 0 2.266.453 3.09 1.275a4.354 4.354 0 0 1 .449 5.67.627.627 0 0 1-1.04-.04.621.621 0 0 1-.074-.473.621.621 0 0 1 .103-.222 3.11 3.11 0 0 0-.32-4.05 3.104 3.104 0 0 0-2.208-.911 3.107 3.107 0 0 0-2.212.916L2.168 11.33a3.128 3.128 0 0 0 0 4.419 3.1 3.1 0 0 0 2.21.913c.835 0 1.62-.324 2.21-.913l.776-.777a.619.619 0 0 1 .884 0 .62.62 0 0 1 0 .884l-.777.776a4.34 4.34 0 0 1-3.093 1.281Z"></path><path fill="currentColor" d="M11.648 15.02a4.346 4.346 0 0 1-3.09-1.28 4.353 4.353 0 0 1-.447-5.668.627.627 0 0 1 1.113.513.621.621 0 0 1-.102.222 3.11 3.11 0 0 0 .319 4.049 3.104 3.104 0 0 0 2.208.913 3.106 3.106 0 0 0 2.212-.917l3.977-3.977c.59-.59.915-1.375.915-2.21s-.325-1.62-.915-2.21a3.104 3.104 0 0 0-2.21-.913c-.835 0-1.62.324-2.21.913l-.625.625a.62.62 0 0 1-.883 0 .619.619 0 0 1-.183-.442c0-.166.065-.324.183-.441l.625-.625a4.347 4.347 0 0 1 3.093-1.28c1.17 0 2.269.454 3.094 1.28a4.345 4.345 0 0 1 1.281 3.093 4.345 4.345 0 0 1-1.281 3.093l-3.978 3.978a4.345 4.345 0 0 1-3.092 1.283l-.004.001Z"></path></g><defs><clipPath id="cja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-hyperlink";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Hyperlink);
}
