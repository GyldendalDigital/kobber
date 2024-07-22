export class MessageStar extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dfa)"><path fill="currentColor" d="M11.158 19.998a1.286 1.286 0 0 1-1.109-.638 1.29 1.29 0 0 1-.074-1.135l1.035-2.377-1.862-1.835a1.19 1.19 0 0 1-.39-.831 1.235 1.235 0 0 1 .748-1.21 1.23 1.23 0 0 1 .532-.098h2.078l1.118-2.407c.174-.329.446-.558.776-.66a1.29 1.29 0 0 1 1.52.63l.018.036 1.115 2.402h2.108c.307 0 .603.116.832.328a1.235 1.235 0 0 1-.016 1.832l-1.818 1.812 1.032 2.37a1.283 1.283 0 0 1-1.177 1.78 1.28 1.28 0 0 1-.64-.17l-2.594-1.459-2.598 1.463a1.28 1.28 0 0 1-.634.167Zm-.033-1.283s0 .01.006.018c.007.013.022.014.026.014l2.926-1.643a.631.631 0 0 1 .613 0l2.907 1.634.021.008c.024-.008.033-.028.027-.042l-1.198-2.75a.622.622 0 0 1 .131-.693l2.148-2.138h-2.469a.627.627 0 0 1-.566-.362l-1.274-2.745a.038.038 0 0 0-.014-.012l-.123-.301.092.298a.04.04 0 0 0-.025.02l-1.272 2.74a.627.627 0 0 1-.567.362h-2.487l2.166 2.135a.63.63 0 0 1 .134.695l-1.202 2.762Z"></path><path fill="currentColor" d="M.625 20a.625.625 0 0 1-.565-.893l2.426-5.095a9.43 9.43 0 0 1-1.215-4.006C.913 4.848 4.817.362 9.975.003c.217-.015.438-.022.655-.022 4.902 0 9.007 3.833 9.347 8.726a.62.62 0 0 1-.58.666.627.627 0 0 1-.667-.58c-.295-4.24-3.853-7.562-8.102-7.562a8.07 8.07 0 0 0-6.13 2.794 8.07 8.07 0 0 0-1.98 5.893 8.158 8.158 0 0 0 1.207 3.73.62.62 0 0 1 .033.6l-1.811 3.806 3.805-1.811a.623.623 0 0 1 .598.033 8.44 8.44 0 0 0 1.376.684.623.623 0 0 1-.226 1.207.63.63 0 0 1-.224-.042 9.619 9.619 0 0 1-1.288-.612L.894 19.94a.63.63 0 0 1-.27.061Z"></path></g><defs><clipPath id="dfa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-message_star";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, MessageStar);
}
