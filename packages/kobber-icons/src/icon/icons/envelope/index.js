export class Envelope extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M1.875 16.875A1.876 1.876 0 0 1 0 15V5a1.875 1.875 0 0 1 1.124-1.716 1.88 1.88 0 0 1 .751-.159h16.25A1.878 1.878 0 0 1 20 5v10a1.876 1.876 0 0 1-1.875 1.875H1.875ZM1.25 15c0 .345.28.625.625.625h16.25A.624.624 0 0 0 18.75 15V5.156l-4.68 3.227 2.604 2.408a.627.627 0 0 1-.424 1.084.626.626 0 0 1-.424-.166l-2.811-2.598-1.52 1.049c-.44.303-.961.465-1.495.463a2.616 2.616 0 0 1-1.494-.463L6.985 9.112l-2.81 2.598a.628.628 0 0 1-.884-.035.626.626 0 0 1 .034-.883l2.604-2.408L1.25 5.156V15Zm7.966-5.87c.23.16.5.243.784.243.283 0 .554-.084.784-.242l6.897-4.756H2.319l6.897 4.756Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-envelope";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Envelope);
}
