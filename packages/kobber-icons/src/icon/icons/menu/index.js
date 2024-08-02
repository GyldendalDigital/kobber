export class Menu extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><path fill="currentColor" d="M1.875 15.627a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Zm0-5a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Zm0-5a.625.625 0 0 1 0-1.25h16.25a.625.625 0 0 1 0 1.25H1.875Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-menu";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Menu);
}
