export class MessageWarning extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#dha)"><path fill="currentColor" d="M.626 20.002a.626.626 0 0 1-.565-.894l2.425-5.094a9.32 9.32 0 0 1-1-6.717C2.45 3.074 6.296.01 10.626.01c.7 0 1.402.08 2.088.237a9.315 9.315 0 0 1 5.848 4.156 9.31 9.31 0 0 1 1.203 7.072.621.621 0 0 1-.972.37.618.618 0 0 1-.254-.405.618.618 0 0 1 .008-.244 8.07 8.07 0 0 0-1.04-6.131 8.069 8.069 0 0 0-5.07-3.6 8.126 8.126 0 0 0-1.813-.206c-3.752 0-7.082 2.656-7.919 6.316a8.058 8.058 0 0 0 1.02 6.075.625.625 0 0 1 .034.6l-1.812 3.806 3.805-1.812a.62.62 0 0 1 .596.033c.211.13.425.25.639.357a.622.622 0 0 1-.086 1.151.628.628 0 0 1-.476-.033 9.404 9.404 0 0 1-.437-.235L.894 19.942a.646.646 0 0 1-.268.06Zm13.75-1.875a.939.939 0 0 1-.861-1.306.938.938 0 0 1 .903-.567l.011.001a.93.93 0 0 1 .884.933c0 .519-.42.939-.937.939Z"></path><path fill="currentColor" d="M14.376 15.627a.625.625 0 0 1-.625-.625v-2.5a.625.625 0 1 1 1.25 0v2.5a.625.625 0 0 1-.625.625Z"></path><path fill="currentColor" d="M10.854 20.002a2.106 2.106 0 0 1-1.882-3.045l3.522-7.043a2.095 2.095 0 0 1 1.885-1.163 2.11 2.11 0 0 1 1.878 1.163l3.521 7.042A2.104 2.104 0 0 1 17.9 20h-7.045Zm3.524-10a.85.85 0 0 0-.765.472l-3.522 7.043a.854.854 0 0 0 .762 1.236h7.044a.844.844 0 0 0 .81-.585.845.845 0 0 0-.048-.65l-3.52-7.044a.86.86 0 0 0-.76-.472Z"></path></g><defs><clipPath id="dha"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-message_warning";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, MessageWarning);
}
