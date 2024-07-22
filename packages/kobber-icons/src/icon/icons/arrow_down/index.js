export class ArrowDown extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#aia)"><path fill="currentColor" d="M10.042 20H9.79c-.084 0-.168-.083-.168-.167l-8.789-8.75a.635.635 0 0 1-.167-.416c0-.167.083-.334.167-.417a.46.46 0 0 1 .419-.25.64.64 0 0 1 .418.167l7.701 7.666V.667c0-.417.335-.667.67-.667s.67.25.67.667v17.25l7.7-7.667a.641.641 0 0 1 .419-.167.64.64 0 0 1 .418.167c.084.083.168.25.168.417a.635.635 0 0 1-.168.416l-8.789 8.75c-.084.084-.167.084-.167.167h-.251Z"></path></g><defs><clipPath id="aia"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-arrow_down";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ArrowDown);
}
