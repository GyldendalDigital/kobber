import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import ShoelaceElement from "../../base/internal/shoelace-element";
import componentStyles from "../../base/styles/component.styles";
import { radioInputControlStyles } from "./RadioInputControl.styles";
import type { CSSResultGroup } from "lit";
import "../../internal-icons/form-radio";
import {
  InputVariant,
  radioInputControlPartNameChecked,
  radioInputControlName,
  controlClassNames,
  radioInputControlPartName,
  ControlProps,
} from "../Radio.core";

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://shoelace.style/components/radio
 *
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, a `<kobber-icon>` element.
 */

@customElement(radioInputControlName)
export class RadioInputControl extends ShoelaceElement implements ControlProps {
  static styles: CSSResultGroup = [componentStyles, radioInputControlStyles];

  @property({ type: Boolean, reflect: true }) checked = false;

  @property()
  variant?: InputVariant;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div
        part="${`${radioInputControlPartName} ${this.checked ? radioInputControlPartNameChecked : ""}`}"
        class=${[
          ...controlClassNames({
            variant: this.variant,
          }),
          this.className,
        ].join(" ")}
      >
        ${this.checked ? html` <icon-form_radio part="checked-icon" /> ` : ""}
      </div>
    `;
  }
}
