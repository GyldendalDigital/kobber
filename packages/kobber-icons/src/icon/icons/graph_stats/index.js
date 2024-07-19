export class GraphStats extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><path fill="currentColor" d="M.625 15.625a.618.618 0 0 1-.442-.183A.619.619 0 0 1 0 15c0-.167.065-.324.183-.442l5.991-5.99a1.862 1.862 0 0 1 1.327-.549c.501 0 .972.195 1.326.549l2.606 2.606a.622.622 0 0 0 .885 0l5.55-5.549H13.75a.625.625 0 1 1 0-1.25h5.625a.625.625 0 0 1 .578.388l.009.021A.626.626 0 0 1 20 5v5.625a.624.624 0 1 1-1.25 0V6.509l-5.55 5.55a1.862 1.862 0 0 1-1.326.548 1.86 1.86 0 0 1-1.325-.549L7.942 9.451a.62.62 0 0 0-.442-.183.622.622 0 0 0-.442.183l-5.991 5.99a.62.62 0 0 1-.442.184Z"></path></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-graph_stats";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, GraphStats);
}
