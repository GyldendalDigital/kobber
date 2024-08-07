export class ClockHand extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bfa)"><path fill="currentColor" d="M.625 20.003A.625.625 0 0 1 0 19.378v-7.5a.625.625 0 0 1 1.25 0v.625H5c1.5 0 2.77 1.057 3.063 2.5h2.562a3.128 3.128 0 0 1 3.125 3.125.625.625 0 0 1-.625.625H1.25v.625a.625.625 0 0 1-.625.625Zm11.768-2.5a1.886 1.886 0 0 0-1.768-1.25H5a.625.625 0 1 1 0-1.25h1.765A1.885 1.885 0 0 0 5 13.753H1.25v3.75h11.143Zm1.791-2.708a.624.624 0 0 1-.153-1.23 6.258 6.258 0 0 0 4.01-8.95 6.239 6.239 0 0 0-5.553-3.36 6.258 6.258 0 0 0-2.879.708 6.258 6.258 0 0 0-2.651 8.432.62.62 0 0 1 .041.477.62.62 0 0 1-.92.347.626.626 0 0 1-.23-.246C3.936 7.306 5.363 2.767 9.03.855a7.51 7.51 0 0 1 7.352.232 7.487 7.487 0 0 1 2.766 2.95 7.45 7.45 0 0 1 .501 5.718 7.45 7.45 0 0 1-3.683 4.4 7.504 7.504 0 0 1-1.63.622.663.663 0 0 1-.153.018Z"></path><path fill="currentColor" d="M11.875 8.753a.625.625 0 0 1-.625-.625v-5a.625.625 0 1 1 1.25 0v4.375H15a.625.625 0 1 1 0 1.25h-3.125Z"></path></g><defs><clipPath id="bfa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-clock_hand";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ClockHand);
}
