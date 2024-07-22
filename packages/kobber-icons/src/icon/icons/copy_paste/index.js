export class CopyPaste extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#bia)"><path fill="currentColor" d="M1.875 19.998A1.876 1.876 0 0 1 0 18.123V4.373a1.877 1.877 0 0 1 1.875-1.875h2.466l-.284-.855a1.237 1.237 0 0 1 .066-.952c.149-.3.404-.522.721-.628a1.18 1.18 0 0 1 .373-.065h7.04c.335 0 .647.13.883.364a1.242 1.242 0 0 1 .303 1.284l-.285.852h2.467A1.877 1.877 0 0 1 17.5 4.373v2.5a.625.625 0 1 1-1.25 0v-2.5a.625.625 0 0 0-.625-.625h-2.883l-.132.395a1.25 1.25 0 0 1-1.186.855H6.076a1.25 1.25 0 0 1-1.186-.854l-.132-.396H1.875a.625.625 0 0 0-.625.625v13.75c0 .345.28.625.625.625h5a.625.625 0 1 1 0 1.25h-5Zm3.366-18.75.834 2.5h5.35l.832-2.5H5.242Z"></path><path fill="currentColor" d="M10.625 19.998a1.877 1.877 0 0 1-1.875-1.875v-7.5a1.877 1.877 0 0 1 1.875-1.875h7.5A1.877 1.877 0 0 1 20 10.623v7.5a1.876 1.876 0 0 1-1.875 1.875h-7.5Zm0-10a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5a.625.625 0 0 0 .625-.625v-7.5a.625.625 0 0 0-.625-.625h-7.5Z"></path><path fill="currentColor" d="M11.875 12.498a.625.625 0 1 1 0-1.25h5a.625.625 0 0 1 0 1.25h-5Zm0 2.5a.625.625 0 1 1 0-1.25h5a.625.625 0 0 1 0 1.25h-5Zm0 2.5a.625.625 0 1 1 0-1.25h1.875a.625.625 0 0 1 0 1.25h-1.875Z"></path></g><defs><clipPath id="bia"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-copy_paste";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, CopyPaste);
}
