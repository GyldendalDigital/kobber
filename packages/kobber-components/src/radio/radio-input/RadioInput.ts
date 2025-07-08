import { html, unsafeStatic } from "lit/static-html.js";
import { property, state } from "lit/decorators.js";
import { watch } from "../../base/internal/watch";
import ShoelaceElement from "../../base/internal/shoelace-element";
import componentStyles from "../../base/styles/component.styles";
import { radioInputStyles } from "./RadioInput.styles";
import type { CSSResultGroup } from "lit";
import {
  inputClassNames,
  radioInputName,
  InputVariant,
  radioInputLabelClassName,
  InputProps,
  radioInputControlName,
} from "../Radio.core";
import "../radio-input-control/RadioInputControl";
import "../../button/Button";
import { buttonName } from "../../button/Button.core";
import { customElement } from "../../base/utilities/customElementDecorator";

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

  @property({ type: Boolean, reflect: true }) checked = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string = "";

  @property() variant: InputVariant = "success";

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** When set, the underlying input will be rendered as an `<a>` with this `href` instead of a `<kobber-radio-input>`. */
  @property({ type: String }) href = "";

  private isLink() {
    return this.href ? true : false;
  }

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
    if (this.isLink()) {
      window.location.href = this.href;
    }
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
    if (!this.isLink()) {
      this.setAttribute("role", "radio");
    }
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
    const isLink = this.isLink();
    const buttonElement = unsafeStatic(buttonName);
    const radioInputControlElement = unsafeStatic(radioInputControlName);

    if (isLink) {
      return html`<${buttonElement}
        class=${[
          ...inputClassNames({
            isLink: isLink,
          }),
          this.className,
        ].join(" ")}
        data-variant="${this.variant}"
        ?disabled="${this.disabled}"
        variant="supplemental alt"
        href="${this.href}"
        usedInOtherInteractive
        iconFirst
      >
        <${radioInputControlElement}
          ?checked="${this.checked}"
          variant="${this.variant}"
          slot="icon"
        ></${radioInputControlElement}>
        <slot part="label"></slot>
      </${buttonElement}>`;
    }
    return html`
      <div
        class=${[
          ...inputClassNames({
            isLink: isLink,
          }),
          this.className,
        ].join(" ")}
        data-variant="${this.variant}"
      >
        <${radioInputControlElement} ?checked="${this.checked}" variant="${this.variant}"></${radioInputControlElement}>
        <slot part="label" class="${radioInputLabelClassName}"></slot>
      </div>
    `;
  }
}
