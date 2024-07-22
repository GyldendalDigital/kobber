export class Glasses extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><path fill="currentColor" d="M15.625 18.75c-2.172 0-4.02-1.625-4.327-3.75H8.701c-.307 2.125-2.154 3.75-4.327 3.75A4.38 4.38 0 0 1 0 14.375v-10A3.128 3.128 0 0 1 3.125 1.25h.625a.625.625 0 0 1 0 1.25h-.625A1.877 1.877 0 0 0 1.25 4.375v6.944A4.34 4.34 0 0 1 4.375 10c2.173 0 4.02 1.625 4.327 3.75h2.597c.307-2.125 2.154-3.75 4.327-3.75a4.34 4.34 0 0 1 3.125 1.32V4.374A1.878 1.878 0 0 0 16.875 2.5h-.625a.625.625 0 1 1 0-1.25h.625A3.128 3.128 0 0 1 20 4.375v10a4.38 4.38 0 0 1-4.375 4.375Zm0-7.5a3.128 3.128 0 0 0-3.125 3.125 3.128 3.128 0 0 0 3.125 3.125 3.128 3.128 0 0 0 3.125-3.125 3.128 3.128 0 0 0-3.125-3.125Zm-11.25 0a3.128 3.128 0 0 0-3.125 3.125A3.128 3.128 0 0 0 4.375 17.5 3.128 3.128 0 0 0 7.5 14.375a3.128 3.128 0 0 0-3.125-3.125Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-glasses";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Glasses);
}
