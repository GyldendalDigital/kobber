export class CursorPointer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M8.805 19.375a4.384 4.384 0 0 1-3.557-1.832l-.915-1.278A6.433 6.433 0 0 1 3.125 12.5c0-1.5 1.057-2.77 2.5-3.063V2.5c0-1.034.84-1.875 1.875-1.875 1.034 0 1.875.84 1.875 1.875v3.232c.198-.071.41-.107.625-.107.643 0 1.238.336 1.58.865.278-.158.595-.243.92-.243a1.88 1.88 0 0 1 1.81 1.382 1.877 1.877 0 0 1 2.565 1.744v5.107a4.9 4.9 0 0 1-4.893 4.895H8.806Zm-3.18-8.64a1.884 1.884 0 0 0-1.25 1.765c0 1.096.337 2.146.973 3.037l.916 1.279a3.131 3.131 0 0 0 2.541 1.309h3.177a3.647 3.647 0 0 0 3.642-3.643v-5.11a.625.625 0 0 0-1.25 0l-.002.036a.596.596 0 0 1-.024.138l-.012.042-.012.031a.804.804 0 0 1-.065.115.662.662 0 0 1-.126.13.617.617 0 0 1-.513.122l-.018-.006a.634.634 0 0 1-.364-.247l-.015-.021a.81.81 0 0 1-.06-.121l-.014-.048a.65.65 0 0 1-.024-.169v-1.25a.625.625 0 1 0-1.25 0v1.25a.625.625 0 1 1-1.25 0V7.5a.625.625 0 1 0-1.25 0 .62.62 0 0 1-.082.31.626.626 0 0 1 .082.313v1.25a.625.625 0 0 1-1.25 0v-1.25c0-.114.03-.22.083-.312a.62.62 0 0 1-.083-.311v-5a.625.625 0 0 0-1.25 0v9.373a.625.625 0 1 1-1.25 0v-1.138Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-cursor_pointer";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, CursorPointer);
}
