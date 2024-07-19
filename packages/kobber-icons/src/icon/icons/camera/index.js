export class Camera extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M11.875 15.625c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm0-8.75a3.754 3.754 0 0 0-3.75 3.75 3.755 3.755 0 0 0 3.75 3.75 3.755 3.755 0 0 0 3.75-3.75 3.755 3.755 0 0 0-3.75-3.75Z"></path><path fill="currentColor" d="M1.875 18.125A1.876 1.876 0 0 1 0 16.25v-10a1.877 1.877 0 0 1 1.875-1.875H3.75V3.75a.625.625 0 0 1 1.25 0v.625h2.113l.732-1.463a1.867 1.867 0 0 1 1.678-1.037h4.704c.716 0 1.358.397 1.678 1.037l.732 1.463h1.488A1.877 1.877 0 0 1 20 6.25v10a1.876 1.876 0 0 1-1.875 1.875H1.875Zm0-12.5a.625.625 0 0 0-.625.625v10c0 .345.28.625.625.625h16.25a.624.624 0 0 0 .625-.625v-10a.625.625 0 0 0-.625-.625H16.25a.621.621 0 0 1-.56-.346l-.903-1.809a.623.623 0 0 0-.56-.345H9.523a.622.622 0 0 0-.56.346L8.06 5.279a.622.622 0 0 1-.559.346H1.875Z"></path><path fill="currentColor" d="M3.438 8.75a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-camera";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Camera);
}
