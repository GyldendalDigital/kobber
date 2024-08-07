export class AudioRecording extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><path fill="currentColor" d="M7.5 20a.625.625 0 1 1 0-1.25h1.875V15H8.75a5.632 5.632 0 0 1-5.625-5.625v-2.5a.625.625 0 0 1 1.25 0v2.5A4.38 4.38 0 0 0 8.75 13.75h2.5a4.38 4.38 0 0 0 4.375-4.375v-2.5a.625.625 0 1 1 1.25 0v2.5A5.632 5.632 0 0 1 11.25 15h-.625v3.75H12.5a.624.624 0 1 1 0 1.25h-5Z"></path><path fill="currentColor" d="M8.75 12.5c-1.833-.11-3.226-1.668-3.124-3.473l-.001-5.59C5.523 1.661 6.908.112 8.712.002L11.25 0c1.833.11 3.226 1.668 3.124 3.473l.001 5.59c.102 1.776-1.283 3.326-3.088 3.436l-.037.001h-2.5ZM6.875 9.062c-.064 1.147.794 2.12 1.913 2.189l2.453-.001c1.094-.072 1.949-1.037 1.886-2.152V7.5H11.25a.625.625 0 1 1 0-1.25h1.875V5H11.25a.625.625 0 1 1 0-1.25h1.875v-.313c.064-1.146-.794-2.12-1.913-2.188L8.75 1.25c-1.09.067-1.94 1.033-1.876 2.152v.348H8.75a.625.625 0 0 1 0 1.25H6.875v1.25H8.75a.625.625 0 0 1 0 1.25H6.875v1.563Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-audio_recording";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AudioRecording);
}
