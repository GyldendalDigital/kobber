export class Chat extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#awa)"><path fill="currentColor" d="M16.872 20a.62.62 0 0 1-.441-.183l-3.567-3.567h-.366c-2.756 0-5-2.243-5-5s2.244-5 5-5h2.5c2.758 0 5 2.243 5 5a4.978 4.978 0 0 1-2.5 4.316v3.809a.625.625 0 0 1-.626.625ZM12.498 7.5a3.754 3.754 0 0 0-3.75 3.75 3.755 3.755 0 0 0 3.75 3.75h.625c.165 0 .325.067.441.183l2.683 2.684v-2.678a.63.63 0 0 1 .358-.565 3.759 3.759 0 0 0 2.142-3.374A3.753 3.753 0 0 0 15 7.5h-2.502Z"></path><path fill="currentColor" d="M3.122 13.75a.623.623 0 0 1-.625-.625V9.317A4.973 4.973 0 0 1 .29 6.674 4.957 4.957 0 0 1 .475 2.86 5.012 5.012 0 0 1 4.987 0h2.51a5.033 5.033 0 0 1 4.794 3.572.625.625 0 0 1-1.198.356A3.776 3.776 0 0 0 7.497 1.25h-2.5a3.76 3.76 0 0 0-3.392 2.143 3.717 3.717 0 0 0-.14 2.86 3.717 3.717 0 0 0 1.924 2.12.628.628 0 0 1 .358.565v2.679l1.434-1.434a.622.622 0 0 1 1.066.442.627.627 0 0 1-.183.443l-2.5 2.5a.62.62 0 0 1-.442.182Z"></path></g><defs><clipPath id="awa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-chat";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Chat);
}
