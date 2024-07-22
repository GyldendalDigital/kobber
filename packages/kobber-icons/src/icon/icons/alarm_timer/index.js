export class AlarmTimer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#afa)"><path fill="currentColor" d="M.625 16.251a.626.626 0 0 1-.526-.963c.01-.015 1.15-1.929 1.15-6.537A6.863 6.863 0 0 1 7.5 1.904V.626a.625.625 0 0 1 1.25 0v1.875c0 .345-.28.625-.624.625A5.631 5.631 0 0 0 2.5 8.751c0 3.187-.506 5.178-.903 6.25h12.93a6.736 6.736 0 0 1-.553-1.662.622.622 0 0 1 .614-.744c.299 0 .557.212.614.505.15.774.472 1.521.931 2.162a.623.623 0 0 1-.507.99H.625Z"></path><path fill="currentColor" d="M14.375 11.251A5.631 5.631 0 0 1 8.75 5.626 5.631 5.631 0 0 1 14.375.001 5.631 5.631 0 0 1 20 5.626a5.631 5.631 0 0 1-5.625 5.625Zm0-10A4.38 4.38 0 0 0 10 5.626a4.38 4.38 0 0 0 4.375 4.375 4.38 4.38 0 0 0 4.375-4.375 4.38 4.38 0 0 0-4.375-4.375Z"></path><path fill="currentColor" d="M14.375 7.5a.625.625 0 0 1-.625-.624V3.75a.625.625 0 0 1 1.25 0v2.5h1.25a.625.625 0 0 1 0 1.25h-1.875ZM8.122 20a2.363 2.363 0 0 1-2.265-1.698.626.626 0 0 1 1.2-.353 1.108 1.108 0 0 0 1.066.801 1.112 1.112 0 0 0 1.072-.8.629.629 0 0 1 .775-.425.626.626 0 0 1 .425.776 2.355 2.355 0 0 1-1.603 1.602c-.22.065-.445.098-.67.098Z"></path></g><defs><clipPath id="afa"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-alarm_timer";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AlarmTimer);
}
