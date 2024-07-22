export class RankingStar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#eea)"><path fill="currentColor" d="M1.563 20c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25h3.125c.689 0 1.25.56 1.25 1.25v5c0 .69-.561 1.25-1.25 1.25H1.563Zm0-1.25h3.125v-5H1.563v5ZM15.313 20c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h3.124c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-3.125Zm0-1.25h3.124v-2.5h-3.125v2.5ZM8.438 20c-.69 0-1.25-.56-1.25-1.25v-7.5c0-.69.56-1.25 1.25-1.25h3.124c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25H8.438Zm0-1.25h3.124v-7.5H8.438v7.5Zm-.548-10a1.12 1.12 0 0 1-1.115-1.043 1.123 1.123 0 0 1 .083-.504l.732-1.685-1.32-1.3a1.1 1.1 0 0 1-.334-.777 1.105 1.105 0 0 1 .312-.79c.211-.218.49-.338.786-.338l.044.001h1.373L9.318.61A1.117 1.117 0 0 1 10.9.166c.176.108.319.263.412.446l.868 1.705h1.39a1.103 1.103 0 0 1 1.029.671 1.114 1.114 0 0 1-.247 1.237l-1.318 1.293.73 1.677a1.112 1.112 0 0 1-1.097 1.552 1.12 1.12 0 0 1-.489-.148L10.312 7.55 8.44 8.603a1.1 1.1 0 0 1-.55.148Zm.882-3.822a.63.63 0 0 1 .135.694l-.738 1.7 1.838-1.034a.626.626 0 0 1 .612 0l1.837 1.034-.74-1.699a.628.628 0 0 1 .136-.695l1.386-1.36h-1.442a.621.621 0 0 1-.557-.342l-.925-1.818-.923 1.814a.623.623 0 0 1-.557.342H7.388l1.384 1.364Z"></path></g><defs><clipPath id="eea"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-ranking_star";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, RankingStar);
}
