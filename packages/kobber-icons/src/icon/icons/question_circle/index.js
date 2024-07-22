export class QuestionCircle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#eda)"><path fill="currentColor" d="M10 12.5a.625.625 0 0 1-.625-.625v-.838a1.876 1.876 0 0 1 1.25-1.769 1.878 1.878 0 0 0 .093-3.5A1.86 1.86 0 0 0 10 5.625c-.5 0-.972.195-1.326.549A1.86 1.86 0 0 0 8.125 7.5a.625.625 0 0 1-1.25 0c0-.835.326-1.62.916-2.21A3.104 3.104 0 0 1 10 4.377 3.13 3.13 0 0 1 13.125 7.5a3.13 3.13 0 0 1-2.083 2.946.627.627 0 0 0-.417.589v.839A.625.625 0 0 1 10 12.5Zm0 3.125a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"></path><path fill="currentColor" d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10Zm0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S14.825 1.25 10 1.25Z"></path></g><defs><clipPath id="eda"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-question_circle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, QuestionCircle);
}
