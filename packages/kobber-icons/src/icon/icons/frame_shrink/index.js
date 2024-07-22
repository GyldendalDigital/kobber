export class FrameShrink extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cca)"><path fill="currentColor" d="M15 6.875A1.877 1.877 0 0 1 13.125 5V.623a.625.625 0 1 1 1.25 0V5c0 .345.28.625.625.625h4.375a.625.625 0 1 1 0 1.25H15ZM13.75 20a.624.624 0 0 1-.625-.625V15A1.876 1.876 0 0 1 15 13.125h4.376a.625.625 0 1 1 0 1.25H15a.624.624 0 0 0-.625.625v4.375a.624.624 0 0 1-.625.625Zm-7.5-.003a.625.625 0 0 1-.625-.625V15A.625.625 0 0 0 5 14.375H.626a.625.625 0 1 1 0-1.25H5A1.876 1.876 0 0 1 6.875 15v4.372a.625.625 0 0 1-.625.625ZM.626 6.875a.625.625 0 0 1 0-1.25H5A.625.625 0 0 0 5.625 5V.623a.625.625 0 0 1 1.25 0V5A1.877 1.877 0 0 1 5 6.875H.626Z"></path></g><defs><clipPath id="cca"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-frame_shrink";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FrameShrink);
}
