export class PinRemove extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#eaa)"><path fill="currentColor" d="M9.792 20a.623.623 0 0 1-.61-.486c-.233-1.018-1.013-3.848-1.816-4.707a54.5 54.5 0 0 0-.693-.721c-1.76-1.814-3.756-3.871-3.756-7.211A6.883 6.883 0 0 1 9.792 0a6.883 6.883 0 0 1 6.875 6.875c0 3.335-1.992 5.39-3.75 7.2-.242.252-.474.49-.695.727-.807.862-1.589 3.694-1.822 4.712a.62.62 0 0 1-.608.486Zm0-18.75a5.632 5.632 0 0 0-5.625 5.625c0 2.833 1.73 4.616 3.403 6.34.247.254.482.497.708.738.603.645 1.124 1.911 1.514 3.108.39-1.198.913-2.467 1.516-3.113.227-.243.464-.486.704-.735 1.676-1.729 3.403-3.51 3.403-6.338A5.63 5.63 0 0 0 9.792 1.25Z"></path><path fill="currentColor" d="M12.002 10.335a.62.62 0 0 1-.442-.183L9.792 8.383l-1.769 1.769a.622.622 0 0 1-1.02-.203.62.62 0 0 1 .137-.68L8.907 7.5 7.14 5.732a.619.619 0 0 1-.183-.442c0-.167.065-.324.183-.442a.62.62 0 0 1 .883 0l1.769 1.769 1.768-1.769a.62.62 0 0 1 .883 0 .622.622 0 0 1 0 .884L10.676 7.5l1.768 1.768a.619.619 0 0 1 .183.442.619.619 0 0 1-.386.578.621.621 0 0 1-.24.047Z"></path></g><defs><clipPath id="eaa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-pin_remove";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, PinRemove);
}
