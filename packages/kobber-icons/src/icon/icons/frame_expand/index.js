export class FrameExpand extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#cba)"><path fill="currentColor" d="M19.38 6.875a.625.625 0 0 1-.626-.625V1.873a.625.625 0 0 0-.625-.625h-4.375a.625.625 0 0 1 0-1.25h4.375a1.877 1.877 0 0 1 1.875 1.875V6.25a.625.625 0 0 1-.625.625Zm-5.626 13.122a.625.625 0 1 1 0-1.25h4.375a.625.625 0 0 0 .625-.625V13.75a.625.625 0 0 1 1.25 0v4.372a1.877 1.877 0 0 1-1.875 1.875h-4.375ZM1.88 20a1.876 1.876 0 0 1-1.876-1.875V13.75a.625.625 0 1 1 1.25 0v4.375c0 .345.28.625.625.625h4.375a.625.625 0 1 1 0 1.25H1.88ZM.63 6.875a.625.625 0 0 1-.626-.625V1.873A1.877 1.877 0 0 1 1.88-.002h4.375a.625.625 0 0 1 0 1.25H1.88a.625.625 0 0 0-.625.625V6.25a.625.625 0 0 1-.625.625Z"></path></g><defs><clipPath id="cba"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-frame_expand";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FrameExpand);
}
