export class NumberList extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dna)"><path fill="currentColor" d="M6.875 3.748a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25h-12.5Zm0 7.5a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25h-12.5Zm0 7.5a.625.625 0 0 1 0-1.25h12.5a.625.625 0 1 1 0 1.25h-12.5Zm-4.999 1.25c-.84 0-1.584-.566-1.808-1.375a.626.626 0 0 1 1.205-.332.627.627 0 0 0 1.23-.167.62.62 0 0 0-.388-.577.619.619 0 0 0-.24-.047.626.626 0 0 1 0-1.25.625.625 0 1 0-.605-.787.625.625 0 0 1-1.207-.325 1.874 1.874 0 1 1 3.21 1.733c.309.344.478.784.479 1.25a1.88 1.88 0 0 1-1.876 1.877Zm-1.251-7.5a.622.622 0 0 1-.586-.838.63.63 0 0 1 .243-.31l2.017-1.325c.13-.19.201-.42.201-.652a.625.625 0 0 0-1.25 0 .625.625 0 0 1-1.25 0C0 8.34.84 7.498 1.875 7.498c1.034 0 1.875.841 1.875 1.875 0 .545-.187 1.079-.527 1.504a.622.622 0 0 1-.145.131l-.365.24h.412c.345 0 .625.28.625.625s-3.125.625-3.125.625Zm0-6.25a.625.625 0 0 1 0-1.25h.625v-3.75H.625a.625.625 0 0 1 0-1.25h.625c.69 0 1.25.561 1.25 1.25v3.75h.625a.625.625 0 0 1 0 1.25h-2.5Z"></path></g><defs><clipPath id="dna"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-number_list";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, NumberList);
}
