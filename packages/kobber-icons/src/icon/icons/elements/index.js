export class Elements extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#bqa)"><path fill="currentColor" d="M1.46 8.75A1.46 1.46 0 0 1 0 7.292V1.458A1.46 1.46 0 0 1 1.459 0h5.834A1.46 1.46 0 0 1 8.75 1.458v5.834A1.46 1.46 0 0 1 7.293 8.75H1.459Zm0-7.5a.208.208 0 0 0-.209.208v5.834c0 .115.093.208.208.208h5.834a.208.208 0 0 0 .208-.208V1.458a.208.208 0 0 0-.208-.208H1.459Zm14.166 7.5a4.38 4.38 0 0 1-4.375-4.375A4.38 4.38 0 0 1 15.626 0 4.38 4.38 0 0 1 20 4.375a4.38 4.38 0 0 1-4.375 4.375Zm0-7.5A3.128 3.128 0 0 0 12.5 4.375 3.128 3.128 0 0 0 15.626 7.5a3.128 3.128 0 0 0 3.125-3.125 3.129 3.129 0 0 0-3.125-3.125ZM11.387 20a1.383 1.383 0 0 1-1.217-.747 1.472 1.472 0 0 1 .013-1.4l3.615-6.509a1.37 1.37 0 0 1 1.612-.656c.345.11.628.346.797.666l3.609 6.496c.242.44.246.967.012 1.41a1.372 1.372 0 0 1-1.205.74h-7.236ZM15 11.875a.116.116 0 0 0-.052.012.108.108 0 0 0-.047.048l-3.623 6.52a.228.228 0 0 0 0 .218.133.133 0 0 0 .117.076h7.22a.126.126 0 0 0 .106-.07.232.232 0 0 0 .002-.226L15.11 11.95c-.032-.06-.077-.075-.11-.075ZM4.376 19.998c-.383 0-.74-.168-.983-.462L.305 15.842a1.315 1.315 0 0 1 0-1.683l3.092-3.698a1.277 1.277 0 0 1 .979-.46c.382 0 .74.168.982.462l3.086 3.695a1.316 1.316 0 0 1 .001 1.683l-3.09 3.698a1.274 1.274 0 0 1-.98.46Zm0-8.747c-.008 0-.013.003-.014.005L1.264 14.96a.064.064 0 0 0 .001.082l3.09 3.696c.006.008.013.011.02.011l.02-.01 3.09-3.698a.064.064 0 0 0 0-.082l-3.09-3.699a.319.319 0 0 0-.02-.01Z"></path></g><defs><clipPath id="bqa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-elements";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Elements);
}
