export class Read extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		const ariaLabel =
      this.getAttribute("aria-label") ||
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
		const ariaHidden = ariaLabel === "";
		this.shadowRoot.innerHTML = `
      <style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#ega)"><path fill="currentColor" d="M10.417 20a.62.62 0 0 1-.183-.027l-5.759-1.76c-.59-.219-.958-.765-.933-1.364v-.284a2.917 2.917 0 0 1-1.014-.463c-.559-.406-.865-.964-.861-1.571v-.747c0-.485.198-.94.575-1.313.33-.33.785-.574 1.3-.701v-.977A1.308 1.308 0 0 1 5.24 9.451l5.177 1.897 5.19-1.899a1.301 1.301 0 0 1 1.042.11 1.3 1.3 0 0 1 .653 1.233v1.212c.259.128.481.284.665.468.376.374.575.827.575 1.311v.75c.002.605-.304 1.163-.863 1.569-.115.083-.24.159-.377.227v.55a1.354 1.354 0 0 1-.899 1.327L10.6 19.972a.603.603 0 0 1-.183.029Zm.625-1.468 4.964-1.51c.016-.006.05-.055.047-.111v-.251a2.89 2.89 0 0 1-.208.007c-.514 0-.978-.176-1.29-.485a1.243 1.243 0 0 1-.382-.883l-.006-2.252a1.24 1.24 0 0 1 .376-.88c.313-.315.786-.497 1.299-.498.07 0 .14.003.211.007v-.911c0-.023.001-.045.004-.068-.006-.033-.014-.044-.028-.051a.055.055 0 0 0-.027-.008h-.004l-4.955 1.814v6.08h-.001Zm-6.25-1.656c-.004.08.028.132.083.153l4.917 1.503v-6.08l-4.944-1.813h-.004a.057.057 0 0 0-.056.062.566.566 0 0 1 .004.065v.947c.34.07.641.227.867.454.244.245.378.558.377.88L6.03 15.3c0 .325-.136.638-.383.883-.236.227-.534.38-.856.442v.252Zm10.642-1.583c.06.059.197.122.409.124.421-.001.814-.117 1.101-.325.225-.164.349-.36.348-.555v-.753c0-.182-.113-.332-.206-.426-.275-.274-.74-.437-1.243-.438-.177.004-.34.054-.415.13a.135.135 0 0 0-.012.013l.006 2.218a.233.233 0 0 1 .012.012ZM4.364 12.92c-.502 0-.967.163-1.24.437-.095.093-.207.244-.207.427v.75c-.001.197.121.394.346.558.286.208.678.323 1.103.325.168 0 .326-.049.402-.124a.154.154 0 0 0 .013-.014l.005-2.217a.134.134 0 0 0-.013-.014c-.078-.078-.238-.129-.407-.129v-.312l-.002.313Zm6.063-4.794a4.067 4.067 0 0 1-4.063-4.063A4.067 4.067 0 0 1 10.427.001a4.067 4.067 0 0 1 4.062 4.062 4.067 4.067 0 0 1-4.062 4.063Zm0-6.875a2.816 2.816 0 0 0-2.813 2.812 2.816 2.816 0 0 0 2.813 2.813 2.816 2.816 0 0 0 2.812-2.813 2.816 2.816 0 0 0-2.812-2.812Z"></path></g><defs><clipPath id="ega"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-read";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Read);
}
