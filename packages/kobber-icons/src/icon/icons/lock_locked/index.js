export class LockLocked extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M4.375 20A1.876 1.876 0 0 1 2.5 18.125v-8.75A1.877 1.877 0 0 1 4.375 7.5H5V5c0-2.757 2.243-5 5-5s5 2.243 5 5v2.5h.625A1.877 1.877 0 0 1 17.5 9.375v8.75A1.876 1.876 0 0 1 15.625 20H4.375Zm0-11.25a.625.625 0 0 0-.625.625v8.75c0 .345.28.625.625.625h11.25a.624.624 0 0 0 .625-.625v-8.75a.625.625 0 0 0-.625-.625H4.375ZM13.75 7.5V5A3.755 3.755 0 0 0 10 1.25 3.754 3.754 0 0 0 6.25 5v2.5h7.5Z"></path><path fill="currentColor" d="M10 15.625A.625.625 0 0 1 9.375 15v-2.5a.625.625 0 1 1 1.25 0V15a.624.624 0 0 1-.625.625Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-lock_locked";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, LockLocked);
}
