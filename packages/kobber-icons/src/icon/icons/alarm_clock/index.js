export class AlarmClock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#aea)"><path fill="currentColor" d="M15 20a.622.622 0 0 1-.56-.346l-.866-1.734a8.125 8.125 0 0 1-7.148 0l-.868 1.734a.62.62 0 0 1-.837.28.625.625 0 0 1-.28-.838l.907-1.814a8.105 8.105 0 0 1-3.473-6.657C1.875 6.145 5.52 2.5 10 2.5s8.125 3.645 8.125 8.125a8.102 8.102 0 0 1-3.473 6.656l.907 1.814A.625.625 0 0 1 15 20ZM10 3.75a6.883 6.883 0 0 0-6.875 6.875A6.883 6.883 0 0 0 10 17.5a6.883 6.883 0 0 0 6.875-6.875A6.883 6.883 0 0 0 10 3.75Z"></path><path fill="currentColor" d="M7.174 11.25a.625.625 0 1 1 0-1.25h2.201V6.25a.625.625 0 0 1 1.25 0v4.375a.625.625 0 0 1-.625.625H7.174ZM1.25 3.75a.625.625 0 0 1-.39-1.113l3.124-2.5a.628.628 0 0 1 .88.098.625.625 0 0 1-.098.879l-3.125 2.5a.628.628 0 0 1-.391.136Zm17.5 0a.628.628 0 0 1-.39-.137l-3.125-2.5a.626.626 0 0 1 .78-.976l3.126 2.5a.625.625 0 0 1-.391 1.113Z"></path></g><defs><clipPath id="aea"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-alarm_clock";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, AlarmClock);
}
