import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { watch } from "../base/internal/watch";
import ShoelaceElement from "../base/internal/shoelace-element";
import componentStyles from "../base/styles/component.styles";
import { buttonStyles } from "./RadioInput.styles";
import type { CSSResultGroup } from "lit";
import "@gyldendal/kobber-icons/web-components";
import { inputClassNames, inputName, ButtonVariant, labelClassName } from "./Radio.core";
import "./RadioInputControl";
import { buttonName } from "../button/Button.core";
import "../button/Button";

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://shoelace.style/components/radio
 * @status stable
 * @since 2.0
 *
 * @slot - The radio's label.
 *
 * @event sl-blur - Emitted when the control loses focus.
 * @event sl-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, a `<kobber-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */

@customElement(inputName)
export default class RadioInput extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, buttonStyles];

  @state() protected hasFocus = false;

  @property({ type: Boolean, reflect: true }) checked = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @property() value: string;

  @property()
  variant?: ButtonVariant;

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** When set, the underlying input will be rendered as an `<a>` with this `href` instead of a `<kobber-radio-input>`. */
  @property({ type: Location })
  href = "";

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

  private handleBlur = () => {
    this.hasFocus = false;
    this.emit("sl-blur");
  };

  private handleClick = () => {
    if (!this.disabled) {
      this.checked = true;
    }
  };

  private handleFocus = () => {
    if (this.isLink()) {
      window.location.href = this.href;
    }
    this.hasFocus = true;
    this.emit("sl-focus");
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
    const isLink = this.isLink();

    if (isLink) {
      return html`<kobber-button
        class=${[
          ...inputClassNames({
            variant: this.variant,
            isLink: isLink,
          }),
          this.className,
        ].join(" ")}
        ?disabled="${this.disabled}"
        variant="supplemental alt"
        href="${this.href}"
        usedInOtherInteractive
        iconFirst
      >
        <kobber-radio-input-control
          ?checked="${this.checked}"
          variant="${this.variant}"
          class="${this.className}"
          slot="icon"
        ></kobber-radio-input-control>
        <slot part="label"></slot>
      </kobber-button>`;
    }
    return html`
      <div
        class=${[
          ...inputClassNames({
            variant: this.variant,
            isLink: isLink,
          }),
          this.className,
        ].join(" ")}
        part="base"
      >
        <kobber-radio-input-control
          ?checked="${this.checked}"
          variant="${this.variant}"
          class="${this.className}"
        ></kobber-radio-input-control>
        <slot part="label" class="${labelClassName}"></slot>
      </div>
    `;
  }
}
