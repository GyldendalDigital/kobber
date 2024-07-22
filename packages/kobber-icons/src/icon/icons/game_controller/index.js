export class GameController extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#cda)"><path fill="currentColor" d="M4.375 12.502a.625.625 0 0 1-.625-.625v-.625h-.625a.625.625 0 1 1 0-1.25h.625v-.625a.625.625 0 0 1 1.25 0v.625h.625a.625.625 0 0 1 0 1.25H5v.625a.625.625 0 0 1-.625.625Zm10-.625a.938.938 0 0 1-.928-1.046.938.938 0 0 1 1.038-.82.938.938 0 0 1 .82 1.038.938.938 0 0 1-.93.828Zm1.875-1.875a.94.94 0 0 1-.928-1.045.938.938 0 0 1 .819-.82.598.598 0 0 1 .218 0c.428.05.768.392.818.82a.58.58 0 0 1 0 .216.937.937 0 0 1-.927.829Z"></path><path fill="currentColor" d="M3.289 20.003a3.3 3.3 0 0 1-.845-.11A3.42 3.42 0 0 1 0 16.546v-7.17a4.38 4.38 0 0 1 4.375-4.374h5c0-2.112-1.68-3.75-3.125-3.75H5a.625.625 0 0 1 0-1.25h1.25c2.464 0 4.375 2.687 4.375 5h5A4.38 4.38 0 0 1 20 9.377l.002 7.335a3.286 3.286 0 0 1-3.86 3.239 3.416 3.416 0 0 1-2.465-1.975l-1.606-2.974H7.93l-1.671 3.11a3.27 3.27 0 0 1-2.971 1.891ZM4.375 6.252A3.128 3.128 0 0 0 1.25 9.377v7.185a2.165 2.165 0 0 0 1.532 2.129 2.044 2.044 0 0 0 2.357-1.133l1.867-3.476a.624.624 0 0 1 .55-.33h4.887c.23 0 .44.126.55.328l1.797 3.327.026.053a2.153 2.153 0 0 0 1.557 1.263 2.036 2.036 0 0 0 2.38-2.011l-.003-4.21V9.377a3.128 3.128 0 0 0-3.125-3.125H4.375Z"></path></g><defs><clipPath id="cda"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-game_controller";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, GameController);
}
