export class Dice extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bma)"><path fill="currentColor" d="M3.438 11.875a.938.938 0 0 1-.928-.828.614.614 0 0 1 0-.219.939.939 0 0 1 1.036-.819c.427.05.769.392.819.82a.598.598 0 0 1 0 .218.937.937 0 0 1-.82.818.58.58 0 0 1-.107.01Zm3.437 0a.938.938 0 0 1-.928-.828.598.598 0 0 1 0-.218.939.939 0 0 1 .82-.819.583.583 0 0 1 .216 0c.428.05.77.39.82.818a.597.597 0 0 1 0 .219.937.937 0 0 1-.82.818.588.588 0 0 1-.108.01Zm3.438 0a.938.938 0 0 1-.928-.828.597.597 0 0 1 0-.218.939.939 0 0 1 .82-.819.581.581 0 0 1 .217 0 .938.938 0 0 1 .819 1.037.938.938 0 0 1-.928.828Zm0-6.875a.597.597 0 0 1-.11-.01.938.938 0 0 1-.818-.818.598.598 0 0 1 0-.219.937.937 0 0 1 .818-.818.597.597 0 0 1 .219 0 .939.939 0 0 1 .819 1.035.939.939 0 0 1-.82.82.533.533 0 0 1-.108.01Zm5.625 0a.938.938 0 0 1-.928-.828.6.6 0 0 1 0-.218.938.938 0 0 1 .818-.819.598.598 0 0 1 .218 0 .939.939 0 0 1 .819 1.036.939.939 0 0 1-.82.819.584.584 0 0 1-.108.01Zm-.001 5.625a.938.938 0 0 1-.928-1.046.938.938 0 0 1 .818-.819.598.598 0 0 1 .219 0 .939.939 0 0 1 .819 1.036.939.939 0 0 1-.82.819.588.588 0 0 1-.108.01ZM3.438 16.25a.938.938 0 0 1-.928-.828.614.614 0 0 1 0-.219.939.939 0 0 1 1.035-.819.94.94 0 0 1 .82.82.598.598 0 0 1 0 .218.937.937 0 0 1-.82.818.57.57 0 0 1-.107.01Zm3.437 0a.938.938 0 0 1-.928-.828.597.597 0 0 1 0-.218.939.939 0 0 1 1.036-.819c.428.05.77.392.82.82a.597.597 0 0 1 0 .217.937.937 0 0 1-.82.819.656.656 0 0 1-.108.009Zm3.438 0a.938.938 0 0 1-.928-.828.597.597 0 0 1 0-.218.939.939 0 0 1 1.037-.819.938.938 0 0 1 .819 1.037.938.938 0 0 1-.928.828Z"></path><path fill="currentColor" d="M1.458 20A1.46 1.46 0 0 1 0 18.542V7.708A1.46 1.46 0 0 1 1.458 6.25h10.834a1.46 1.46 0 0 1 1.458 1.458v10.834A1.46 1.46 0 0 1 12.292 20H1.458Zm0-12.5a.208.208 0 0 0-.208.208v10.834c0 .115.093.208.208.208h10.834a.208.208 0 0 0 .208-.208V7.708a.208.208 0 0 0-.208-.208H1.458Z"></path><path fill="currentColor" d="M15.625 13.75a.624.624 0 1 1 0-1.25h2.5a.624.624 0 0 0 .625-.625v-10a.625.625 0 0 0-.625-.625h-10a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 1-1.25 0v-2.5A1.877 1.877 0 0 1 8.125 0h10A1.877 1.877 0 0 1 20 1.875v10a1.876 1.876 0 0 1-1.875 1.875h-2.5Z"></path></g><defs><clipPath id="bma"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-dice";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Dice);
}
