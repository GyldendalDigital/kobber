export class Settings extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#esa)"><path fill="currentColor" d="M6.797 19.99a2.251 2.251 0 0 1-2.085-1.391 2.252 2.252 0 0 1-.17-.969l.06-1.17a1.008 1.008 0 0 0-1.005-1.06c-.017 0-.034 0-.051.002l-1.168.06a2.249 2.249 0 0 1-1.627-.577 2.244 2.244 0 0 1-.744-1.56 2.248 2.248 0 0 1 .74-1.79l.868-.783a1.006 1.006 0 0 0 0-1.497l-.868-.788a2.24 2.24 0 0 1-.738-1.562 2.257 2.257 0 0 1 2.362-2.364l1.168.059A1.008 1.008 0 0 0 4.6 3.542l-.056-1.171A2.26 2.26 0 0 1 6.799.007a2.26 2.26 0 0 1 1.668.738l.784.866a1 1 0 0 0 .75.334.989.989 0 0 0 .744-.332l.792-.868a2.24 2.24 0 0 1 1.672-.742 2.256 2.256 0 0 1 2.256 2.373l-.06 1.166a1.009 1.009 0 0 0 .956 1.056l.05.002h.048l1.167-.06.115-.003c.56 0 1.096.208 1.512.585.447.405.71.96.74 1.562a2.25 2.25 0 0 1-.741 1.786l-.869.783a1 1 0 0 0-.33.697 1.001 1.001 0 0 0 .33.798l.869.785c.447.404.71.958.741 1.56a2.239 2.239 0 0 1-.579 1.628 2.267 2.267 0 0 1-1.679.743l-.11-.002-1.168-.06-.055-.001a.99.99 0 0 0-.671.259.996.996 0 0 0-.331.8l.06 1.167a2.25 2.25 0 0 1-.59 1.627 2.242 2.242 0 0 1-1.677.735 2.253 2.253 0 0 1-1.655-.733l-.786-.87a1.01 1.01 0 0 0-1.496 0l-.789.868a2.267 2.267 0 0 1-1.67.736Zm-3.2-5.838a2.261 2.261 0 0 1 2.254 2.373l-.06 1.167a1.004 1.004 0 0 0 1.005 1.05l.049-.001a1 1 0 0 0 .698-.328l.786-.867a2.253 2.253 0 0 1 1.673-.744c.639 0 1.25.271 1.677.744l.784.867c.189.206.46.325.747.325l.04-.001a1.008 1.008 0 0 0 .96-1.052l-.058-1.162a2.24 2.24 0 0 1 .741-1.791 2.25 2.25 0 0 1 1.629-.579l1.166.06.057.001a1 1 0 0 0 .74-.332 1.002 1.002 0 0 0 .165-1.109 1 1 0 0 0-.236-.315l-.868-.783a2.262 2.262 0 0 1 0-3.352l.868-.783a1.002 1.002 0 0 0 .235-1.179 1.003 1.003 0 0 0-.91-.576l-.05.002-1.166.059a2.258 2.258 0 0 1-2.365-2.368l.059-1.167a1 1 0 0 0-.331-.799.98.98 0 0 0-.668-.26l-.057.002a.997.997 0 0 0-.698.331l-.79.867a2.252 2.252 0 0 1-2.644.525 2.243 2.243 0 0 1-.705-.527l-.782-.865a1.01 1.01 0 0 0-.745-.328h-.048a1.008 1.008 0 0 0-.958 1.055l.056 1.166a2.257 2.257 0 0 1-2.372 2.37L2.309 5.79a1.008 1.008 0 0 0-1.052 1.053c.014.269.13.516.33.697l.867.787a2.26 2.26 0 0 1-.002 3.351l-.867.784a1.002 1.002 0 0 0-.33.798 1.004 1.004 0 0 0 1.005.954c.018 0 .036 0 .053-.002l1.168-.059.117-.001Z"></path><path fill="currentColor" d="M10 14.375A4.38 4.38 0 0 1 5.625 10 4.38 4.38 0 0 1 10 5.625 4.38 4.38 0 0 1 14.375 10 4.38 4.38 0 0 1 10 14.375Zm0-7.5A3.128 3.128 0 0 0 6.875 10 3.128 3.128 0 0 0 10 13.125 3.128 3.128 0 0 0 13.125 10 3.128 3.128 0 0 0 10 6.875Z"></path></g><defs><clipPath id="esa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-settings";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Settings);
}
