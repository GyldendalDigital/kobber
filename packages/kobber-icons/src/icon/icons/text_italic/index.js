export class TextItalic extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#fka)"><path fill="currentColor" d="M.625 19.998a.625.625 0 0 1 0-1.25h4l9.333-17.5h-3.333a.625.625 0 1 1 0-1.25h8.75a.625.625 0 1 1 0 1.25h-4l-9.333 17.5h3.333a.625.625 0 1 1 0 1.25H.625Z"></path></g><defs><clipPath id="fka"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-text_italic";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TextItalic);
}
