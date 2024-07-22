export class Home extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><path fill="currentColor" d="M2.307 8.959a.57.57 0 0 1-.314-.094.526.526 0 0 1-.2-.246.495.495 0 0 1-.017-.312.518.518 0 0 1 .174-.264l7.692-6.25a.566.566 0 0 1 .715 0l7.692 6.25c.055.044.1.098.133.16a.497.497 0 0 1-.073.574.545.545 0 0 1-.375.18.577.577 0 0 1-.4-.124l-7.335-5.96-7.334 5.96a.565.565 0 0 1-.358.126Z"></path><path fill="currentColor" d="M11.648 18.333a.565.565 0 0 1-.389-.152.507.507 0 0 1-.16-.369v-4.687H8.9v4.688a.51.51 0 0 1-.16.368.565.565 0 0 1-.39.152H4.123a1.308 1.308 0 0 1-.892-.352 1.175 1.175 0 0 1-.373-.846v-6.151c.015-.357.177-.693.452-.937l6.333-5.13a.566.566 0 0 1 .714 0l6.317 5.116c.283.249.446.573.468.92v6.181a1.175 1.175 0 0 1-.372.846 1.308 1.308 0 0 1-.892.353h-4.23Zm-7.609-7.508a.29.29 0 0 0-.084.19v6.118c0 .042.019.083.05.112.032.03.075.047.119.047h3.678v-4.348c0-.227.096-.446.266-.607a.945.945 0 0 1 .639-.254h2.582c.24.001.47.092.64.253.17.162.267.38.268.608v4.348h3.679a.173.173 0 0 0 .118-.048.155.155 0 0 0 .05-.112v-6.148a.29.29 0 0 0-.101-.173L9.999 5.998l-5.96 4.827Z"></path></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-home";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Home);
}
