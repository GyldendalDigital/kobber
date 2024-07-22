export class TaskList extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ffa)"><path fill="currentColor" d="M6.25 9.383a.625.625 0 0 1 0-1.25h7.5a.625.625 0 1 1 0 1.25h-7.5Zm0 3.125a.625.625 0 1 1 0-1.25h7.5a.624.624 0 1 1 0 1.25h-7.5Zm0 3.125a.625.625 0 1 1 0-1.25h7.5a.624.624 0 1 1 0 1.25h-7.5Z"></path><path fill="currentColor" d="M3.75 20.008a1.876 1.876 0 0 1-1.875-1.875V5.008A1.877 1.877 0 0 1 3.75 3.133h2.553C6.603 1.36 8.175.008 10 .008s3.397 1.351 3.697 3.125h2.553a1.877 1.877 0 0 1 1.875 1.875v13.125a1.876 1.876 0 0 1-1.875 1.875H3.75Zm0-15.625a.625.625 0 0 0-.625.625v13.125c0 .345.28.625.625.625h12.5a.624.624 0 0 0 .625-.625V5.008a.625.625 0 0 0-.625-.625h-3.125a.625.625 0 0 1-.625-.625c0-1.378-1.122-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5.625.625 0 0 1-.625.625H3.75Z"></path><path fill="currentColor" d="M10 4.383a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"></path></g><defs><clipPath id="ffa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-task_list";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TaskList);
}
