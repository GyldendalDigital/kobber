export class TabletTouch extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#fea)"><path fill="currentColor" d="M19.375 20a.625.625 0 0 1-.625-.625v-2.883a1.869 1.869 0 0 0-1.567-1.849l-1.66-.276A.624.624 0 0 1 15 13.75v-2.5a.625.625 0 0 0-1.25 0v4.375a.63.63 0 0 1-.296.532.629.629 0 0 1-.608.027l-.98-.489a.74.74 0 0 0-.792 1.238l2.442 1.954a.625.625 0 1 1-.781.976l-2.44-1.953a1.994 1.994 0 0 1-.29-2.825 1.986 1.986 0 0 1 2.422-.508l.073.037V11.25c0-1.034.84-1.875 1.875-1.875 1.034 0 1.875.84 1.875 1.875v1.97l1.138.19A3.115 3.115 0 0 1 20 16.493v2.883a.625.625 0 0 1-.625.625Z"></path><path fill="currentColor" d="M1.875 18.75A1.878 1.878 0 0 1 0 16.875v-2.458a.286.286 0 0 1 0-.083V1.875C0 .841.842 0 1.875 0h10a1.877 1.877 0 0 1 1.875 1.875V7.5a.625.625 0 1 1-1.25 0V1.875a.625.625 0 0 0-.625-.625h-10a.625.625 0 0 0-.625.625V13.75h6.875a.625.625 0 1 1 0 1.25H1.25v1.875c0 .345.28.625.625.625h6.25a.625.625 0 1 1 0 1.25h-6.25Z"></path><path fill="currentColor" d="M3.125 7.5a.625.625 0 0 1-.625-.625v-2.5a.625.625 0 0 1 .625-.625h2.5a.625.625 0 0 1 .625.625v2.5a.625.625 0 0 1-.625.625h-2.5ZM5 6.25V5H3.75v1.25H5ZM8.125 7.5a.625.625 0 0 1-.625-.625v-2.5a.625.625 0 0 1 .625-.625h2.5a.625.625 0 0 1 .625.625v2.5a.625.625 0 0 1-.625.625h-2.5ZM10 6.25V5H8.75v1.25H10ZM3.125 12.5a.625.625 0 0 1-.625-.625v-2.5a.625.625 0 0 1 .625-.625h2.5a.625.625 0 0 1 .625.625v2.5c0 .345-3.125.625-3.125.625ZM5 11.25V10H3.75v1.25H5Z"></path></g><defs><clipPath id="fea"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-tablet_touch";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TabletTouch);
}
