export class DrawTablet extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bpa)"><path fill="currentColor" d="M1.875 20.002A1.877 1.877 0 0 1 0 18.127V6.252a1.877 1.877 0 0 1 1.875-1.875h7.5a.625.625 0 0 1 0 1.25h-7.5a.625.625 0 0 0-.625.625v11.875c0 .345.28.625.625.625h16.25a.625.625 0 0 0 .625-.625v-10a.625.625 0 1 1 1.25 0v10a1.876 1.876 0 0 1-1.875 1.875H1.875Z"></path><path fill="currentColor" d="M10.29 12.267a.622.622 0 0 1-.624-.663l.19-3.18a.623.623 0 0 1 .127-.342L15.408.947a2.37 2.37 0 0 1 1.905-.945c.524 0 1.02.167 1.438.482a2.398 2.398 0 0 1 .476 3.346l-5.43 7.142a.628.628 0 0 1-.291.211l-3.011 1.05a.632.632 0 0 1-.205.034Zm.68-1.524 1.947-.678 5.31-6.983a1.143 1.143 0 1 0-1.824-1.379l-5.31 6.985-.123 2.055Z"></path><path fill="currentColor" d="M10.306 18.127a4.033 4.033 0 0 1-3.636-2.258 4.011 4.011 0 0 1-.41-1.479H5.18a1.431 1.431 0 0 1-1.43-1.427V8.944c0-.788.64-1.43 1.43-1.43H7.5a.625.625 0 0 1 0 1.251H5.18a.18.18 0 0 0-.18.18v4.017c0 .098.08.178.178.178h1.175c.155-.683.47-1.34.943-1.962a.62.62 0 0 1 .827-.152.625.625 0 0 1 .167.91c-.837 1.099-1.02 2.33-.5 3.378a2.792 2.792 0 0 0 2.515 1.563 2.798 2.798 0 0 0 1.988-.825 2.793 2.793 0 0 0 .821-1.99 2.8 2.8 0 0 0-.099-.738.625.625 0 0 1 1.206-.329 4.077 4.077 0 0 1-.163 2.62 4.036 4.036 0 0 1-.881 1.318 4.033 4.033 0 0 1-2.871 1.194Z"></path></g><defs><clipPath id="bpa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-draw_tablet";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, DrawTablet);
}
