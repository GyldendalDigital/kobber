export class FrameExpand extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#cba)"><path fill="currentColor" d="M19.38 6.875a.625.625 0 0 1-.626-.625V1.873a.625.625 0 0 0-.625-.625h-4.375a.625.625 0 0 1 0-1.25h4.375a1.877 1.877 0 0 1 1.875 1.875V6.25a.625.625 0 0 1-.625.625Zm-5.626 13.122a.625.625 0 1 1 0-1.25h4.375a.625.625 0 0 0 .625-.625V13.75a.625.625 0 0 1 1.25 0v4.372a1.877 1.877 0 0 1-1.875 1.875h-4.375ZM1.88 20a1.876 1.876 0 0 1-1.876-1.875V13.75a.625.625 0 1 1 1.25 0v4.375c0 .345.28.625.625.625h4.375a.625.625 0 1 1 0 1.25H1.88ZM.63 6.875a.625.625 0 0 1-.626-.625V1.873A1.877 1.877 0 0 1 1.88-.002h4.375a.625.625 0 0 1 0 1.25H1.88a.625.625 0 0 0-.625.625V6.25a.625.625 0 0 1-.625.625Z"></path></g><defs><clipPath id="cba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-frame_expand";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FrameExpand);
}
