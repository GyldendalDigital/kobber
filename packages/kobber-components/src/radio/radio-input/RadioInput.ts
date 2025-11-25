import type { CSSResultGroup } from "lit";
import { property, state } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import ShoelaceElement from "../../base/internal/shoelace-element";
import { watch } from "../../base/internal/watch";
import componentStyles from "../../base/styles/component.styles";
import {
  type InputProps,
  inputClassNames,
  radioInputControlName,
  radioInputLabelClassName,
  radioInputName,
} from "../Radio.core";
import { radioInputStyles } from "./RadioInput.styles";
import "../radio-input-control/RadioInputControl";
import { ifDefined } from "lit/directives/if-defined.js";
import { customElement } from "../../base/utilities/customElementDecorator";
import "../../text/text-label/TextLabel";

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://shoelace.style/components/radio
 * @status stable
 * @since 2.0
 *
 * @slot - The radio's label.
 *
 * @csspart label - The container that wraps the radio's label.
 */

@customElement(radioInputName)
export class RadioInput extends ShoelaceElement implements InputProps {
  static styles: CSSResultGroup = [componentStyles, radioInputStyles];

  @state() protected hasFocus = false;

  @property({  type: Boolean, reflect: true }) 
  checked?: InputProps["checked"] = false;

  @property()
  color?: InputProps["color"] = "success";

  @property({ type: Boolean, reflect: true }) 
  disabled?: InputProps["disabled"] = false;
  
  /** The radio's value. When selected, the radio group will receive this value. */
  @property()
  value: InputProps["value"] = "";

  constructor() {
    super();
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }

  private handleFocus = () => {
    this.hasFocus = true;
  };

  private handleBlur = () => {
    this.hasFocus = false;
  };

  private handleClick = () => {
    if (!this.disabled) {
      this.checked = true;
    }
  };

  private setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }

  @watch("checked")
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }

  render() {
    const radioInputControlElement = unsafeStatic(radioInputControlName);

    return html`
      <div
        class=${[...inputClassNames()].join(" ")}
        data-color="${ifDefined(this.color)}"
      >
        <${radioInputControlElement} ?checked="${this.checked}" color="${this.color}"></${radioInputControlElement}>
        <kobber-text-label>
          <slot part="label" class="${radioInputLabelClassName}"></slot>
        </kobber-text-label>
      </div>
    `;
  }
}
