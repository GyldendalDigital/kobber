export class TaskListClock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	renderComponent() {
		this.shadowRoot.innerHTML =
			'<svg><g clip-path="url(#fga)"><path fill="currentColor" d="M14.375 20.01a5.631 5.631 0 0 1-5.625-5.626 5.631 5.631 0 0 1 5.625-5.625A5.631 5.631 0 0 1 20 14.384a5.631 5.631 0 0 1-5.625 5.625Zm0-10A4.38 4.38 0 0 0 10 14.383a4.38 4.38 0 0 0 4.375 4.375 4.38 4.38 0 0 0 4.375-4.375 4.38 4.38 0 0 0-4.375-4.375Z"></path><path fill="currentColor" d="M14.375 15.01a.625.625 0 0 1-.625-.626v-2.21a.624.624 0 1 1 1.25 0v1.585h1.585a.624.624 0 1 1 0 1.25h-2.21Zm-10-5.626a.625.625 0 0 1 0-1.25H8.75a.625.625 0 1 1 0 1.25H4.375Zm0 3.126a.625.625 0 0 1 0-1.25h2.5a.625.625 0 1 1 0 1.25h-2.5Zm0 3.124a.625.625 0 0 1 0-1.25h2.5a.625.625 0 1 1 0 1.25h-2.5Z"></path><path fill="currentColor" d="M1.875 20.01A1.877 1.877 0 0 1 0 18.133V5.01a1.877 1.877 0 0 1 1.875-1.875h2.553C4.729 1.36 6.3.01 8.125.01s3.397 1.351 3.697 3.125h2.553A1.877 1.877 0 0 1 16.25 5.01v1.875a.625.625 0 1 1-1.25 0V5.01a.625.625 0 0 0-.625-.625H11.25a.625.625 0 0 1-.625-.625c0-1.378-1.122-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5.625.625 0 0 1-.625.625H1.875a.625.625 0 0 0-.625.625v13.125c0 .345.28.625.625.625h6.25a.625.625 0 1 1 0 1.25h-6.25Z"></path><path fill="currentColor" d="M8.125 4.384a.938.938 0 1 0 0-1.875.938.938 0 0 0 0 1.875Z"></path></g><defs><clipPath id="fga"><path fill="currentColor" d="M0 0h20v20H0z"></path></clipPath></defs></svg>';
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "kobber-task_list_clock";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, TaskListClock);
}
