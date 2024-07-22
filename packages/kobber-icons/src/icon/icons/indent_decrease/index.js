export class IndentDecrease extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#cma)"><path fill="currentColor" d="M9.376 3.123a.625.625 0 0 1 0-1.25h10a.625.625 0 1 1 0 1.25h-10Zm5 3.75a.625.625 0 0 1 0-1.25h5a.625.625 0 1 1 0 1.25h-5Zm0 3.75a.625.625 0 0 1 0-1.25h5a.625.625 0 1 1 0 1.25h-5Zm0 3.75a.625.625 0 0 1 0-1.25h5a.625.625 0 1 1 0 1.25h-5Zm-5 3.75a.625.625 0 0 1 0-1.25h10a.625.625 0 1 1 0 1.25h-10ZM6.25 16.87c-.333 0-.647-.13-.883-.364L.468 11.235a1.877 1.877 0 0 1-.017-2.456l4.9-5.273a1.263 1.263 0 0 1 .9-.383c.334 0 .648.13.884.367.236.236.366.55.366.884v1.251h3.125A1.877 1.877 0 0 1 12.5 7.5v5a1.877 1.877 0 0 1-1.875 1.875H7.5v1.247c0 .333-.13.646-.366.882a1.24 1.24 0 0 1-.884.367ZM1.384 9.61a.613.613 0 0 0 .018.793l4.846 5.214.004-1.867a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 0 .625-.625v-5a.625.625 0 0 0-.625-.625h-3.75a.625.625 0 0 1-.625-.625V4.374L1.383 9.611Z"></path></g><defs><clipPath id="cma"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-indent_decrease";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, IndentDecrease);
}
