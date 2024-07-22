export class VolumeOff extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><path fill="currentColor" d="M12.497 16.563a1.86 1.86 0 0 1-1.101-.36l-2.719-1.73a.625.625 0 0 1 .671-1.054l2.737 1.742.034.023a.621.621 0 0 0 .88-.12.628.628 0 0 0 .124-.376v-4.375a.625.625 0 1 1 1.25 0v4.375a1.887 1.887 0 0 1-1.036 1.679c-.261.13-.549.197-.84.195Zm-8.747-3.75a1.877 1.877 0 0 1-1.875-1.876v-2.5A1.877 1.877 0 0 1 3.75 6.562h2.318l5.328-3.39a1.876 1.876 0 0 1 2.98 1.515.625.625 0 1 1-1.25 0 .625.625 0 0 0-1-.5.675.675 0 0 1-.037.026L6.586 7.715a.623.623 0 0 1-.336.097h-2.5a.625.625 0 0 0-.625.625v2.5c0 .346.28.626.625.626h.521a.625.625 0 1 1 0 1.25h-.52ZM2.5 17.188a.622.622 0 0 1-.597-.44.622.622 0 0 1 .197-.666l15-12.5a.625.625 0 0 1 .8.96l-15 12.5a.628.628 0 0 1-.4.145Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-volume_off";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, VolumeOff);
}
