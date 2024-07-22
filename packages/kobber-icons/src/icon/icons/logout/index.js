export class Logout extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#daa)"><path fill="currentColor" d="M11.87 18.756a.625.625 0 0 1 0-1.25h3.75a.625.625 0 0 0 .625-.625v-1.25a.625.625 0 1 1 1.25 0v1.25a1.876 1.876 0 0 1-1.875 1.875h-3.75Zm5-12.5a.625.625 0 0 1-.625-.625V4.38a.625.625 0 0 0-.625-.625h-3.75a.625.625 0 1 1 0-1.25h3.75a1.877 1.877 0 0 1 1.875 1.875v1.25c0 .344-.28.625-.625.625ZM8.744 20.005c-.059 0-.119-.004-.178-.013L1.068 18.92a1.257 1.257 0 0 1-1.073-1.237V3.107a1.255 1.255 0 0 1 .988-1.224L8.464.037a1.258 1.258 0 0 1 1.531 1.218v17.5c0 .334-.13.648-.367.884a1.242 1.242 0 0 1-.884.366ZM1.264 3.102l-.02.006.001 14.575 7.502 1.071-.002-17.5-7.48 1.848ZM16.87 13.755a.623.623 0 0 1-.44-1.067l1.433-1.433h-5.368a.625.625 0 1 1 0-1.25h5.366l-1.434-1.433a.619.619 0 0 1-.183-.442.619.619 0 0 1 .386-.577.624.624 0 0 1 .68.135l2.502 2.5a.52.52 0 0 1 .037.045.629.629 0 0 1-.036.84l-2.5 2.5a.63.63 0 0 1-.442.182Z"></path><path fill="currentColor" d="M6.558 10.943a.939.939 0 0 1-.938-.937c0-.478.354-.875.827-.93a.618.618 0 0 1 .11-.01.94.94 0 0 1 0 1.877Z"></path></g><defs><clipPath id="daa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-logout";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Logout);
}
