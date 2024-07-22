export class NotebookPencil extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dma)"><path fill="currentColor" d="M1.872 20.017a1.877 1.877 0 0 1-1.875-1.875V1.892A1.877 1.877 0 0 1 1.872.019h10a1.877 1.877 0 0 1 1.875 1.875.625.625 0 1 1-1.25 0 .625.625 0 0 0-.625-.625H3.747v17.5h8.125c.345 0 .625-.28.625-.626a.625.625 0 0 1 1.25 0 1.876 1.876 0 0 1-1.875 1.875h-10Zm0-18.75a.625.625 0 0 0-.625.626v16.25c0 .345.28.624.625.624h.625v-17.5h-.625ZM17.5 20.018a2.503 2.503 0 0 1-2.5-2.5v-1.824a.557.557 0 0 1 0-.103V5.07l-.003-.051a.63.63 0 0 1 .07-.286L16.925.396a.626.626 0 0 1 1.15 0l1.874 4.376c.034.077.051.16.051.246v12.5c0 1.379-1.122 2.5-2.5 2.5Zm-1.25-2.5a1.251 1.251 0 0 0 2.5 0v-1.25h-2.5v1.25Zm2.5-2.5V5.643h-2.5v9.375h2.5Zm-.323-10.625L17.5 2.229l-.927 2.164h1.854Z"></path><path fill="currentColor" d="M5.622 8.768a.625.625 0 0 1-.625-.625v-3.75a.625.625 0 0 1 .625-.625h5a.625.625 0 0 1 .625.625v3.75a.625.625 0 0 1-.625.625h-5Zm4.375-1.25v-2.5h-3.75v2.5h3.75Z"></path></g><defs><clipPath id="dma"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-notebook_pencil";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, NotebookPencil);
}
