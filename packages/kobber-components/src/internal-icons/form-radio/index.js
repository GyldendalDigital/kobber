import { internalIconsStyles } from "../InternalIcons.styles";

export class FormRadio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.heightValueFallback = "var(--kobber-global-visual-icon-size-small)";
    this.widthValueFallback = "var(--kobber-global-visual-icon-size-small)";
  }
  renderComponent() {
    const ariaLabel =
      this.getAttribute("aria-label") ||
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
    const ariaHidden = ariaLabel === "";
    const role = ariaHidden ? "presentation" : "img";
    this.shadowRoot.innerHTML = `
      <style>
      ${internalIconsStyles}
      </style>
			<svg viewBox="0 0 10 11" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><circle cx="5" cy="5.5" r="5" fill="currentColor"></circle></svg>`;
  }
  connectedCallback() {
    this.renderComponent();
  }
}

export const customElementName = "icon-form_radio";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, FormRadio);
}
