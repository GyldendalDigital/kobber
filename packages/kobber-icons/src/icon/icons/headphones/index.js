export class Headphones extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cga)"><path fill="currentColor" d="M3.337 20a.626.626 0 0 1-.547-.323C2.677 19.47.017 14.592 0 10.024-.02 4.51 4.45.007 9.964-.013h.037c5.494 0 9.979 4.47 9.999 9.965.016 4.557-2.608 9.466-2.72 9.672a.625.625 0 1 1-1.1-.594c.027-.048 2.586-4.834 2.57-9.074-.018-4.807-3.943-8.719-8.75-8.719L9.968.925l.001.312c-4.825.018-8.736 3.957-8.718 8.782.015 4.238 2.61 9.007 2.635 9.054a.627.627 0 0 1-.548.927Z"></path><path fill="currentColor" d="M6.077 19.503a1.457 1.457 0 0 1-1.344-.892l-2.025-4.799a1.448 1.448 0 0 1-.007-1.115 1.44 1.44 0 0 1 .784-.794l1.343-.567a1.446 1.446 0 0 1 1.116-.008c.36.147.643.425.794.785l2.025 4.798a1.46 1.46 0 0 1-.776 1.91l-1.345.567a1.438 1.438 0 0 1-.565.115Zm-.681-7.032a.208.208 0 0 0-.081.017l-1.343.566a.202.202 0 0 0-.112.114.206.206 0 0 0 0 .159l2.026 4.798a.202.202 0 0 0 .113.112.198.198 0 0 0 .16-.001l1.343-.567a.207.207 0 0 0 .111-.273l-2.025-4.799a.201.201 0 0 0-.113-.111.221.221 0 0 0-.08-.015Zm8.527 7.034a1.45 1.45 0 0 1-.566-.116l-1.344-.566a1.452 1.452 0 0 1-.892-1.354 1.45 1.45 0 0 1 .116-.557l2.025-4.799a1.456 1.456 0 0 1 1.91-.776l1.343.566c.358.151.637.434.783.794.147.361.145.758-.006 1.116l-2.025 4.799a1.453 1.453 0 0 1-.794.784 1.442 1.442 0 0 1-.55.109Zm.682-7.033a.208.208 0 0 0-.193.127l-2.025 4.799a.207.207 0 0 0 .044.227c.02.02.042.035.067.045l1.344.567a.21.21 0 0 0 .08.016.19.19 0 0 0 .078-.015.204.204 0 0 0 .114-.113l2.025-4.798a.21.21 0 0 0-.11-.274l-1.344-.566a.233.233 0 0 0-.08-.015Z"></path></g><defs><clipPath id="cga"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-headphones";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Headphones);
}
