export class FontExpand extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bza)"><path fill="currentColor" d="M3.75 19.377a.62.62 0 0 1-.222-.042l-.014-.005a.617.617 0 0 1-.206-.137l-2.5-2.5a.627.627 0 0 1 .442-1.068c.167 0 .324.065.442.183l1.433 1.434v-2.866a.625.625 0 0 1 1.25 0v2.866l1.433-1.434a.62.62 0 0 1 .884 0 .627.627 0 0 1 0 .884l-2.5 2.5a.305.305 0 0 1-.039.033.59.59 0 0 1-.165.103l-.021.009a.604.604 0 0 1-.217.04Zm0-13.125a.625.625 0 0 1-.625-.625V2.76L1.692 4.193a.619.619 0 0 1-.442.184.619.619 0 0 1-.442-.184.619.619 0 0 1-.183-.441.62.62 0 0 1 .183-.442l2.5-2.5A.618.618 0 0 1 3.71.632a.655.655 0 0 1 .24.03c.014.002.027.007.04.012a.632.632 0 0 1 .202.136l2.5 2.5a.619.619 0 0 1 .183.442.619.619 0 0 1-.183.441.619.619 0 0 1-.442.184.619.619 0 0 1-.442-.184L4.375 2.76v2.866c0 .345-.28.626-.625.626Zm13.95 9.376c-.01 0-.023 0-.035-.002H16.25a.625.625 0 0 1 0-1.25h.574l-1.288-3.75h-3.573l-1.288 3.75h.575a.625.625 0 0 1 0 1.25h-2.5a.625.625 0 0 1 0-1.25h.603l3.661-10.654c.19-.553.611-.596.736-.596s.546.043.736.596l3.66 10.655h.604a.625.625 0 0 1 0 1.25h-1.018l-.031.001Zm-2.593-6.251L13.75 5.428l-1.357 3.949h2.714Z"></path></g><defs><clipPath id="bza"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-font_expand";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FontExpand);
}
