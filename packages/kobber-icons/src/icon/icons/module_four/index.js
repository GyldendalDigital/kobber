export class ModuleFour extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#dja)"><path fill="currentColor" d="M10 19.375a.632.632 0 0 1-.242-.048l-8.754-3.752A.625.625 0 0 1 .625 15V6.236a.633.633 0 0 1 .063-.257l.021-.04a.624.624 0 0 1 .064-.09l.019-.023a.615.615 0 0 1 .211-.15l4.622-1.981V2.5C5.625 1.205 7.822.625 10 .625s4.375.58 4.375 1.875v1.195l4.62 1.98a.604.604 0 0 1 .102.055l.014.01a.634.634 0 0 1 .096.084l.029.034a.694.694 0 0 1 .14.375V15a.623.623 0 0 1-.38.574l-8.754 3.752a.61.61 0 0 1-.242.049Zm.625-1.573 7.5-3.214v-7.39l-7.5 3.214v7.39Zm-1.25 0v-7.39l-7.5-3.214v7.39l7.5 3.214ZM10 9.32l7.163-3.07-2.789-1.195c-.062 1.257-2.227 1.82-4.374 1.82s-4.313-.563-4.373-1.82L2.837 6.25 10 9.32ZM6.875 4.952c.157.173 1.143.673 3.125.673 1.98 0 2.968-.5 3.125-.673v-1.08c-.787.32-1.91.503-3.125.503-1.216 0-2.338-.183-3.125-.502v1.079ZM6.93 2.5c.268.203 1.25.625 3.07.625 1.82 0 2.802-.422 3.07-.625-.27-.203-1.25-.625-3.07-.625-1.82 0-2.802.422-3.07.625Z"></path></g><defs><clipPath id="dja"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-module_four";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ModuleFour);
}
