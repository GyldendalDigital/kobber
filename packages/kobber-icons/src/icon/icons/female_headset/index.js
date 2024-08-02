export class FemaleHeadset extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bwa)"><path fill="currentColor" d="M16.853 13.75a.624.624 0 0 1-.271-.062 5.052 5.052 0 0 1-2.653-3.127 5.004 5.004 0 0 1-3.95 1.94 5.003 5.003 0 0 1-3.951-1.94 5.05 5.05 0 0 1-2.652 3.127.628.628 0 0 1-.835-.29.626.626 0 0 1 .29-.835A3.804 3.804 0 0 0 4.883 10H3.728c-.689 0-1.25-.56-1.25-1.25v-2.5c0-.689.561-1.25 1.25-1.25h.132C4.398 2.326 6.547.347 9.283.04c.232-.026.468-.039.7-.039 2.947 0 5.53 2.13 6.118 5h.127c.69 0 1.25.56 1.25 1.25v2.5c0 .688-.56 1.25-1.25 1.25h-1.154a3.805 3.805 0 0 0 2.052 2.562c.31.15.44.525.29.835a.63.63 0 0 1-.563.352ZM6.324 8.333c.383 1.67 1.903 2.918 3.654 2.918 1.752 0 3.27-1.247 3.655-2.917-.273.07-.554.105-.835.104h-.024A3.75 3.75 0 0 1 9.98 6.966a3.73 3.73 0 0 1-2.778 1.472h-.027c-.29 0-.574-.035-.85-.105Zm9.904.417v-2.5h-1.25v2.5h1.25Zm-12.5 0h1.25v-2.5h-1.25v2.5ZM9.978 5c.276 0 .515.177.597.44a2.506 2.506 0 0 0 2.25 1.748c.29 0 .588-.066.866-.194A3.768 3.768 0 0 0 9.978 3.75a3.768 3.768 0 0 0-3.712 3.244c.277.127.579.194.88.194a2.493 2.493 0 0 0 2.236-1.749A.622.622 0 0 1 9.978 5Zm0-2.5a4.979 4.979 0 0 1 4.329 2.502L14.353 5h.465a4.989 4.989 0 0 0-5.397-3.717A4.956 4.956 0 0 0 5.14 5h.463a.37.37 0 0 1 .047.003A4.98 4.98 0 0 1 9.978 2.5Z"></path><path fill="currentColor" d="M18.154 20a.629.629 0 0 1-.584-.4 8.064 8.064 0 0 0-3.852-4.313A3.755 3.755 0 0 1 9.98 18.75a3.755 3.755 0 0 1-3.739-3.467 8.186 8.186 0 0 0-3.85 4.314.63.63 0 0 1-.81.361.627.627 0 0 1-.36-.806 9.383 9.383 0 0 1 5.415-5.415 9.353 9.353 0 0 1 6.617-.02.57.57 0 0 1 .125.046 9.394 9.394 0 0 1 5.36 5.389.627.627 0 0 1-.583.848ZM7.478 15c0 1.378 1.122 2.5 2.5 2.5 1.379 0 2.5-1.122 2.5-2.5v-.23a8.097 8.097 0 0 0-5-.002V15Z"></path></g><defs><clipPath id="bwa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-female_headset";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FemaleHeadset);
}
