export class FlipRight extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bxa)"><path fill="currentColor" d="M4.696 13.125a.62.62 0 0 1-.624-.592.621.621 0 0 1 .036-.241 6.209 6.209 0 0 1 3.2-3.557 6.202 6.202 0 0 1 4.777-.253c.689.245 1.33.608 1.892 1.074l-.222-1.863a.62.62 0 0 1 .347-.637.625.625 0 0 1 .893.489l.44 3.67a.622.622 0 0 1-.528.693l-.07.01a.717.717 0 0 1-.058.008l-3.577.535a.628.628 0 0 1-.595-.991.622.622 0 0 1 .41-.246l2.525-.377A5.005 5.005 0 0 0 9.998 9.37c-.745 0-1.47.165-2.151.49a4.966 4.966 0 0 0-2.56 2.846.63.63 0 0 1-.591.418Z"></path><path fill="currentColor" d="M1.875 20A1.876 1.876 0 0 1 0 18.125V1.875A1.877 1.877 0 0 1 1.875 0h6.25a.625.625 0 0 1 0 1.25h-6.25a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h6.25a.625.625 0 1 1 0 1.25h-6.25Zm8.75-15A.625.625 0 0 1 10 4.375V.625a.625.625 0 1 1 1.25 0v3.75a.625.625 0 0 1-.625.625Zm0 15a.624.624 0 0 1-.625-.625v-5a.624.624 0 1 1 1.25 0v5a.624.624 0 0 1-.625.625Zm2.5-18.75a.625.625 0 1 1 0-1.25h1.25a.625.625 0 1 1 0 1.25h-1.25Zm0 18.75a.624.624 0 1 1 0-1.25h1.25a.624.624 0 1 1 0 1.25h-1.25Zm6.25-13.75a.625.625 0 0 1-.625-.625v-1.25a.625.625 0 1 1 1.25 0v1.25a.625.625 0 0 1-.625.625Zm0 5a.624.624 0 0 1-.625-.625v-1.25a.625.625 0 1 1 1.25 0v1.25a.624.624 0 0 1-.625.625Zm0 5a.624.624 0 0 1-.625-.625v-1.25a.624.624 0 1 1 1.25 0v1.25a.624.624 0 0 1-.625.625Zm0-13.75a.625.625 0 0 1-.625-.625.625.625 0 0 0-.625-.625.625.625 0 1 1 0-1.25A1.877 1.877 0 0 1 20 1.875a.625.625 0 0 1-.625.625ZM18.125 20a.624.624 0 1 1 0-1.25c.345 0 .625-.28.625-.625a.624.624 0 1 1 1.25 0A1.876 1.876 0 0 1 18.125 20Z"></path></g><defs><clipPath id="bxa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-flip_right";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FlipRight);
}
