export class StudyMath extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#exa)"><path fill="currentColor" d="M6.25 8.75a.625.625 0 0 1-.625-.624V6.25H3.75a.625.625 0 1 1 0-1.25h1.875V3.126a.625.625 0 0 1 1.25 0V5H8.75a.625.625 0 0 1 0 1.25H6.875v1.875a.625.625 0 0 1-.625.625Zm9.375 4.376a.62.62 0 0 1-.442-.183l-1.433-1.434-1.433 1.434a.622.622 0 0 1-1.066-.443c0-.165.065-.324.182-.442l1.434-1.433-1.434-1.433a.619.619 0 0 1-.183-.442.619.619 0 0 1 .386-.577.625.625 0 0 1 .68.135l1.434 1.434 1.433-1.434a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.442.619.619 0 0 1-.183.442l-1.434 1.433 1.434 1.433a.628.628 0 0 1-.442 1.068ZM4.375 15a.625.625 0 0 1 0-1.25H8.75a.625.625 0 1 1 0 1.25H4.375Zm2.187-1.875a.933.933 0 0 1-.93-.842v-.005a.584.584 0 0 1-.008-.086v-.004c0-.476.355-.872.83-.928a.94.94 0 0 1 1.036.82.68.68 0 0 1 .002.218.933.933 0 0 1-.929.827h-.001Zm.001 4.375a.939.939 0 0 1-.938-.933v-.004c0-.472.352-.868.822-.927a.625.625 0 0 1 .115-.011.942.942 0 0 1 .937.912l.001.026v.015a.93.93 0 0 1-.272.647.931.931 0 0 1-.662.276h-.003Z"></path><path fill="currentColor" d="M2.5 20.001a1.877 1.877 0 0 1-1.875-1.875V1.876A1.877 1.877 0 0 1 2.5.001h12.53c.493 0 .96.19 1.31.534l2.468 2.401c.36.35.567.84.567 1.343v13.848a1.876 1.876 0 0 1-1.875 1.875h-15V20Zm0-18.75a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h15a.625.625 0 0 0 .625-.625V4.278a.627.627 0 0 0-.19-.447l-2.467-2.4a.621.621 0 0 0-.437-.18H2.5Z"></path></g><defs><clipPath id="exa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-study_math";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, StudyMath);
}
