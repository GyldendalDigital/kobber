export class Reload extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ela)"><path fill="currentColor" d="M11.26 18.95a8.724 8.724 0 0 1-7.394-4.047.625.625 0 0 1 1.054-.671 7.477 7.477 0 0 0 6.34 3.467 7.475 7.475 0 0 0 4.018-1.172c3.489-2.224 4.518-6.87 2.295-10.359a7.451 7.451 0 0 0-4.704-3.292 7.466 7.466 0 0 0-5.654.998 7.467 7.467 0 0 0-3.47 6.325v.366l1.433-1.433a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.441.619.619 0 0 1-.183.442l-2.489 2.488a.61.61 0 0 1-.453.198.625.625 0 0 1-.467-.211L.178 10.015a.62.62 0 0 1 0-.883.619.619 0 0 1 .442-.184c.167 0 .324.065.442.184l1.433 1.433v-.367A8.713 8.713 0 0 1 6.543 2.82a8.71 8.71 0 0 1 6.597-1.164 8.695 8.695 0 0 1 5.488 3.84c2.593 4.07 1.392 9.49-2.678 12.084a8.714 8.714 0 0 1-4.69 1.37Z"></path></g><defs><clipPath id="ela"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-reload";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Reload);
}
