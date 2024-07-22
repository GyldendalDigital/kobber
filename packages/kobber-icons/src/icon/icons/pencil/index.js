export class Pencil extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dya)"><path fill="currentColor" d="M.625 20a.627.627 0 0 1-.605-.783l1.517-5.784a.338.338 0 0 1 .012-.038.415.415 0 0 1 .061-.128.695.695 0 0 1 .07-.095l.02-.023L13.775 1.08A3.623 3.623 0 0 1 16.35.005a3.634 3.634 0 0 1 2.584 1.062l.016.016a3.649 3.649 0 0 1-.05 5.171L6.854 18.301a.519.519 0 0 1-.058.047.595.595 0 0 1-.226.116L.784 19.98a.673.673 0 0 1-.159.02Zm.876-1.5 4.053-1.063-.896-2.092-2.095-.894L1.5 18.499Zm5.124-1.74 8.87-8.868-1.25-1.25-8.37 8.368.75 1.75ZM4.99 14.128l8.37-8.368-1.25-1.249-8.872 8.87 1.752.747ZM16.38 7.01l.856-.856L13.85 2.77l-.857.857 3.385 3.382Zm1.738-1.742a2.38 2.38 0 0 0 .632-1.594 2.385 2.385 0 0 0-.682-1.704l-.015-.015a2.388 2.388 0 0 0-1.693-.699l-.007-.312.001.312a2.381 2.381 0 0 0-1.616.632l3.38 3.38Z"></path></g><defs><clipPath id="dya"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-pencil";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Pencil);
}
