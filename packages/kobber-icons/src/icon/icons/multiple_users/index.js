export class MultipleUsers extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dka)"><path fill="currentColor" d="M9.583 6.875a3.442 3.442 0 0 1-3.437-3.438c0-.483.1-.954.3-1.4l.015-.029A3.45 3.45 0 0 1 9.583 0a3.442 3.442 0 0 1 3.435 3.49.561.561 0 0 1-.007.14 3.43 3.43 0 0 1-3.428 3.245Zm-2.185-3.53a2.191 2.191 0 0 0 2.185 2.28 2.198 2.198 0 0 0 1.998-1.295 6.263 6.263 0 0 1-4.183-.984Zm.441-1.222a4.978 4.978 0 0 0 3.893.919A2.19 2.19 0 0 0 9.584 1.25c-.686 0-1.332.33-1.744.873Z"></path><path fill="currentColor" d="M6.207 9.375a.625.625 0 0 1-.42-1.087 5.637 5.637 0 0 1 3.796-1.475 5.64 5.64 0 0 1 3.798 1.475.625.625 0 0 1-.84.925 4.395 4.395 0 0 0-2.958-1.15c-1.09 0-2.141.409-2.956 1.15a.622.622 0 0 1-.42.162Zm9.21 7.5a3.442 3.442 0 0 1-3.438-3.438c0-.482.101-.953.3-1.399l.014-.029A3.453 3.453 0 0 1 15.417 10a3.442 3.442 0 0 1 3.435 3.49.566.566 0 0 1-.008.14 3.431 3.431 0 0 1-3.427 3.245Zm-2.185-3.533a2.19 2.19 0 0 0 2.185 2.284 2.196 2.196 0 0 0 1.997-1.297 6.333 6.333 0 0 1-4.183-.987Zm.44-1.218a5.04 5.04 0 0 0 3.893.918 2.188 2.188 0 0 0-2.148-1.792c-.687 0-1.335.33-1.745.874Z"></path><path fill="currentColor" d="M11.458 20a.624.624 0 0 1-.492-1.01 5.64 5.64 0 0 1 .977-.976 5.587 5.587 0 0 1 3.469-1.193 5.617 5.617 0 0 1 4.456 2.17.619.619 0 0 1 .128.46.62.62 0 0 1-.62.549.622.622 0 0 1-.494-.24 4.375 4.375 0 0 0-3.47-1.69 4.347 4.347 0 0 0-2.701.93c-.284.22-.54.477-.76.76a.62.62 0 0 1-.493.24Zm-6.875-3.125a3.442 3.442 0 0 1-3.437-3.438c0-.483.1-.954.3-1.399l.015-.028A3.448 3.448 0 0 1 4.583 10a3.442 3.442 0 0 1 3.435 3.49.565.565 0 0 1-.007.14 3.431 3.431 0 0 1-3.428 3.245Zm-2.185-3.533a2.19 2.19 0 0 0 2.185 2.284 2.196 2.196 0 0 0 1.998-1.297 6.333 6.333 0 0 1-4.182-.987Zm.44-1.218a5.043 5.043 0 0 0 3.894.918 2.189 2.189 0 0 0-2.149-1.792c-.686 0-1.334.33-1.745.874Z"></path><path fill="currentColor" d="M8.542 20a.62.62 0 0 1-.494-.24 4.372 4.372 0 0 0-3.47-1.69 4.343 4.343 0 0 0-2.7.93c-.284.22-.54.477-.76.76a.624.624 0 0 1-1.038-.077.622.622 0 0 1 .052-.693c.284-.364.612-.692.976-.977a5.587 5.587 0 0 1 3.47-1.193 5.615 5.615 0 0 1 4.456 2.17.625.625 0 0 1-.492 1.01Z"></path></g><defs><clipPath id="dka"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-multiple_users";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, MultipleUsers);
}
