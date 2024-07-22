export class VideoFileAdd extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fua)"><path fill="currentColor" d="M14.375 20a5.631 5.631 0 0 1-5.625-5.625 5.631 5.631 0 0 1 5.625-5.625A5.631 5.631 0 0 1 20 14.375 5.631 5.631 0 0 1 14.375 20Zm0-10A4.38 4.38 0 0 0 10 14.375a4.38 4.38 0 0 0 4.375 4.375 4.38 4.38 0 0 0 4.375-4.375A4.38 4.38 0 0 0 14.375 10Z"></path><path fill="currentColor" d="M14.375 17.5a.624.624 0 0 1-.625-.625V15h-1.875a.624.624 0 1 1 0-1.25h1.875v-1.875a.624.624 0 1 1 1.25 0v1.875h1.875a.624.624 0 1 1 0 1.25H15v1.875a.624.624 0 0 1-.625.625Zm-12.5 0A1.876 1.876 0 0 1 0 15.625V1.875A1.877 1.877 0 0 1 1.875 0h8.857c.501 0 .971.195 1.325.548l2.394 2.394c.354.354.549.825.549 1.325v2.608a.625.625 0 1 1-1.25 0V4.268a.632.632 0 0 0-.182-.442l-2.394-2.393a.623.623 0 0 0-.441-.183H1.874a.625.625 0 0 0-.625.625v13.75c0 .345.28.625.625.625h5a.625.625 0 1 1 0 1.25h-5Z"></path><path fill="currentColor" d="M4.947 11.25a1.205 1.205 0 0 1-.971-.496 1.197 1.197 0 0 1-.226-.7V6.196a1.19 1.19 0 0 1 1.202-1.193c.185 0 .367.042.528.123l3.86 1.93c.284.142.497.387.598.69a1.198 1.198 0 0 1-.6 1.449l-3.858 1.93a1.19 1.19 0 0 1-.533.126ZM5 9.968l3.683-1.842L5 6.283v3.684Z"></path></g><defs><clipPath id="fua"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-video_file_add";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, VideoFileAdd);
}
