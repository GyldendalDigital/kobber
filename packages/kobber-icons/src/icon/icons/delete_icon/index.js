export class DeleteIcon extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#bla)"><path fill="currentColor" d="M5.526 19.375a1.886 1.886 0 0 1-1.868-1.72L2.55 4.375h-1.3a.625.625 0 0 1 0-1.25h5V2.5A1.877 1.877 0 0 1 8.125.625h3.75A1.877 1.877 0 0 1 13.75 2.5v.625h5a.625.625 0 1 1 0 1.25h-1.3l-1.107 13.28a1.885 1.885 0 0 1-1.868 1.72h-8.95Zm-.623-1.823c.026.321.3.573.623.573h8.949a.627.627 0 0 0 .623-.573l1.098-13.177H3.804l1.099 13.177ZM12.5 3.125V2.5a.625.625 0 0 0-.625-.625h-3.75A.625.625 0 0 0 7.5 2.5v.625h5Z"></path><path fill="currentColor" d="M8.125 15a.625.625 0 0 1-.625-.625v-6.25a.625.625 0 0 1 1.25 0v6.25a.625.625 0 0 1-.625.625Zm3.75 0a.624.624 0 0 1-.625-.625v-6.25a.625.625 0 1 1 1.25 0v6.25a.624.624 0 0 1-.625.625Z"></path></g><defs><clipPath id="bla"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-delete_icon";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, DeleteIcon);
}
