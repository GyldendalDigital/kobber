export class Rocket extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#epa)"><path fill="currentColor" d="M10.183 19.077c-.54 0-1.016-.345-1.186-.856l-.96-2.878-3.325-3.326-2.879-.96a1.238 1.238 0 0 1-.721-.626 1.24 1.24 0 0 1-.07-.953c.061-.185.166-.354.304-.491l.192-.193a5.577 5.577 0 0 1 3.966-1.651c.607 0 1.21.098 1.791.292l.68.227 4.806-4.806A6.894 6.894 0 0 1 16.883.884l1.798-.2a.62.62 0 0 1 .512.18c.135.134.2.32.179.51l-.2 1.799A6.9 6.9 0 0 1 17.2 7.275l-4.807 4.806.226.68a5.593 5.593 0 0 1-1.358 5.756l-.195.194a1.25 1.25 0 0 1-.883.366Zm0-1.25.194-.195a4.35 4.35 0 0 0 1.056-4.475l-.028-.084-2.107 2.102.885 2.652Zm-1.6-3.705 7.732-7.731a5.642 5.642 0 0 0 1.613-3.356l.114-1.022-1.022.114a5.646 5.646 0 0 0-3.357 1.613l-7.73 7.73 2.65 2.652ZM5.506 8.393a4.333 4.333 0 0 0-3.083 1.285l-.194.194 2.652.884L6.986 8.65 6.9 8.622a4.408 4.408 0 0 0-1.394-.229Z"></path><path fill="currentColor" d="M1.517 19.167a.618.618 0 0 1-.442-.184.625.625 0 0 1-.16-.61c.18-.643 1.122-3.887 1.928-4.691a2.497 2.497 0 0 1 1.604-.727h.04a.625.625 0 0 1 .041 1.248 1.24 1.24 0 0 0-.801.363c-.277.276-.784 1.49-1.278 3.042 1.551-.494 2.766-1 3.043-1.276a1.25 1.25 0 0 0 .366-.884.626.626 0 0 1 1.25-.001 2.51 2.51 0 0 1-.734 1.769c-.803.803-4.046 1.746-4.689 1.927a.578.578 0 0 1-.168.024Z"></path></g><defs><clipPath id="epa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-rocket";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Rocket);
}
