export class MessageTyping extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#dga)"><path fill="currentColor" d="M.63 20a.625.625 0 0 1-.566-.893l2.426-5.095A9.371 9.371 0 0 1 1.253 9.35C1.261 4.194 5.461 0 10.616 0h.029a9.37 9.37 0 0 1 4.952 1.414 9.312 9.312 0 0 1 4.179 5.833 9.315 9.315 0 0 1-1.17 7.08 9.315 9.315 0 0 1-5.833 4.179 9.333 9.333 0 0 1-6.782-.993L.898 19.94a.64.64 0 0 1-.269.06Zm9.986-18.75c-4.467 0-8.106 3.634-8.113 8.1a8.104 8.104 0 0 0 1.225 4.3.62.62 0 0 1 .034.598L1.95 18.053l3.805-1.812a.62.62 0 0 1 .6.034 8.088 8.088 0 0 0 6.134 1.013 8.074 8.074 0 0 0 5.055-3.621 8.074 8.074 0 0 0 1.014-6.136 8.073 8.073 0 0 0-3.622-5.055 8.116 8.116 0 0 0-4.291-1.226h-.03Z"></path><path fill="currentColor" d="M6.878 10.313a.938.938 0 1 0 0-1.876.938.938 0 0 0 0 1.876Zm3.752 0a.935.935 0 0 1-.05-1.871l.014-.002a.94.94 0 0 1 .973.936.94.94 0 0 1-.938.937Zm3.75 0a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.874Z"></path></g><defs><clipPath id="dga"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-message_typing";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, MessageTyping);
}
