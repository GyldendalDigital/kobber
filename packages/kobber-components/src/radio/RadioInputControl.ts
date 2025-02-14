import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import ShoelaceElement from "../base/internal/shoelace-element";
import componentStyles from "../base/styles/component.styles";
import { controlStyles } from "./RadioInputControl.styles";
import type { CSSResultGroup } from "lit";
import "@gyldendal/kobber-icons/web-components";
import {
  ButtonVariant,
  checkedPartName,
  controlCheckedClassName,
  controlClassName,
  controlName,
  controlClassNames,
} from "./Radio.core";

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://shoelace.style/components/radio
 *
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, a `<kobber-icon>` element.
 */

@customElement(controlName)
export default class RadioInputControl extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, controlStyles];

  @property({ type: Boolean, reflect: true }) checked = false;

  @property()
  variant?: ButtonVariant;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div
        part="${`control ${this.checked ? checkedPartName : ""}`}"
        class=${[
          ...controlClassNames({
            variant: this.variant,
          }),
          controlClassName,
          this.checked ? controlCheckedClassName : "",
          this.className,
        ].join(" ")}
      >
        ${this.checked ? html` <icon-form_radio part="checked-icon" /> ` : ""}
      </div>
    `;
  }
}
