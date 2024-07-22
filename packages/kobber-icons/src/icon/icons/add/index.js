export class Add extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#aaa)"><path fill="currentColor" d="M10 20a.625.625 0 0 1-.625-.625v-8.75H.625a.625.625 0 1 1 0-1.25h8.75V.625a.625.625 0 0 1 1.25 0v8.75h8.75a.625.625 0 1 1 0 1.25h-8.75v8.75A.624.624 0 0 1 10 20Z"></path></g><defs><clipPath id="aaa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-add";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Add);
}
