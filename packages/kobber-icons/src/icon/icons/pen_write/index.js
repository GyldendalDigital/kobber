export class PenWrite extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dxa)"><path fill="currentColor" d="M7.46 12.85a.628.628 0 0 1-.617-.714l.441-3.094a.628.628 0 0 1 .177-.354L15.416.733a2.483 2.483 0 0 1 1.767-.731c.669 0 1.297.26 1.768.731a2.502 2.502 0 0 1 0 3.536l-7.955 7.955a.628.628 0 0 1-.353.177l-3.094.442a.79.79 0 0 1-.088.006Zm.738-1.362 2.062-.295 7.807-7.808A1.25 1.25 0 0 0 16.3 1.618L8.492 9.426l-.294 2.062Z"></path><path fill="currentColor" d="M2.183 20.002a1.877 1.877 0 0 1-1.875-1.875v-12.5a1.877 1.877 0 0 1 1.875-1.875h6.25a.625.625 0 0 1 0 1.25h-6.25a.625.625 0 0 0-.625.625v12.5c0 .345.28.625.625.625h12.5a.625.625 0 0 0 .625-.625v-6.25a.625.625 0 0 1 1.25 0v6.25a1.877 1.877 0 0 1-1.875 1.875h-12.5Z"></path></g><defs><clipPath id="dxa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-pen_write";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, PenWrite);
}
