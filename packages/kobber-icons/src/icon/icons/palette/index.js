export class Palette extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dpa)"><path fill="currentColor" d="M11.744 19.99c-3.05 0-6.318-1.357-8.324-3.457-3.684-3.755-3.674-9.862.025-13.611A10.024 10.024 0 0 1 10.845 0c2.48.09 4.703 1.133 6.258 2.933 1.78 2.062 2.513 3.747 2.241 5.151-.327 1.692-1.952 2.53-3.386 3.27-1.03.531-2.003 1.033-1.959 1.611.072.92.579 1.263 1.871 1.263.316 0 .653-.02.91-.039.265-.019.495-.035.703-.035.358 0 .758.043 1.009.369.1.129.247.405.112.806-.802 2.378-2.512 3.92-4.946 4.46a8.86 8.86 0 0 1-1.914.201ZM10.488 1.243a8.768 8.768 0 0 0-6.156 2.56c-3.22 3.263-3.227 8.584-.014 11.86 1.789 1.872 4.694 3.08 7.407 3.08.585 0 1.143-.059 1.66-.174 1.285-.285 2.958-1.067 3.85-3.156-.125.007-.254.016-.367.024-.305.021-.645.045-1.006.045-1.934 0-2.98-.811-3.109-2.41v-.011c-.108-1.406 1.285-2.124 2.633-2.819 1.239-.639 2.52-1.299 2.732-2.395.189-.977-.489-2.393-1.96-4.097-1.326-1.535-3.228-2.423-5.357-2.502a9.75 9.75 0 0 0-.313-.005Z"></path><path fill="currentColor" d="M6.016 12.976a1.893 1.893 0 0 1-1.892-1.892c0-1.043.848-1.891 1.892-1.891 1.043 0 1.891.848 1.891 1.891a1.894 1.894 0 0 1-1.891 1.892Zm0-2.534a.642.642 0 1 0 0 1.284.642.642 0 0 0 0-1.284Zm3.134 6.563a1.893 1.893 0 0 1-1.893-1.892c0-1.043.849-1.891 1.892-1.891s1.892.848 1.892 1.891c0 1.044-.85 1.892-1.892 1.892Zm0-2.533a.642.642 0 1 0 0 1.285.642.642 0 0 0 0-1.285Zm3.03-7.66a1.893 1.893 0 0 1-1.893-1.892c0-1.043.849-1.892 1.892-1.892s1.892.849 1.892 1.892-.85 1.892-1.892 1.892Zm0-2.534a.642.642 0 1 0 0 1.284.642.642 0 0 0 0-1.284ZM6.807 8.155a1.893 1.893 0 0 1-1.891-1.892c0-1.043.848-1.891 1.891-1.891 1.044 0 1.892.848 1.892 1.891 0 1.044-.85 1.892-1.892 1.892Zm0-2.533a.642.642 0 1 0 0 1.283.642.642 0 0 0 0-1.283Z"></path></g><defs><clipPath id="dpa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-palette";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Palette);
}
