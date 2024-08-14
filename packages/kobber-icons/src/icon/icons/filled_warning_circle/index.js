export class FilledWarningCircle extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bzclip0_136_25)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0C4.48583 0 0 4.48583 0 10ZM10 11.875C9.83424 11.875 9.67527 11.8092 9.55806 11.6919C9.44085 11.5747 9.375 11.4158 9.375 11.25V4.375C9.375 4.20924 9.44085 4.05027 9.55806 3.93306C9.67527 3.81585 9.83424 3.75 10 3.75C10.1658 3.75 10.3247 3.81585 10.4419 3.93306C10.5592 4.05027 10.625 4.20924 10.625 4.375V11.25C10.625 11.4158 10.5592 11.5747 10.4419 11.6919C10.3247 11.8092 10.1658 11.875 10 11.875ZM10 15C10.5178 15 10.9375 14.5803 10.9375 14.0625C10.9375 13.5447 10.5178 13.125 10 13.125C9.48223 13.125 9.0625 13.5447 9.0625 14.0625C9.0625 14.5803 9.48223 15 10 15Z" fill="currentColor"></path></g><defs><clipPath id="bzclip0_136_25"><rect width="20" height="20" fill="currentColor"></rect></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-filled_warning_circle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FilledWarningCircle);
}
