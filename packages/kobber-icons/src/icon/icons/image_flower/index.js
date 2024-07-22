export class ImageFlower extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#cla)"><path fill="currentColor" d="M1.875 20A1.876 1.876 0 0 1 0 18.125V1.875A1.877 1.877 0 0 1 1.875 0h16.25A1.877 1.877 0 0 1 20 1.875v16.25A1.876 1.876 0 0 1 18.125 20H1.875Zm16.25-1.25a.624.624 0 0 0 .625-.625V1.875a.625.625 0 0 0-.625-.625H1.875a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h7.5v-5.17c-.634-.294-1.165-1.015-1.388-1.91a2.49 2.49 0 0 1-2.702-.6.628.628 0 0 1-.146-.25 2.49 2.49 0 0 1 .827-2.64 2.492 2.492 0 0 1-.827-2.637.636.636 0 0 1 .146-.253 2.49 2.49 0 0 1 2.692-.605c.312-1.206 1.14-2.05 2.024-2.05.884 0 1.712.844 2.012 2.054a2.487 2.487 0 0 1 2.704.601.625.625 0 0 1 .145.252 2.49 2.49 0 0 1-.826 2.638 2.494 2.494 0 0 1 .827 2.638.63.63 0 0 1-.147.254 2.49 2.49 0 0 1-2.702.599c-.221.893-.752 1.615-1.387 1.91v5.169h7.498Zm-10.14-8.333c.555 0 1.05.371 1.202.903l.012.043c.184.742.613 1.112.801 1.112.188 0 .617-.37.8-1.108l.002-.006a1.25 1.25 0 0 1 1.516-.907l.042.011a.734.734 0 0 1 .07.025 1.23 1.23 0 0 0 1.268-.177 1.227 1.227 0 0 0-.476-1.184.655.655 0 0 1-.059-.049 1.25 1.25 0 0 1-.035-1.767l.03-.03a.565.565 0 0 1 .064-.055c.37-.276.551-.732.476-1.183a1.222 1.222 0 0 0-1.264-.178 1.229 1.229 0 0 1-1.171-.177 1.258 1.258 0 0 1-.451-.65l-.012-.044c-.183-.741-.612-1.111-.8-1.111-.188 0-.617.37-.8 1.108a1.248 1.248 0 0 1-1.514.913l-.038-.01a.622.622 0 0 1-.081-.029 1.228 1.228 0 0 0-1.264.179 1.225 1.225 0 0 0 .476 1.183.68.68 0 0 1 .059.05c.497.479.512 1.272.034 1.768l-.029.03a.691.691 0 0 1-.064.055 1.223 1.223 0 0 0-.476 1.183 1.228 1.228 0 0 0 1.262.178.767.767 0 0 1 .073-.026c.115-.034.232-.05.348-.05Z"></path><path fill="currentColor" d="M10 10a1.877 1.877 0 0 1-1.875-1.875c0-1.034.84-1.875 1.875-1.875 1.034 0 1.875.84 1.875 1.875C11.875 9.159 11.035 10 10 10Zm0-2.5a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25ZM7.26 17.808a.643.643 0 0 1-.113-.01 4.305 4.305 0 0 1-1.627-.663c-1.584-.97-2.808-3.428-2.86-3.533a.625.625 0 0 1 .52-.9 8.365 8.365 0 0 1 4.683 1.081.623.623 0 0 1-.31 1.168.619.619 0 0 1-.309-.083 7.129 7.129 0 0 0-2.943-.91c.43.684 1.135 1.66 1.894 2.125.37.248.762.409 1.177.485a.625.625 0 0 1-.113 1.24Zm5.533 0a.625.625 0 0 1-.113-1.24 3.054 3.054 0 0 0 1.156-.471c.772-.475 1.482-1.453 1.914-2.139a7.108 7.108 0 0 0-2.943.911.627.627 0 0 1-.803-.925.627.627 0 0 1 .184-.16 8.37 8.37 0 0 1 4.684-1.08.626.626 0 0 1 .52.9c-.051.104-1.275 2.561-2.88 3.546a4.239 4.239 0 0 1-1.604.648.78.78 0 0 1-.115.01Z"></path></g><defs><clipPath id="cla"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-image_flower";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ImageFlower);
}
