export class UserEdit extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fra)"><path fill="currentColor" d="M6.24 8.125a4.067 4.067 0 0 1-4.062-4.063c0-.699.185-1.39.533-2.003.014-.029.029-.05.038-.064A4.082 4.082 0 0 1 6.241 0c1.99 0 3.71 1.482 4.011 3.448a.583.583 0 0 1 .019.128c.021.18.032.336.032.486a4.067 4.067 0 0 1-4.062 4.063Zm-2.724-4.76a2.816 2.816 0 0 0 2.725 3.51 2.817 2.817 0 0 0 2.782-2.402 6.272 6.272 0 0 1-1.632.215h-.006a6.324 6.324 0 0 1-3.87-1.324Zm3.894.073c.505 0 1.014-.079 1.508-.236A2.83 2.83 0 0 0 6.24 1.25c-.823 0-1.602.364-2.134.987a5.14 5.14 0 0 0 3.27 1.2h.01l.023.001ZM9.366 20a.619.619 0 0 1-.442-.183.62.62 0 0 1-.17-.564l.624-3.125a.623.623 0 0 1 .171-.32l6.359-6.36c.45-.45 1.05-.698 1.688-.698.638 0 1.238.248 1.688.698l.014.014c.931.915.96 2.411.063 3.34a.748.748 0 0 1-.17.131l-6.258 6.259a.62.62 0 0 1-.32.17l-3.125.626a.614.614 0 0 1-.122.012Zm.797-1.422 2.02-.404 6.224-6.225a.624.624 0 0 1 .127-.098c.359-.45.311-1.086-.12-1.503a1.106 1.106 0 0 0-.817-.348c-.304 0-.591.118-.806.333l-6.224 6.225-.404 2.02Z"></path><path fill="currentColor" d="M.616 15a.626.626 0 0 1-.625-.623 6.238 6.238 0 0 1 6.224-6.255c.564 0 1.13.077 1.678.23a6.188 6.188 0 0 1 3.757 2.94.623.623 0 0 1-.543.932.628.628 0 0 1-.545-.317 4.996 4.996 0 0 0-4.348-2.531c-.852 0-1.696.222-2.441.643a4.989 4.989 0 0 0-2.533 4.354.624.624 0 0 1-.622.627H.616Z"></path></g><defs><clipPath id="fra"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-user_edit";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, UserEdit);
}
