export class PenTools extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dwa)"><path fill="currentColor" d="M6.178 20.008a4.38 4.38 0 0 1-4.375-4.375v-7.5a.625.625 0 0 1 .625-.625h.991l-.346-.982A2.483 2.483 0 0 1 1.243 5.1l-.01-.023a5.375 5.375 0 0 1 .01-4.72.63.63 0 0 1 .561-.349c.154 0 .302.057.417.16 1.337 1.2 1.562 1.283 1.82 1.38.192.07.429.159.87.443.39.257.698.62.887 1.047a2.47 2.47 0 0 1 .105 1.779l1.67 2.691h.024L9.135 3.15a.627.627 0 0 1 .155-.241L12.13.167a.621.621 0 0 1 .64-.14c.226.08.383.275.413.512l.49 3.915a.622.622 0 0 1-.031.287l-.976 2.767h2.262a4.38 4.38 0 0 1 4.375 4.375 4.38 4.38 0 0 1-4.375 4.375h-.673c-.307 2.125-2.153 3.75-4.327 3.75h-3.75Zm-3.125-4.375a3.128 3.128 0 0 0 3.125 3.125h3.75a3.129 3.129 0 0 0 3.125-3.125V8.758h-10v6.875Zm11.875-.625a3.129 3.129 0 0 0 3.125-3.125 3.129 3.129 0 0 0-3.125-3.125h-.625v6.25h.625Zm-3.588-7.5.588-1.666a3.606 3.606 0 0 1-2.15-.76l-.855 2.426h2.417Zm-5.237 0-.959-1.544c-.23.2-.496.354-.783.456l.383 1.088h1.359ZM2.38 4.583a1.243 1.243 0 0 0 1.06.73.617.617 0 0 1 .17 0 1.244 1.244 0 0 0 1.002-.645.612.612 0 0 1 .061-.127l.016-.036a1.24 1.24 0 0 0-.032-.956 1.19 1.19 0 0 0-.43-.512 2.66 2.66 0 0 0-.621-.318c-.364-.135-.65-.266-1.534-1.019a4.131 4.131 0 0 0 .301 2.87l.007.013Zm7.851-.785a2.337 2.337 0 0 0 2.15.758l.033-.093-.316-2.528-1.834 1.77-.033.093Z"></path></g><defs><clipPath id="dwa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-pen_tools";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, PenTools);
}
