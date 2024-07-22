export class PartyBalloon extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#dua)"><path fill="currentColor" d="M15.625 20a.625.625 0 0 1-.625-.625v-2.5a.625.625 0 0 0-1.25 0 1.877 1.877 0 0 1-1.875 1.875h-1.25a1.877 1.877 0 0 1-1.875-1.875v-.629h-.862a1.246 1.246 0 0 1-1.118-1.808l.26-.521A7.086 7.086 0 0 1 2.5 7.179C2.41 3.325 5.488.1 9.358 0c3.893.1 6.977 3.328 6.891 7.196a7.085 7.085 0 0 1-4.527 6.72l.26.521a1.25 1.25 0 0 1-1.119 1.809H10v.629c0 .345.28.625.625.625h1.25a.625.625 0 0 0 .625-.625c0-1.034.84-1.876 1.875-1.876 1.034 0 1.875.841 1.875 1.875v2.5a.625.625 0 0 1-.625.625ZM9.367 1.25c-3.172.087-5.691 2.742-5.618 5.924a5.88 5.88 0 0 0 4.327 5.774.623.623 0 0 1 .395.882l-.583 1.167h2.976l-.583-1.167a.624.624 0 0 1 .394-.882 5.866 5.866 0 0 0 4.323-5.75v-.024A5.8 5.8 0 0 0 9.367 1.25Z"></path></g><defs><clipPath id="dua"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-party_balloon";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, PartyBalloon);
}
