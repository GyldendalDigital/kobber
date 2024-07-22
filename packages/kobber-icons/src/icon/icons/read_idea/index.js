export class ReadIdea extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}"><g clip-path="url(#eia)"><path fill="currentColor" d="M10 20a.594.594 0 0 1-.225-.043.58.58 0 0 1-.274-.208l-.034-.05a.454.454 0 0 1-.049-.1l-.013-.034c-.327-1.03-2.912-2.574-7.635-2.787A1.879 1.879 0 0 1 0 14.894V3.772a1.864 1.864 0 0 1 .546-1.325 1.864 1.864 0 0 1 1.324-.553l.03.001c.037 0 .073.002.108.004 3.005.155 5.531.848 7.11 1.949a.625.625 0 1 1-.715 1.025c-1.369-.956-3.728-1.585-6.471-1.726a.616.616 0 0 0-.5.181.622.622 0 0 0-.182.443v11.127a.626.626 0 0 0 .586.633c3.233.146 5.977.922 7.539 2.11v-8.89a.625.625 0 0 1 1.25 0v8.89c1.563-1.188 4.308-1.965 7.55-2.111a.622.622 0 0 0 .575-.627V7.5a.625.625 0 0 1 1.25 0v7.398a1.874 1.874 0 0 1-1.76 1.88c-4.732.214-7.317 1.759-7.645 2.787a.45.45 0 0 1-.03.076l-.027.049a.67.67 0 0 1-.033.052l-.036.044a.707.707 0 0 1-.121.107l-.02.013a.521.521 0 0 1-.104.052l-.038.015A.608.608 0 0 1 10 20Z"></path><path fill="currentColor" d="M7.785 7.936a.617.617 0 0 1-.213-.038 19.786 19.786 0 0 0-4.501-1.05.625.625 0 0 1 .138-1.241 21.03 21.03 0 0 1 4.788 1.116.62.62 0 0 1 .411.628.625.625 0 0 1-.623.585Zm0 3.179a.624.624 0 0 1-.21-.037 20.279 20.279 0 0 0-4.506-1.05.626.626 0 0 1 .144-1.242c1.63.187 3.24.562 4.784 1.116a.625.625 0 0 1-.212 1.213Zm0 3.37a.624.624 0 0 1-.21-.037 20.467 20.467 0 0 0-4.547-1.05.622.622 0 0 1-.478-.924.625.625 0 0 1 .618-.318 21.66 21.66 0 0 1 4.825 1.116.62.62 0 0 1 .151 1.1.623.623 0 0 1-.359.113Zm6.59-11.984a.625.625 0 0 1-.625-.625V.626a.625.625 0 1 1 1.25 0v1.25a.625.625 0 0 1-.625.625ZM11.25 4.193a.619.619 0 0 1-.442-.183l-.884-.884a.619.619 0 0 1-.183-.442.619.619 0 0 1 .386-.578.619.619 0 0 1 .68.136l.885.885a.619.619 0 0 1 .183.441.624.624 0 0 1-.625.625Zm6.25 0a.619.619 0 0 1-.442-.183.619.619 0 0 1-.183-.442c0-.166.065-.324.183-.441l.884-.884a.62.62 0 0 1 .884 0 .619.619 0 0 1 .183.441.619.619 0 0 1-.183.442l-.884.884a.619.619 0 0 1-.442.183ZM14.375 12.5a.625.625 0 0 1-.625-.624v-.625h-.625a.625.625 0 0 1-.625-.625V9.364a3.12 3.12 0 0 1-.328-4.712 3.132 3.132 0 0 1 2.203-.913 3.132 3.132 0 0 1 2.794 4.53 3.103 3.103 0 0 1-.919 1.095v1.261a.625.625 0 0 1-.625.625H15v.625a.622.622 0 0 1-.625.626ZM15 10v-.97c0-.224.12-.432.314-.543a1.868 1.868 0 0 0 .936-1.613 1.877 1.877 0 0 0-1.866-1.886l-.02-.312v.312a1.874 1.874 0 0 0-.927 3.5.626.626 0 0 1 .313.54V10H15Z"></path></g><defs><clipPath id="eia"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-read_idea";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ReadIdea);
}
