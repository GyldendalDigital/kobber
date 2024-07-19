export class Expand extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#bta)"><path fill="currentColor" d="M19.375 6.248a.625.625 0 0 1-.625-.625v-3.49L15.442 5.44a.622.622 0 0 1-.884-.001.619.619 0 0 1-.183-.442c0-.166.065-.324.183-.441l3.309-3.309h-3.492a.625.625 0 1 1 0-1.25h5a.625.625 0 0 1 .578.387l.008.022A.626.626 0 0 1 20 .622v5a.625.625 0 0 1-.625.625ZM.625 19.998a.629.629 0 0 1-.217-.039l-.018-.006a.629.629 0 0 1-.39-.58v-5a.625.625 0 1 1 1.25 0v3.491l3.308-3.308a.619.619 0 0 1 .884 0 .627.627 0 0 1 0 .884l-3.309 3.308h3.492a.625.625 0 1 1 0 1.25h-5Zm0-13.75A.625.625 0 0 1 0 5.623v-5C0 .55.014.475.04.406L.046.388A.628.628 0 0 1 .387.046L.409.037a.614.614 0 0 1 .217-.039h5a.625.625 0 0 1 0 1.25h-3.49l3.308 3.309a.619.619 0 0 1 .183.441.619.619 0 0 1-.386.578.623.623 0 0 1-.682-.136L1.25 2.132v3.491a.625.625 0 0 1-.625.625Zm13.75 13.75a.625.625 0 1 1 0-1.25h3.49l-3.307-3.308a.627.627 0 0 1 .441-1.067c.167 0 .324.065.442.183l3.308 3.308v-3.49a.626.626 0 0 1 1.251 0v5a.638.638 0 0 1-.038.214l-.005.014a.637.637 0 0 1-.344.35l-.021.008a.61.61 0 0 1-.216.04h-5.001v-.002ZM7.5 13.748c-.69 0-1.25-.56-1.25-1.25v-5c0-.689.56-1.25 1.25-1.25h5c.69 0 1.25.561 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5Zm0-1.25h5v-5h-5v5Z"></path></g><defs><clipPath id="bta"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-expand";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, Expand);
}
