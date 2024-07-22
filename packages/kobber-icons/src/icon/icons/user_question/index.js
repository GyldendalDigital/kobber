export class UserQuestion extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#fsa)"><path fill="currentColor" d="M12.918 20a.625.625 0 0 1-.625-.625v-3.116a.623.623 0 0 1 .727-.617l.84.14a1.863 1.863 0 0 0 1.398-.323 1.863 1.863 0 0 0 .785-1.527v-2.048a.625.625 0 0 1 .474-.607l.779-.194a.622.622 0 0 0 .368-.954l-1.516-2.274a.622.622 0 0 1-.105-.347v-.625c0-1.417-.63-2.772-1.775-3.815-1.286-1.171-3.041-1.816-4.941-1.816-.26 0-.523.012-.783.036a6.878 6.878 0 0 0-6.222 7.464A6.879 6.879 0 0 0 5.73 14.08a.626.626 0 0 1 .313.54v4.75a.625.625 0 0 1-1.25 0v-4.398a8.153 8.153 0 0 1-3.716-6.108 8.062 8.062 0 0 1 1.851-5.93 8.066 8.066 0 0 1 5.5-2.89 9.27 9.27 0 0 1 .897-.043c2.213 0 4.267.76 5.783 2.143 1.408 1.283 2.184 2.965 2.184 4.74v.435l1.41 2.117c.12.179.207.376.259.586a1.863 1.863 0 0 1-.211 1.419 1.858 1.858 0 0 1-1.153.854l-.306.077v1.56a3.125 3.125 0 0 1-3.64 3.083l-.111-.018v2.378a.62.62 0 0 1-.622.624Z"></path><path fill="currentColor" d="M9.644 11.25a.625.625 0 0 1-.625-.625v-.213a1.876 1.876 0 0 1 1.25-1.769 1.878 1.878 0 0 0 1.25-1.767A1.877 1.877 0 0 0 9.644 5 1.878 1.878 0 0 0 7.77 6.876a.625.625 0 0 1-1.25-.001 3.128 3.128 0 0 1 3.125-3.124 3.13 3.13 0 0 1 3.125 3.126 3.13 3.13 0 0 1-2.083 2.946.627.627 0 0 0-.417.589v.214a.625.625 0 0 1-.625.624Zm0 3.125a.938.938 0 1 0 0-1.875.938.938 0 0 0 0 1.875Z"></path></g><defs><clipPath id="fsa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-user_question";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, UserQuestion);
}
