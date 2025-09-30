import { html } from "lit";
import { property } from "lit/decorators.js";
import ShoelaceElement from "../../base/internal/shoelace-element";
import componentStyles from "../../base/styles/component.styles";
import { radioInputControlStyles } from "./RadioInputControl.styles";
import type { CSSResultGroup } from "lit";
import "../../base/internal/icons";
import {
  InputColorTheme,
  radioInputControlPartNameChecked,
  radioInputControlName,
  radioInputControlPartName,
  type ControlProps,
} from "../Radio.core";
import { customElement } from "../../base/utilities/customElementDecorator";

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

  @property({ attribute: "color-theme" })
  colorTheme: ControlProps["colorTheme"] = "success";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div
        class="${radioInputControlName}"
        data-color-theme="${this.colorTheme}"
        part="${`${radioInputControlPartName} ${this.checked ? radioInputControlPartNameChecked : ""}`}"
      >
        ${this.checked ? html` <icon-form_radio part="checked-icon" /> ` : ""}
      </div>
    `;
  }
}
