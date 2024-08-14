export class FilledCheckCircle extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><g clip-path="url(#bxclip0_136_23)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.99936C0 15.5135 4.48583 19.9994 10 19.9994C15.5142 19.9994 20 15.5135 20 9.99936C20 4.48519 15.5142 -0.000640869 10 -0.000640869C4.48583 -0.000640869 0 4.48519 0 9.99936ZM7.06257 14.7544C7.28045 14.8706 7.52377 14.9309 7.7707 14.9299C8.0668 14.93 8.35616 14.8415 8.60153 14.6757C8.73626 14.5857 8.85533 14.4742 8.95403 14.3457L15.4899 6.07657C15.5452 6.01278 15.587 5.93844 15.6127 5.85805C15.6385 5.77766 15.6477 5.69288 15.6398 5.60883C15.632 5.52477 15.6071 5.44319 15.5668 5.369C15.5266 5.2948 15.4717 5.22954 15.4055 5.17715C15.3393 5.12475 15.2631 5.08631 15.1817 5.06415C15.1002 5.04198 15.0151 5.03655 14.9315 5.04818C14.8479 5.0598 14.7675 5.08825 14.6952 5.1318C14.6228 5.17535 14.5601 5.23311 14.5107 5.30157L7.96736 13.5807C7.9446 13.6115 7.91495 13.6364 7.8808 13.6537C7.84665 13.6709 7.80894 13.6799 7.7707 13.6799C7.7269 13.6798 7.68389 13.6683 7.64579 13.6467C7.6077 13.6251 7.57581 13.5941 7.5532 13.5566L5.51153 10.6591C5.46425 10.5919 5.40422 10.5348 5.33485 10.4908C5.26548 10.4469 5.18813 10.4171 5.10723 10.403C5.02633 10.389 4.94345 10.391 4.86333 10.409C4.78321 10.427 4.70742 10.4605 4.64028 10.5078C4.57314 10.5551 4.51597 10.6151 4.47204 10.6845C4.4281 10.7539 4.39826 10.8312 4.38421 10.9121C4.37017 10.993 4.3722 11.0759 4.39018 11.156C4.40817 11.2361 4.44176 11.3119 4.48903 11.3791L6.52236 14.2641C6.65907 14.4697 6.84469 14.6382 7.06257 14.7544Z" fill="currentColor"></path></g><defs><clipPath id="bxclip0_136_23"><rect width="20" height="20" fill="currentColor"></rect></clipPath></defs></svg>`;
	}
	connectedCallback() {
		this.renderComponent();
	}
}

export const customElementName = "icon-filled_check_circle";

if (!customElements.get(customElementName)) {
	customElements.define(customElementName, FilledCheckCircle);
}
