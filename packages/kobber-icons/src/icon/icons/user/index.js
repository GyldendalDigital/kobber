export class User extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M10 10c-2.757 0-5-2.243-5-5a5 5 0 0 1 .67-2.498l.008-.014A5.024 5.024 0 0 1 10 0c2.757 0 5 2.243 5 5s-2.243 5-5 5ZM6.442 3.822C6.316 4.202 6.25 4.6 6.25 5A3.755 3.755 0 0 0 10 8.75a3.756 3.756 0 0 0 3.74-3.462 7.873 7.873 0 0 1-2.273.337h-.017a7.99 7.99 0 0 1-5.007-1.803Zm.604-1.129a6.702 6.702 0 0 0 4.41 1.682c.74 0 1.465-.122 2.16-.362A3.759 3.759 0 0 0 10 1.25a3.747 3.747 0 0 0-2.954 1.443ZM18.125 20a.624.624 0 0 1-.625-.625c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a.625.625 0 1 1-1.25 0c0-4.825 3.925-8.75 8.75-8.75s8.75 3.925 8.75 8.75a.624.624 0 0 1-.625.625Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-user";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, User);
}
