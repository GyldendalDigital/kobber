export class CircleShapeAdd extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bda)"><path fill="currentColor" d="M16.872 19.997a.624.624 0 0 1-.625-.625v-1.875h-1.875a.624.624 0 1 1 0-1.25h1.875v-1.875a.625.625 0 0 1 1.25 0v1.875h1.875a.625.625 0 0 1 0 1.25h-1.875v1.875a.624.624 0 0 1-.625.625ZM8.75 17.495a8.729 8.729 0 0 1-2.912-.497A8.687 8.687 0 0 1 .86 12.523 8.687 8.687 0 0 1 .504 5.84 8.689 8.689 0 0 1 4.98.861a8.662 8.662 0 0 1 3.766-.86c.99 0 1.973.17 2.918.503a8.692 8.692 0 0 1 4.979 4.475 8.687 8.687 0 0 1 .356 6.685.625.625 0 0 1-1.18-.417 7.449 7.449 0 0 0-.305-5.73 7.446 7.446 0 0 0-4.266-3.834 7.43 7.43 0 0 0-5.73.306 7.442 7.442 0 0 0-3.834 4.266 7.448 7.448 0 0 0 .305 5.73 7.448 7.448 0 0 0 4.267 3.834c.8.283 1.64.426 2.496.426.855 0 1.695-.143 2.496-.426a.626.626 0 0 1 .416 1.18c-.936.33-1.92.497-2.912.496Z"></path></g><defs><clipPath id="bda"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-circle_shape_add";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, CircleShapeAdd);
}
