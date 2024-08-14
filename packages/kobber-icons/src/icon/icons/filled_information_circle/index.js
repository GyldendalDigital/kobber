export class FilledInformationCircle extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#byclip0_136_24)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0C4.48583 0 0 4.48583 0 10ZM9.6875 6.875C10.2053 6.875 10.625 6.45527 10.625 5.9375C10.625 5.41973 10.2053 5 9.6875 5C9.16973 5 8.75 5.41973 8.75 5.9375C8.75 6.45527 9.16973 6.875 9.6875 6.875ZM11.25 14.375C10.7529 14.3746 10.2762 14.1769 9.92466 13.8253C9.57313 13.4738 9.37544 12.9971 9.375 12.5V9.375H8.75C8.58424 9.375 8.42527 9.30915 8.30806 9.19194C8.19085 9.07473 8.125 8.91576 8.125 8.75C8.125 8.58424 8.19085 8.42527 8.30806 8.30806C8.42527 8.19085 8.58424 8.125 8.75 8.125H9.375C10.0642 8.125 10.625 8.68583 10.625 9.375V12.5C10.625 12.845 10.905 13.125 11.25 13.125H11.875C12.0408 13.125 12.1997 13.1908 12.3169 13.3081C12.4342 13.4253 12.5 13.5842 12.5 13.75C12.5 13.9158 12.4342 14.0747 12.3169 14.1919C12.1997 14.3092 12.0408 14.375 11.875 14.375H11.25Z" fill="currentColor"></path></g><defs><clipPath id="byclip0_136_24"><rect width="20" height="20" fill="currentColor"></rect></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-filled_information_circle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FilledInformationCircle);
}
