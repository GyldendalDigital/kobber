export class ExpandResize extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#bua)"><path fill="currentColor" d="M.625 19.998a.628.628 0 0 1-.217-.039l-.018-.006a.63.63 0 0 1-.39-.58v-5.625a.625.625 0 0 1 1.25 0v4.116l6.433-6.433a.619.619 0 0 1 .884 0 .62.62 0 0 1 0 .883l-6.434 6.433H6.25a.625.625 0 0 1 0 1.25l-5.625.001Zm11.25-11.25a.619.619 0 0 1-.442-.183.619.619 0 0 1-.183-.442c0-.166.065-.324.183-.441l6.434-6.434H13.75a.625.625 0 1 1 0-1.25h5.625a.625.625 0 0 1 .578.387l.008.022A.59.59 0 0 1 20 .623v5.625a.625.625 0 1 1-1.25 0V2.132l-6.433 6.434a.622.622 0 0 1-.442.182Z"></path></g><defs><clipPath id="bua"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-expand_resize";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ExpandResize);
}
