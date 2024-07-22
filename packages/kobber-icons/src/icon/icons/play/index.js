export class Play extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M3.2 19.163a1.878 1.878 0 0 1-1.876-1.875V2.712c0-.309.077-.615.223-.887A1.886 1.886 0 0 1 3.2.835c.306 0 .611.078.884.224l13.602 7.288a1.867 1.867 0 0 1 .981 1.466c.025.245 0 .493-.071.729a1.867 1.867 0 0 1-.91 1.11L4.085 18.94a1.89 1.89 0 0 1-.886.223Zm0-17.076a.62.62 0 0 0-.502.253.627.627 0 0 0-.124.372v14.575a.625.625 0 0 0 .92.55l13.603-7.287a.617.617 0 0 0 .303-.37.624.624 0 0 0-.302-.733L3.495 2.162a.613.613 0 0 0-.295-.075Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-play";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Play);
}
