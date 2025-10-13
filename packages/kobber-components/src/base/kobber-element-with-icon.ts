import { state } from "lit/decorators.js";
import KobberElement from "./kobber-element";

export default class KobberElementWithIcon extends KobberElement {
  @state()
  protected _hasIcon = false;

  @state()
  protected _iconOnly = false;

  @state()
  protected _label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    // used for special icon only styling
    const hasSlot =
      Array.from(this.shadowRoot?.host.children ?? []).filter(element => element.tagName === "SLOT")
        .length > 0;
    const textContent = this.shadowRoot?.host.textContent?.trim();
    const hasOtherContentThanIcon = textContent !== "" || hasSlot;

    this._hasIcon = this.shadowRoot?.host.querySelector("[slot=icon]") !== null;
    this._iconOnly = !hasOtherContentThanIcon && this._hasIcon;

    // aria-label moved from host to button
    this._label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");

    if (this._iconOnly && !this._label) {
      console.warn("aria-label is required for icon only buttons");
    }
  }
}
