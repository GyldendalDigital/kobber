export class LockUnlocked extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cya)"><path fill="currentColor" d="M6.875 20A1.876 1.876 0 0 1 5 18.125v-8.75A1.877 1.877 0 0 1 6.875 7.5H8.75V5A3.755 3.755 0 0 0 5 1.25 3.755 3.755 0 0 0 1.25 5v3.125a.625.625 0 0 1-1.25 0V5c0-2.757 2.243-5 5-5s5 2.243 5 5v2.5h8.125A1.877 1.877 0 0 1 20 9.375v8.75A1.876 1.876 0 0 1 18.125 20H6.875Zm0-11.25a.625.625 0 0 0-.625.625v8.75c0 .345.28.625.625.625h11.25a.624.624 0 0 0 .625-.625v-8.75a.625.625 0 0 0-.625-.625H6.875Z"></path><path fill="currentColor" d="M12.5 15.625a.624.624 0 0 1-.625-.625v-2.5a.624.624 0 1 1 1.25 0V15a.624.624 0 0 1-.625.625Z"></path></g><defs><clipPath id="cya"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-lock_unlocked";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, LockUnlocked);
}
