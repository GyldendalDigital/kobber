export class Share extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#eua)"><path fill="currentColor" d="M8.821 10.667A.66.66 0 0 1 8.148 10V6.833c0-1.75 1.43-3.166 3.197-3.166h5.385L14.038 1a.634.634 0 0 1-.168-.417c0-.166.084-.333.168-.416a.646.646 0 0 1 .42-.167c.169 0 .337.083.421.167l3.786 3.75c.084.083.084.166.168.166v.5c0 .084-.084.167-.168.25l-3.786 3.75a.646.646 0 0 1-.42.167.646.646 0 0 1-.421-.167.634.634 0 0 1-.168-.416c0-.167.084-.334.168-.417L16.73 5h-5.385c-1.01 0-1.85.833-1.85 1.833V10c-.085.333-.337.667-.674.667Z"></path><path fill="currentColor" d="M3.184 20c-1.01 0-1.85-.833-1.85-1.833v-10c0-1 .84-1.834 1.85-1.834h1.851A.66.66 0 0 1 5.708 7c0 .25-.336.5-.673.5h-1.85c-.421 0-.674.25-.674.667v10a.66.66 0 0 0 .673.666h11.358a.66.66 0 0 0 .674-.666v-6.25a.66.66 0 0 1 .673-.667c.42 0 .673.25.673.667v6.25c0 1-.842 1.833-1.851 1.833H3.184Z"></path></g><defs><clipPath id="eua"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-share";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Share);
}
