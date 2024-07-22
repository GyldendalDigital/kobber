export class FolderBookmark extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bya)"><path fill="currentColor" d="M2.04 19.375a.605.605 0 0 1-.193-.03A2.054 2.054 0 0 1 0 17.341V2.5A1.877 1.877 0 0 1 1.875.625h3.75C6.658.625 7.5 1.465 7.5 2.5v.625h1.25V2.5A1.877 1.877 0 0 1 10.625.625h3.75A1.877 1.877 0 0 1 16.25 2.5v.625h.625A1.877 1.877 0 0 1 18.75 5v1.982c.262.092.5.242.7.442a1.858 1.858 0 0 1 .487 1.808L18.11 17.95a1.89 1.89 0 0 1-1.82 1.425l-14.252.001Zm14.252-1.25a.625.625 0 0 0 .604-.464l1.826-8.718a.713.713 0 0 0 .028-.192.62.62 0 0 0-.625-.626H16.25v2.5a.621.621 0 0 1-.625.625.628.628 0 0 1-.375-.125l-2.125-1.594L11 11.125a.627.627 0 0 1-.907-.171.622.622 0 0 1-.093-.329v-6.25H6.875a.625.625 0 0 1-.625-.625V2.5a.625.625 0 0 0-.625-.625h-3.75a.625.625 0 0 0-.625.625v14.833a.792.792 0 0 0 1.548.213l1.955-9.272a1.883 1.883 0 0 1 1.813-1.399h1.559a.625.625 0 0 1 0 1.25h-1.56a.63.63 0 0 0-.594.433l-1.954 9.27-.01.038a2 2 0 0 1-.092.26l12.377-.001Zm-5.667-15a.625.625 0 0 1 .625.625v5.625l1.5-1.125a.627.627 0 0 1 .75 0L15 9.375V2.5a.625.625 0 0 0-.625-.625h-3.75A.625.625 0 0 0 10 2.5v.625h.625Zm6.875 3.75V5a.625.625 0 0 0-.625-.625h-.625v2.5h1.25Z"></path></g><defs><clipPath id="bya"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-folder_bookmark";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FolderBookmark);
}
