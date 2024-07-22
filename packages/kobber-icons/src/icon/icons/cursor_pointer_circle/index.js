export class CursorPointerCircle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") || ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		const role = ariaHidden ? "presentation" : "img";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bka)"><path fill="currentColor" d="M8.547 20.003a.627.627 0 0 1-.5-.25L4.84 15.476a1.908 1.908 0 0 1-.062-2.197 1.904 1.904 0 0 1 2.722-.468l.419.314v-6.87a1.877 1.877 0 0 1 3.754 0v4.498l2.988.665a3.133 3.133 0 0 1 2.435 3.334l-.426 4.685a.622.622 0 0 1-.622.568l-7.5-.002Zm6.929-1.248.374-4.117a1.878 1.878 0 0 0-1.46-2l-3.48-.773a.62.62 0 0 1-.488-.61v-5a.627.627 0 0 0-1.254 0v8.122a.621.621 0 0 1-.625.625.63.63 0 0 1-.376-.125L6.75 13.813l-.03-.02a.65.65 0 0 0-.882.934l3.021 4.027 6.617.002Z"></path><path fill="currentColor" d="M5.422 11.963a.621.621 0 0 1-.439-.179c-2.705-2.655-2.745-7.017-.09-9.722A6.823 6.823 0 0 1 9.8.006a6.873 6.873 0 0 1 5.952 10.312.63.63 0 0 1-.854.228.626.626 0 0 1-.228-.854 5.625 5.625 0 0 0-.93-6.83A5.593 5.593 0 0 0 9.8 1.255a5.582 5.582 0 0 0-4.014 1.682 5.632 5.632 0 0 0 .075 7.956.624.624 0 0 1-.44 1.07Z"></path></g><defs><clipPath id="bka"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-cursor_pointer_circle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, CursorPointerCircle);
}
