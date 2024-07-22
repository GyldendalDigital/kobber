export class CheckCircle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#aya)"><path fill="currentColor" d="M7.77 14.93a1.49 1.49 0 0 1-1.248-.666L4.49 11.38a.625.625 0 1 1 1.023-.72l2.041 2.898a.255.255 0 0 0 .218.123.245.245 0 0 0 .196-.1l6.544-8.278a.626.626 0 1 1 .979.775l-6.536 8.269a1.483 1.483 0 0 1-1.183.584Z"></path><path fill="currentColor" d="M10 19.999c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10Zm0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75-3.925-8.75-8.75-8.75Z"></path></g><defs><clipPath id="aya"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-check_circle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, CheckCircle);
}
