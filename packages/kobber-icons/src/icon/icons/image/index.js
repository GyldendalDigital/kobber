export class Image extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#cka)"><path fill="currentColor" d="M2.52 20a1.876 1.876 0 0 1-1.876-1.875V1.875A1.877 1.877 0 0 1 2.52 0h12.5c.492 0 .956.19 1.31.532l2.462 2.403c.359.352.565.84.565 1.342v13.848A1.877 1.877 0 0 1 17.48 20H2.519Zm0-18.75a.625.625 0 0 0-.626.625v16.25c0 .345.28.625.625.625h14.962a.625.625 0 0 0 .625-.625V4.277a.628.628 0 0 0-.189-.447l-2.462-2.402a.62.62 0 0 0-.436-.178H2.52Z"></path><path fill="currentColor" d="M6.894 8.75a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5 1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5Zm0-3.75a1.251 1.251 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm8.784 10.792a.625.625 0 0 1-.521-.279l-3.271-4.906a.22.22 0 0 0-.303-.062.22.22 0 0 0-.057.057l-2.243 3.205a.625.625 0 0 1-.904.129L6.99 12.82a.214.214 0 0 0-.159-.046.213.213 0 0 0-.146.08l-1.77 2.658a.625.625 0 1 1-1.041-.692l1.759-2.643a1.455 1.455 0 0 1 1.226-.655c.334 0 .65.112.913.323l.87.697 1.86-2.657a1.465 1.465 0 0 1 2.425.028l3.27 4.906a.624.624 0 0 1-.519.972Z"></path></g><defs><clipPath id="cka"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-image";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Image);
}
