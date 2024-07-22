export class Assets extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ama)"><path fill="currentColor" d="M1.251 15c-.69 0-1.25-.56-1.25-1.25V1.25C.001.56.561 0 1.251 0h11.25c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H1.251Zm0-1.25h11.25v-2.5H1.251v2.5ZM12.501 10v-.39l-3.17-3.623a.622.622 0 0 0-.983.053L5.576 10h6.925Zm-8.45 0 3.272-4.677a1.862 1.862 0 0 1 1.54-.801 1.857 1.857 0 0 1 1.41.642l2.229 2.548V1.25H1.252V10H4.05Z"></path><path fill="currentColor" d="M14.797 20c-.134 0-.267-.022-.395-.064l-8.97-2.991a.312.312 0 0 1-.197-.395l.198-.593a.313.313 0 0 1 .395-.198l8.97 2.991L18.75 6.892l-3.318-1.107a.625.625 0 0 1 .396-1.185l3.318 1.106c.316.106.573.328.722.626.15.3.174.639.068.955l-3.953 11.859a1.249 1.249 0 0 1-1.186.854ZM4.22 6.25a2.034 2.034 0 0 1-2.032-2.03c0-1.12.912-2.032 2.032-2.032s2.032.911 2.032 2.031S5.34 6.251 4.22 6.251Zm0-2.813a.783.783 0 0 0 0 1.564.783.783 0 0 0 0-1.564Z"></path></g><defs><clipPath id="ama"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-assets";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Assets);
}
