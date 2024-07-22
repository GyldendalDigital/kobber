export class RatingStarCheck extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#efa)"><path fill="currentColor" d="M4.263 20a1.294 1.294 0 0 1-1.127-.65 1.296 1.296 0 0 1-.133-.988l1.535-5.601L.381 8.64a1.297 1.297 0 0 1 .805-2.212L6.2 5.933 8.834.718a1.306 1.306 0 0 1 2.33-.003l2.63 5.218 5.025.497c.3.025.586.16.803.378.245.246.378.572.376.919a1.289 1.289 0 0 1-.383.915l-.232.23a.621.621 0 0 1-1.019-.208.62.62 0 0 1 .14-.68l.232-.23a.043.043 0 0 0 .013-.032.044.044 0 0 0-.013-.032.047.047 0 0 0-.03-.013l-5.375-.533a.623.623 0 0 1-.497-.34L10.05 1.282a.057.057 0 0 0-.032-.025l-.02-.001c-.012 0-.018.001-.024.005a.056.056 0 0 0-.025.025L7.162 6.803a.62.62 0 0 1-.496.34l-5.367.531c-.026.002-.035.01-.041.017a.045.045 0 0 0-.011.033c0 .011.005.021.013.03l4.417 4.377a.626.626 0 0 1 .162.609l-1.63 5.948a.047.047 0 0 0 .007.035.049.049 0 0 0 .031.024l.015.001a.04.04 0 0 0 .023-.005L7.402 17.2a.622.622 0 0 1 .87.76.618.618 0 0 1-.315.36l-3.114 1.543c-.18.09-.379.138-.58.137Z"></path><path fill="currentColor" d="M14.375 20a5.631 5.631 0 0 1-5.625-5.626 5.631 5.631 0 0 1 5.625-5.625A5.632 5.632 0 0 1 20 14.374 5.632 5.632 0 0 1 14.375 20Zm0-10A4.38 4.38 0 0 0 10 14.373a4.38 4.38 0 0 0 4.375 4.375 4.38 4.38 0 0 0 4.375-4.375A4.38 4.38 0 0 0 14.375 10Z"></path><path fill="currentColor" d="M13.68 17.023c-.33.001-.645-.13-.878-.361l-1.254-1.254a.627.627 0 0 1 .442-1.067c.167 0 .324.065.442.183l1.25 1.25 2.421-3.228a.628.628 0 0 1 .655-.23.625.625 0 0 1 .345.98l-2.42 3.227a1.245 1.245 0 0 1-1.003.5Z"></path></g><defs><clipPath id="efa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-rating_star_check";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, RatingStarCheck);
}
