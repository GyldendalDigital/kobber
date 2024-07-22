export class BookOpen extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ara)"><path fill="currentColor" d="M9.968 18.427a1.923 1.923 0 0 1-.631-.114 10.767 10.767 0 0 0-3.976-.755c-.984 0-1.958.133-2.895.395A1.96 1.96 0 0 1 0 16.052V4.108a1.958 1.958 0 0 1 1.37-1.87 12.105 12.105 0 0 1 3.955-.66c1.53 0 3.028.283 4.452.84a.61.61 0 0 0 .155.03.605.605 0 0 1 .136 0 .686.686 0 0 0 .174-.035 12.092 12.092 0 0 1 4.43-.835c1.356 0 2.693.224 3.973.665A1.95 1.95 0 0 1 20 4.106v11.947a1.954 1.954 0 0 1-.963 1.692 1.96 1.96 0 0 1-1.49.212 10.783 10.783 0 0 0-2.909-.398c-1.367 0-2.699.252-3.956.748a1.99 1.99 0 0 1-.714.12Zm-4.61-2.12c1.383 0 2.731.23 4.017.686V3.601a10.954 10.954 0 0 0-7.612-.177.718.718 0 0 0-.513.683v11.944a.713.713 0 0 0 .892.693 11.971 11.971 0 0 1 3.216-.438Zm5.267.686a11.956 11.956 0 0 1 4.013-.685c1.1 0 2.187.148 3.233.441a.715.715 0 0 0 .878-.696V4.108a.71.71 0 0 0-.497-.678 10.963 10.963 0 0 0-7.627.172v13.39Z"></path></g><defs><clipPath id="ara"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-book_open";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, BookOpen);
}
