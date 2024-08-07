export class Login extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#cza)"><path fill="currentColor" d="M11.875 18.756a.625.625 0 0 1 0-1.25h3.75a.625.625 0 0 0 .625-.625v-1.25a.625.625 0 1 1 1.25 0v1.25a1.876 1.876 0 0 1-1.875 1.875h-3.75Zm5-12.5a.625.625 0 0 1-.625-.625V4.38a.625.625 0 0 0-.625-.625h-3.75a.625.625 0 1 1 0-1.25h3.75A1.877 1.877 0 0 1 17.5 4.38v1.25a.625.625 0 0 1-.625.625ZM8.75 20.005c-.06 0-.12-.004-.18-.013L1.074 18.92A1.255 1.255 0 0 1 0 17.683V3.107c0-.586.415-1.1.988-1.223L8.47.038A1.258 1.258 0 0 1 10 1.256v17.5c0 .334-.13.648-.367.884a1.242 1.242 0 0 1-.884.365ZM1.27 3.102l-.02 14.582 7.502 1.071-.002-17.5-7.48 1.847ZM15 13.755a.62.62 0 0 1-.442-.183l-2.5-2.5a.356.356 0 0 1-.031-.037.592.592 0 0 1-.148-.44.627.627 0 0 1 .18-.407l2.5-2.5a.62.62 0 0 1 .883 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.442l-1.434 1.433h5.366a.625.625 0 1 1 0 1.25h-5.366l1.434 1.433A.622.622 0 0 1 15 13.755Z"></path><path fill="currentColor" d="M6.563 10.943a.939.939 0 0 1-.938-.937c0-.478.354-.875.827-.93a.618.618 0 0 1 .11-.01.937.937 0 0 1 .938.938.94.94 0 0 1-.938.94Z"></path></g><defs><clipPath id="cza"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-login";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Login);
}
