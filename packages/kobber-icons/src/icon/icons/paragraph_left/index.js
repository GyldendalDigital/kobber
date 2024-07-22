export class ParagraphLeft extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M.625 3.123a.625.625 0 0 1 0-1.25h17.5a.625.625 0 1 1 0 1.25H.625Zm0 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 1 1 0 1.25h-15Zm0 3.75a.625.625 0 0 1 0-1.25h18.75a.625.625 0 1 1 0 1.25H.625Zm0 3.75a.625.625 0 0 1 0-1.25h15a.625.625 0 1 1 0 1.25h-15Zm0 3.75a.625.625 0 0 1 0-1.25h17.5a.625.625 0 1 1 0 1.25H.625Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-paragraph_left";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ParagraphLeft);
}
