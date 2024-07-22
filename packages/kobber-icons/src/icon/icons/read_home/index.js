export class ReadHome extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#eha)"><path fill="currentColor" d="M7.348 17.016a.638.638 0 0 1-.224-.041 15.978 15.978 0 0 0-5.341-1.048A1.884 1.884 0 0 1 0 14.042V2.917A1.864 1.864 0 0 1 .546 1.59a1.862 1.862 0 0 1 1.324-.553l.047.002.09.003c3.172.169 5.186.954 6.316 1.583.708.395 1.28.843 1.676 1.315.397-.471.968-.92 1.677-1.315 1.13-.63 3.145-1.415 6.327-1.583.034-.003.08-.004.123-.005a1.863 1.863 0 0 1 1.327.553c.355.355.548.827.547 1.327v6.855a.625.625 0 1 1-1.25 0V2.917a.624.624 0 0 0-.623-.629l-.034.001c-5.252.278-7.468 2.337-7.468 3.11l.008 4.374a.622.622 0 0 1-.863.579.624.624 0 0 1-.387-.577L9.375 5.4c0-.773-2.214-2.832-7.443-3.108l-.044-.004a.633.633 0 0 0-.591.388.62.62 0 0 0-.047.239v11.13a.625.625 0 0 0 .586.633c1.955.044 3.889.424 5.734 1.129a.626.626 0 0 1-.222 1.209Z"></path><path fill="currentColor" d="m13.125 19.148-.034-.001h-1.216A1.877 1.877 0 0 1 10 17.272v-3.456l-.213.186a.621.621 0 0 1-.883-.059.626.626 0 0 1 .06-.881l3.764-3.295a2.496 2.496 0 0 1 1.647-.615c.607 0 1.193.218 1.647.615l3.765 3.295a.626.626 0 0 1-.37 1.093.625.625 0 0 1-.453-.153l-.214-.186v3.456a1.877 1.877 0 0 1-1.875 1.875h-1.217a.56.56 0 0 1-.034.001h-2.499Zm3.75-1.251a.625.625 0 0 0 .625-.625v-4.55l-2.302-2.015a1.25 1.25 0 0 0-.824-.307 1.25 1.25 0 0 0-.823.307l-2.301 2.015v4.55c0 .345.28.625.625.625h.625v-1.874c0-1.034.84-1.875 1.875-1.875 1.034 0 1.875.841 1.875 1.875v1.874h.625Zm-1.875 0v-1.874a.625.625 0 1 0-1.25 0v1.874H15Z"></path></g><defs><clipPath id="eha"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-read_home";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ReadHome);
}
