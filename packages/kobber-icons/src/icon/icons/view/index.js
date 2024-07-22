export class View extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fwa)"><path fill="currentColor" d="M9.868 16.25c-3.61 0-7.196-2.534-9.349-4.904a2.007 2.007 0 0 1-.002-2.694C2.671 6.282 6.261 3.75 9.88 3.75h.253c3.607 0 7.195 2.532 9.35 4.9.692.77.693 1.928.001 2.695-2.155 2.372-5.747 4.905-9.37 4.905h-.245ZM9.878 5c-3.21 0-6.461 2.32-8.434 4.49a.758.758 0 0 0 .002 1.018c1.971 2.17 5.222 4.491 8.433 4.491h.222c3.223 0 6.48-2.32 8.455-4.493a.758.758 0 0 0-.002-1.017C16.581 7.32 13.327 5 10.118 5h-.24Z"></path><path fill="currentColor" d="M9.998 13.748a3.726 3.726 0 0 1-2.651-1.099 3.721 3.721 0 0 1-1.098-2.652A3.754 3.754 0 0 1 10 6.248c1.002 0 1.944.39 2.652 1.098a3.723 3.723 0 0 1 1.098 2.65 3.726 3.726 0 0 1-1.099 2.655 3.727 3.727 0 0 1-2.652 1.097ZM10 7.498a2.503 2.503 0 0 0-2.5 2.5c0 .667.26 1.295.732 1.767a2.484 2.484 0 0 0 1.767.732c.668 0 1.296-.26 1.768-.731.471-.472.732-1.1.732-1.768 0-.67-.26-1.297-.732-1.769A2.485 2.485 0 0 0 10 7.5Z"></path></g><defs><clipPath id="fwa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-view";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, View);
}
