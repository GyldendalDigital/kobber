export class Bookmark extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><path fill="currentColor" d="M11.875 19.75c-.234 0-.463-.066-.662-.19L7.5 17.238l-3.712 2.32a1.248 1.248 0 0 1-1.913-1.055V4.625A4.38 4.38 0 0 1 6.25.25h7.5a4.38 4.38 0 0 1 4.375 4.375V7.75c0 .69-.56 1.25-1.25 1.25h-3.75v9.5c0 .334-.13.648-.367.884a1.241 1.241 0 0 1-.883.366ZM7.5 15.875a.63.63 0 0 1 .332.095l4.044 2.53-.001-13.875A1.876 1.876 0 0 1 13.75 2.75a.625.625 0 1 1 0 1.25.625.625 0 0 0-.625.625V7.75h3.75V4.625A3.128 3.128 0 0 0 13.75 1.5h-7.5a3.128 3.128 0 0 0-3.125 3.125V18.5l4.044-2.53a.621.621 0 0 1 .331-.095Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-bookmark";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Bookmark);
}
