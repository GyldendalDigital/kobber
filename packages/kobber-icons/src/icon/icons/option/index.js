export class Option extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><path fill="currentColor" d="M2.813 12.832A2.816 2.816 0 0 1 0 10.019a2.816 2.816 0 0 1 2.813-2.812 2.816 2.816 0 0 1 2.812 2.812 2.816 2.816 0 0 1-2.813 2.813Zm0-4.375a1.564 1.564 0 0 0-1.563 1.562c0 .862.7 1.563 1.563 1.563a1.564 1.564 0 0 0 1.104-2.667 1.564 1.564 0 0 0-1.104-.458Zm14.375 4.375a2.816 2.816 0 0 1-2.813-2.813 2.816 2.816 0 0 1 2.813-2.812A2.816 2.816 0 0 1 20 10.019a2.816 2.816 0 0 1-2.813 2.813Zm0-4.375a1.564 1.564 0 0 0-1.563 1.562c0 .862.7 1.563 1.563 1.563a1.564 1.564 0 0 0 1.104-2.667 1.564 1.564 0 0 0-1.105-.458Zm-7.375 4.668A2.816 2.816 0 0 1 7 10.312 2.816 2.816 0 0 1 9.813 7.5a2.816 2.816 0 0 1 2.812 2.813 2.816 2.816 0 0 1-2.813 2.812Zm0-4.375a1.564 1.564 0 0 0-1.563 1.563c0 .861.7 1.562 1.563 1.562a1.564 1.564 0 0 0 1.104-2.667 1.564 1.564 0 0 0-1.104-.458Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-option";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Option);
}
