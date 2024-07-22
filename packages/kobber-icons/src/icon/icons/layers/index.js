export class Layers extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#cqa)"><path fill="currentColor" d="M10 19.998a1.92 1.92 0 0 1-.877-.213L.616 15.383a1.14 1.14 0 0 1 0-2.021l2.274-1.175L.617 11.01a1.133 1.133 0 0 1-.612-.914 1.132 1.132 0 0 1 .264-.831c.096-.115.215-.209.348-.278L2.893 7.81.616 6.633A1.135 1.135 0 0 1 .267 4.89a1.14 1.14 0 0 1 .348-.277l8.507-4.4a1.917 1.917 0 0 1 1.755 0l8.507 4.398a.616.616 0 0 1 .09.057 1.14 1.14 0 0 1-.088 1.969l-2.274 1.175 2.274 1.176a1.138 1.138 0 0 1 0 2.021l-2.275 1.178 2.275 1.178a1.137 1.137 0 0 1 0 2.021l-8.508 4.397a1.903 1.903 0 0 1-.878.215Zm-.303-1.324a.667.667 0 0 0 .606 0l8.316-4.296-2.87-1.486-4.872 2.52a1.92 1.92 0 0 1-1.754 0l-4.873-2.52-2.868 1.482 8.315 4.301Zm0-4.372a.657.657 0 0 0 .605 0L18.618 10 15.75 8.517l-4.873 2.518a1.922 1.922 0 0 1-1.754 0l-4.87-2.52L1.381 10l8.315 4.302Zm0-4.378a.668.668 0 0 0 .606 0l8.32-4.299-8.32-4.302a.672.672 0 0 0-.606 0l-8.315 4.3 8.315 4.301Z"></path></g><defs><clipPath id="cqa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-layers";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Layers);
}
