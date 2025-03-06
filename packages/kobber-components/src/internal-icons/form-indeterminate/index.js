import { internalIconsStyles } from "../InternalIcons.styles";

export class InternalIconFormIndeterminate extends HTMLElement {
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
			<svg viewBox="0 0 20 20" aria-label="${ariaLabel}" aria-hidden="${ariaHidden}" role="${role}"><path d="M6 10H14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path></svg>`;
  }
  connectedCallback() {
    this.renderComponent();
  }
}

export const customElementName = "icon-form_indeterminate";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, InternalIconFormIndeterminate);
}
