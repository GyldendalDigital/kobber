export class Users extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><path fill="currentColor" d="M19.375 17.5a.625.625 0 0 1-.625-.625c0-.37-.042-.74-.123-1.1a4.974 4.974 0 0 0-2.212-3.13 4.985 4.985 0 0 0-3.776-.647.623.623 0 0 1-.667-.943.624.624 0 0 1 .391-.275 6.234 6.234 0 0 1 4.72.81 6.215 6.215 0 0 1 2.764 3.908c.1.45.153.914.153 1.375 0 .344-.28.625-.625.626Z"></path><path fill="currentColor" d="M13.747 10.623c-.502 0-1-.093-1.467-.275a.617.617 0 0 1-.346-.33.619.619 0 0 1 .32-.822.63.63 0 0 1 .479-.013 2.809 2.809 0 0 0 3.794-2.211 6.3 6.3 0 0 1-4.986-.75.615.615 0 0 1-.277-.389.622.622 0 0 1 .943-.668 5.044 5.044 0 0 0 2.681.772h.027a5.04 5.04 0 0 0 1.51-.235 2.795 2.795 0 0 0-2.09-1.892 2.798 2.798 0 0 0-2.118.392.625.625 0 1 1-.68-1.048 4.04 4.04 0 0 1 3.057-.567 4.036 4.036 0 0 1 2.563 1.76c.313.483.516 1.019.604 1.594a.61.61 0 0 1 .02.155 4.04 4.04 0 0 1-1.818 3.871 4.04 4.04 0 0 1-2.216.655ZM11.875 17.5a.625.625 0 0 1-.625-.626c0-2.756-2.243-5-5-5s-5 2.243-5 5a.625.625 0 1 1-1.25 0 6.258 6.258 0 0 1 6.25-6.25 6.258 6.258 0 0 1 6.25 6.25.625.625 0 0 1-.625.625Z"></path><path fill="currentColor" d="M10.402 10.838a.632.632 0 0 1-.534-.299 5.493 5.493 0 0 1-.575-1.293 4.028 4.028 0 0 1-3.044 1.377 4.025 4.025 0 0 1-3.044-1.379 5.505 5.505 0 0 1-.574 1.289.622.622 0 0 1-1.04.042.623.623 0 0 1-.028-.693 4.28 4.28 0 0 0 .625-2.38l.01-.695v-.02a2.822 2.822 0 0 1-.01-.225A4.067 4.067 0 0 1 6.25 2.499a4.067 4.067 0 0 1 4.06 4.124v.864a4.31 4.31 0 0 0 .626 2.401.62.62 0 0 1-.208.86.632.632 0 0 1-.325.09Zm-6.835-3.44a2.81 2.81 0 0 0 5.365.004 5.197 5.197 0 0 1-2.683-1.26 5.193 5.193 0 0 1-2.682 1.256Zm2.683-2.77c.182 0 .354.08.473.217A3.916 3.916 0 0 0 9.03 6.152a2.827 2.827 0 0 0-2.78-2.404 2.826 2.826 0 0 0-2.78 2.4 3.917 3.917 0 0 0 2.307-1.304.622.622 0 0 1 .473-.216Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-users";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Users);
}
