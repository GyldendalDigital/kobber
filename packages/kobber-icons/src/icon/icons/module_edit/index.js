export class ModuleEdit extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heightValueFallback = "var(--kobber-semantic-image-icon-size-default-height)";
		this.widthValueFallback = "var(--kobber-semantic-image-icon-size-default-width)";
	}
	renderComponent() {
		this.shadowRoot.innerHTML = `<style>svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>
			<svg viewBox="0 0 20 20"><g clip-path="url(#dia)"><path fill="currentColor" d="M5.207 15a1.46 1.46 0 0 1-1.458-1.46v-2.082a1.46 1.46 0 0 1 1.458-1.459h2.084a1.46 1.46 0 0 1 1.458 1.458v2.084a1.46 1.46 0 0 1-1.458 1.458H5.207Zm0-3.75a.209.209 0 0 0-.208.207v2.084c0 .115.093.208.208.208h2.084a.208.208 0 0 0 .208-.208v-2.084a.208.208 0 0 0-.208-.208H5.207Zm2.5-2.5A1.46 1.46 0 0 1 6.25 7.29V5.209A1.46 1.46 0 0 1 7.708 3.75h3.334A1.46 1.46 0 0 1 12.5 5.209V7.29a1.46 1.46 0 0 1-1.458 1.458H7.707Zm0-3.75a.208.208 0 0 0-.208.208V7.29c0 .115.093.208.208.208h3.334a.208.208 0 0 0 .208-.208V5.208a.208.208 0 0 0-.208-.209H7.707Zm4.167 10A1.876 1.876 0 0 1 10 13.123v-1.25A1.877 1.877 0 0 1 11.874 10h1.25A1.877 1.877 0 0 1 15 11.874a.625.625 0 1 1-1.25 0 .625.625 0 0 0-.625-.625h-1.25a.625.625 0 0 0-.625.625v1.25c0 .345.28.625.625.625a.625.625 0 0 1 0 1.25Zm1.25 5a.621.621 0 0 1-.598-.445.622.622 0 0 1-.014-.303l.421-2.108a.618.618 0 0 1 .172-.32l3.793-3.792a1.799 1.799 0 0 1 1.285-.532c.485 0 .941.188 1.284.53a1.82 1.82 0 0 1 .001 2.57l-3.794 3.794a.62.62 0 0 1-.32.171l-2.106.422a.63.63 0 0 1-.124.012Zm.797-1.422 1.002-.201 3.66-3.66a.568.568 0 0 0-.802-.801l-3.66 3.659-.2 1.003Z"></path><path fill="currentColor" d="M1.874 19.999a1.877 1.877 0 0 1-1.875-1.875V1.874A1.877 1.877 0 0 1 1.874-.001h12.5c.49-.001.96.19 1.31.533l2.497 2.399c.362.354.569.843.569 1.346v6.347a.625.625 0 0 1-1.25 0V4.277a.626.626 0 0 0-.189-.448l-2.496-2.4a.625.625 0 0 0-.44-.18h-12.5a.625.625 0 0 0-.625.625v16.25c0 .345.28.625.625.625h8.75a.625.625 0 0 1 0 1.25h-8.75Z"></path></g><defs><clipPath id="dia"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-module_edit";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, ModuleEdit);
}
