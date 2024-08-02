export class SynchronizeArrowsWarning extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#fda)"><path fill="currentColor" d="M10.004 18.323a8.14 8.14 0 0 1-6.059-2.704.62.62 0 0 1-.034-.793.626.626 0 0 1 .966-.041 6.886 6.886 0 0 0 9.708.54 6.897 6.897 0 0 0 2.222-4.172l-.74.739A.622.622 0 0 1 15 11.45c0-.166.066-.325.182-.442l1.875-1.875a.397.397 0 0 1 .049-.04.645.645 0 0 1 .446-.138.665.665 0 0 1 .216.058.65.65 0 0 1 .17.116l1.878 1.878a.619.619 0 0 1 0 .883.622.622 0 0 1-.884 0l-.854-.854a8.147 8.147 0 0 1-2.661 5.217 8.097 8.097 0 0 1-5.414 2.07ZM2.5 11.453a.626.626 0 0 1-.468-.213L.183 9.393a.62.62 0 0 1 0-.885.62.62 0 0 1 .884 0l.854.855a8.15 8.15 0 0 1 2.66-5.217 8.105 8.105 0 0 1 5.87-2.058 8.073 8.073 0 0 1 5.605 2.695.625.625 0 0 1-.932.833 6.886 6.886 0 0 0-9.707-.54 6.895 6.895 0 0 0-2.222 4.17l.738-.738a.62.62 0 0 1 .884 0 .62.62 0 0 1 0 .884l-1.863 1.862a.609.609 0 0 1-.454.199Z"></path><path fill="currentColor" d="M10 11.45a.625.625 0 0 1-.625-.625v-5a.625.625 0 0 1 1.25 0v5a.625.625 0 0 1-.625.625Zm0 3.128a.939.939 0 0 1-.938-.938c0-.478.356-.873.83-.928a.633.633 0 0 1 .225-.002l.027.007c.454.07.793.463.793.923a.938.938 0 0 1-.937.938Z"></path></g><defs><clipPath id="fda"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-synchronize_arrows_warning";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, SynchronizeArrowsWarning);
}
