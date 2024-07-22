export class Shrink extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") ||
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#eva)"><path fill="currentColor" d="M14.375 6.248a.613.613 0 0 1-.217-.04l-.027-.01a.625.625 0 0 1-.334-.336l-.008-.022a.614.614 0 0 1-.039-.217v-5a.625.625 0 1 1 1.25 0v3.491L18.933.181a.62.62 0 0 1 1.02.202.623.623 0 0 1-.136.682l-3.934 3.933h3.491a.625.625 0 0 1 0 1.25h-4.999Zm-8.75 13.75A.625.625 0 0 1 5 19.373v-3.49l-3.933 3.933A.622.622 0 0 1 0 19.374c0-.166.065-.325.182-.442l3.934-3.934H.625a.625.625 0 0 1 0-1.25h5a.63.63 0 0 1 .217.04l.018.006a.63.63 0 0 1 .39.58v5a.625.625 0 0 1-.625.624Zm13.75 0a.62.62 0 0 1-.442-.183L15 15.883v3.49a.624.624 0 1 1-1.25 0v-5a.64.64 0 0 1 .038-.215l.005-.014a.636.636 0 0 1 .344-.349l.021-.008a.612.612 0 0 1 .216-.04h5a.625.625 0 1 1 0 1.25h-3.49l3.933 3.934a.628.628 0 0 1-.442 1.067ZM.625 6.248a.625.625 0 0 1 0-1.25h3.49L.184 1.065a.622.622 0 0 1 0-.883.619.619 0 0 1 .442-.184c.167 0 .324.065.442.184L5 4.115V.623a.625.625 0 0 1 1.25 0v5a.613.613 0 0 1-.04.218l-.006.017a.633.633 0 0 1-.579.39h-5Zm6.875 7.5c-.69 0-1.25-.56-1.25-1.25v-5c0-.689.56-1.25 1.25-1.25h5c.69 0 1.25.561 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5Zm0-1.25h5v-5h-5v5Z"></path></g><defs><clipPath id="eva"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-shrink";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Shrink);
}
