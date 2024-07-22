export class VideoPlayer extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#fva)"><path fill="currentColor" d="M1.875 20A1.876 1.876 0 0 1 0 18.125V1.875A1.877 1.877 0 0 1 1.875 0h16.25A1.877 1.877 0 0 1 20 1.875v16.25A1.876 1.876 0 0 1 18.125 20H1.875Zm0-18.75a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h16.25a.624.624 0 0 0 .625-.625V1.875a.625.625 0 0 0-.625-.625H1.875Z"></path><path fill="currentColor" d="M8.214 13.75c-.144 0-.287-.023-.426-.07a1.325 1.325 0 0 1-.772-.672 1.347 1.347 0 0 1-.141-.596V7.588A1.34 1.34 0 0 1 8.81 6.391l4.825 2.413a1.339 1.339 0 0 1 0 2.393L8.812 13.61c-.186.092-.39.14-.598.14Zm0-6.25a.088.088 0 0 0-.089.088v4.824a.09.09 0 0 0 .06.084.093.093 0 0 0 .067-.005l4.824-2.413a.087.087 0 0 0 .048-.078.087.087 0 0 0-.048-.078L8.25 7.509a.078.078 0 0 0-.038-.009Z"></path></g><defs><clipPath id="fva"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-video_player";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, VideoPlayer);
}
