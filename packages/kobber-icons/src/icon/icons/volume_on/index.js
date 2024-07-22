export class VolumeOn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><path fill="currentColor" d="M11.242 16.87a1.85 1.85 0 0 1-1.101-.358l-5.329-3.39H2.494A1.877 1.877 0 0 1 .62 11.247v-2.5a1.877 1.877 0 0 1 1.875-1.875h2.318L10.14 3.48a1.854 1.854 0 0 1 1.942-.161 1.864 1.864 0 0 1 1.036 1.677v10c0 .403-.133.802-.375 1.125a1.882 1.882 0 0 1-1.5.749Zm-.412-1.4.034.022a.622.622 0 0 0 .822-.054.628.628 0 0 0 .184-.442v-10a.623.623 0 0 0-1-.5.9.9 0 0 1-.036.026L5.62 7.84v4.314l5.211 3.315ZM2.494 8.121a.625.625 0 0 0-.625.625v2.5c0 .345.28.625.625.625H4.37v-3.75H2.494Zm15.386 5.626a.621.621 0 0 1-.616-.734.619.619 0 0 1 .09-.227 4.89 4.89 0 0 0 0-5.244.626.626 0 0 1 1.053-.674 6.147 6.147 0 0 1 0 6.59.623.623 0 0 1-.527.289Zm-2.417-1.091a.626.626 0 0 1-.486-1.02 2.296 2.296 0 0 0 0-2.882.625.625 0 0 1 .971-.788 3.553 3.553 0 0 1 0 4.459.625.625 0 0 1-.486.23Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-volume_on";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, VolumeOn);
}
