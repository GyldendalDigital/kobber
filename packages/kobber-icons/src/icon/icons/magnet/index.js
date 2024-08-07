export class Magnet extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#dba)"><path fill="currentColor" d="M8.134 19.782a7.864 7.864 0 0 1-5.597-2.315c-3.086-3.091-3.084-8.111 0-11.194L5.608 3.2l.019-.02a.394.394 0 0 1 .02-.02L8.203.604a1.35 1.35 0 0 1 .959-.396c.361 0 .701.14.956.394l2.064 2.064a1.355 1.355 0 0 1-.001 1.914L6.51 10.25a2.293 2.293 0 0 0 0 3.24c.432.432 1.007.67 1.62.67.612 0 1.188-.238 1.62-.67l5.67-5.67a1.346 1.346 0 0 1 .958-.397c.363 0 .703.14.958.396l2.066 2.065a1.36 1.36 0 0 1 0 1.915l-5.671 5.669a7.863 7.863 0 0 1-5.597 2.314Zm-4.713-3.2a6.62 6.62 0 0 0 4.713 1.95 6.62 6.62 0 0 0 4.712-1.947l2.652-2.65-2.212-2.212-2.652 2.652a3.521 3.521 0 0 1-2.504 1.036 3.516 3.516 0 0 1-2.504-1.036 3.547 3.547 0 0 1 0-5.008l2.651-2.652L6.07 4.507l-2.648 2.65a6.619 6.619 0 0 0-1.95 4.712c0 1.783.692 3.456 1.949 4.713Zm12.96-3.531 2.137-2.135a.107.107 0 0 0 0-.149l-2.066-2.064a.104.104 0 0 0-.073-.03.1.1 0 0 0-.07.027l-2.139 2.14 2.212 2.21Zm-7.22-7.22 2.136-2.136a.104.104 0 0 0 .001-.146L9.235 1.486a.106.106 0 0 0-.148 0L6.953 3.624 9.162 5.83Z"></path></g><defs><clipPath id="dba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-magnet";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Magnet);
}
