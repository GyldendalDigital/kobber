export class Eraser extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><path fill="currentColor" d="M4.39 16.043a.62.62 0 0 1-.44-.183L.432 12.343a1.487 1.487 0 0 1 0-2.094l8.473-8.474a1.475 1.475 0 0 1 1.047-.432c.395 0 .767.153 1.046.431l4.54 4.54a1.49 1.49 0 0 1 .002 2.093l-7.408 7.407a.619.619 0 0 1-.883 0 .627.627 0 0 1 0-.884l1.517-1.517L3.9 8.548l-2.584 2.584a.234.234 0 0 0 0 .328l3.516 3.517a.617.617 0 0 1 .182.442.621.621 0 0 1-.624.624Zm5.26-3.513 5.006-5.006a.233.233 0 0 0-.002-.327l-4.537-4.538a.233.233 0 0 0-.329.001L4.785 7.663 9.65 12.53ZM.625 18.542a.625.625 0 1 1 0-1.25h3.75a.625.625 0 0 1 0 1.25H.625Zm10 0a.625.625 0 1 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25Zm3.75 0a.625.625 0 1 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25Zm3.75 0a.625.625 0 1 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25Zm-11.25 0a.625.625 0 1 1 0-1.25h1.25a.625.625 0 0 1 0 1.25h-1.25Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-eraser";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Eraser);
}
