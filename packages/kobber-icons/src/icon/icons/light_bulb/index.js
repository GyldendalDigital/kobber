export class LightBulb extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cwa)"><path fill="currentColor" d="M8.75 19.375a.625.625 0 1 1 0-1.25h2.5a.624.624 0 1 1 0 1.25h-2.5Zm0-2.5a.625.625 0 0 1-.625-.625v-.964a5.59 5.59 0 0 1-3.75-5.324 5.635 5.635 0 0 1 7.788-5.175 5.6 5.6 0 0 1 1.829 1.232 5.59 5.59 0 0 1 1.633 3.983 5.58 5.58 0 0 1-3.75 5.285v.963a.625.625 0 0 1-.625.625h-2.5Zm1.875-1.25v-.802a.625.625 0 0 1 .47-.606 4.363 4.363 0 0 0 3.28-4.219 4.346 4.346 0 0 0-1.27-3.099 4.345 4.345 0 0 0-3.09-1.292l-.017-.313v.313a4.382 4.382 0 0 0-4.372 4.359 4.371 4.371 0 0 0 3.28 4.252.625.625 0 0 1 .469.604v.802l1.25.001ZM10 3.125a.625.625 0 0 1-.625-.625V1.25a.625.625 0 0 1 1.25 0V2.5a.625.625 0 0 1-.625.625Zm7.5 6.25a.625.625 0 1 1 0-1.25h1.25a.625.625 0 1 1 0 1.25H17.5Zm-16.25 1.25a.625.625 0 1 1 0-1.25H2.5a.625.625 0 0 1 0 1.25H1.25Zm14.938 5.563a.62.62 0 0 1-.442-.184l-.884-.884a.627.627 0 0 1 .441-1.067c.167 0 .324.064.442.183l.884.884a.626.626 0 0 1-.442 1.068ZM4.697 4.697a.62.62 0 0 1-.442-.184l-.884-.884a.619.619 0 0 1-.183-.442c0-.166.064-.324.183-.441a.619.619 0 0 1 .442-.183c.166 0 .324.064.441.183l.884.884a.619.619 0 0 1 .184.442.619.619 0 0 1-.386.577.62.62 0 0 1-.24.048Zm10.606 0a.62.62 0 0 1-.441-.184.619.619 0 0 1-.184-.441c0-.167.065-.324.184-.442l.884-.884a.62.62 0 0 1 .883 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.441l-.884.884a.62.62 0 0 1-.442.184ZM3.813 16.188a.626.626 0 0 1-.442-1.068l.884-.884a.622.622 0 0 1 1.066.442.627.627 0 0 1-.183.442l-.884.884a.62.62 0 0 1-.441.183Z"></path></g><defs><clipPath id="cwa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-light_bulb";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, LightBulb);
}
