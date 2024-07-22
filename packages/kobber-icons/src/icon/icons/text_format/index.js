export class TextFormat extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fja)"><path fill="currentColor" d="M9.063 14.373a.625.625 0 0 1 0-1.25h.312V6.875H7.5V7.5a.625.625 0 0 1-1.25 0v-.94a.943.943 0 0 1 .936-.935h2.782L10 5.623l.033.002h2.78a.942.942 0 0 1 .937.936V7.5a.625.625 0 1 1-1.25 0v-.625h-1.875v6.248h.313a.625.625 0 1 1 0 1.25H9.062ZM2.5 13.748a.625.625 0 0 1-.625-.625v-6.25a.625.625 0 0 1 1.25 0v6.25a.625.625 0 0 1-.625.625Zm-1.406-8.75A1.095 1.095 0 0 1 0 3.904V1.093C0 .489.49-.002 1.094-.002h2.812C4.509-.002 5 .49 5 1.093v2.811c0 .604-.49 1.094-1.094 1.094H1.094Zm2.656-1.25v-2.5h-2.5v2.5h2.5Zm-2.656 16.25A1.095 1.095 0 0 1 0 18.904v-2.811c0-.604.49-1.095 1.094-1.095h2.812c.603 0 1.094.491 1.094 1.095v2.811c0 .604-.49 1.094-1.094 1.094H1.094Zm2.656-1.25v-2.5h-2.5v2.5h2.5Zm13.75-5a.625.625 0 0 1-.625-.625v-6.25a.625.625 0 1 1 1.25 0v6.25a.625.625 0 0 1-.625.625ZM6.875 3.123a.625.625 0 0 1 0-1.25h6.25a.625.625 0 1 1 0 1.25h-6.25Zm0 15a.625.625 0 0 1 0-1.25h6.25a.625.625 0 1 1 0 1.25h-6.25Zm9.219-13.125A1.095 1.095 0 0 1 15 3.904V1.093c0-.604.49-1.095 1.094-1.095h2.812C19.509-.002 20 .49 20 1.093v2.811c0 .604-.49 1.094-1.094 1.094h-2.812Zm2.656-1.25v-2.5h-2.5v2.5h2.5Zm-2.656 16.25A1.095 1.095 0 0 1 15 18.904v-2.811c0-.604.49-1.095 1.094-1.095h2.812c.603 0 1.094.491 1.094 1.095v2.811c0 .604-.49 1.094-1.094 1.094h-2.812Zm2.656-1.25v-2.5h-2.5v2.5h2.5Z"></path></g><defs><clipPath id="fja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-text_format";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TextFormat);
}
