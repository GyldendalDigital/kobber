import { CSSResultGroup } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { property, query } from "lit/decorators.js";
import { checkboxStyles } from "./checkboxInput.styles";
import { defaultValue } from "../../base/internal/default-value";
import { watch } from "../../base/internal/watch";
import ShoelaceElement from "../../base/internal/shoelace-element";
import type { ShoelaceFormControl } from "../../base/internal/shoelace-element";
import { FormControlController } from "../../base/internal/form";
import componentStyles from "../../base/styles/component.styles";
import { HasSlotController } from "../../base/internal/slot";
import {
  checkboxControlClassName,
  nativeCheckboxInputClassName,
  checkboxLabelClassName,
  checkboxInputName,
  checkboxWrapperClassName,
  InputProps,
} from "../Checkbox.core";
import { customElement } from "../../base/utilities/customElementDecorator";

import { HTMLElement } from "@lit-labs/ssr-dom-shim";
import { iconFormCheckedName, iconFormIndeterminateName } from "../../base/internal/icons";

globalThis.HTMLElement ??= HTMLElement;

/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://shoelace.style/components/checkbox
 * @status stable
 * @since 2.0
 *
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
 *
 * @event blur - Emitted when the checkbox loses focus.
 * @event change - Emitted when the checked state changes.
 * @event focus - Emitted when the checkbox gains focus.
 * @event input - Emitted when the checkbox receives input.
 * @event invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.

 * @csspart label - The container that wraps the checkbox's label.
 * @csspart form-control-help-text - The help text's wrapper.
 */

@customElement(checkboxInputName)
export class CheckboxInput extends ShoelaceElement implements ShoelaceFormControl {
  value: unknown;
  defaultValue?: unknown;
  pattern?: string | undefined;
  min?: string | number | Date | undefined;
  max?: string | number | Date | undefined;
  step?: number | "any" | undefined;
  minlength?: number | undefined;
  maxlength?: number | undefined;
  static styles: CSSResultGroup = [componentStyles, checkboxStyles];
  // static dependencies = { "sl-icon": SlIcon };

  private readonly formControlController = new FormControlController(this, {
    value: (control: ShoelaceFormControl) => (control.checked ? control.value || "on" : undefined),
    defaultValue: (control: ShoelaceFormControl) => control.defaultChecked,
    setValue: (control: ShoelaceFormControl, value: unknown) => {
      if (typeof value === "boolean") {
        control.checked = value;
      }
    },
  });

  private readonly hasSlotController = new HasSlotController(this, "help-text");

  @query('input[type="checkbox"]') input!: HTMLInputElement;

  @property({ attribute: "id-value", reflect: true }) idValue = "";

  @property() title = ""; // make reactive to pass through

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  @property() name = "";

  @property({ attribute: "color-theme" })
  colorTheme: InputProps["colorTheme"] = "success";

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue("checked") defaultChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = "";

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: "help-text" }) helpText = "";

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleFocus() {
    this.emit("focus");
  }

  private handleBlur() {
    this.emit("blur");
  }

  private handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("change");
  }

  private handleInput() {
    this.emit("input");
  }

  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }

  /** Sets focus on the checkbox. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  @watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
    this.formControlController.updateValidity();
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  render() {
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasAlertElementSlot = this.hasSlotController.test("alert");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasAlertElement = !!hasAlertElementSlot;
    const icon = this.checked
      ? html`<${unsafeStatic(iconFormCheckedName)} class="kobber-checkbox__control--shape"></${unsafeStatic(iconFormCheckedName)}>`
      : this.indeterminate
        ? html`<${unsafeStatic(iconFormIndeterminateName)} class="kobber-checkbox__control--shape"></${unsafeStatic(iconFormIndeterminateName)}>`
        : "";

    return html`
      <div class="${checkboxWrapperClassName}">
        <label part="base" class=${checkboxInputName} data-color-theme="${this.colorTheme}">
          <input
            class=${[nativeCheckboxInputClassName, "visually-hidden"].join(" ")}
            type="checkbox"
            title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
            name=${this.name}
            value=${ifDefined(this.idValue)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-describedby="aria-help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span class=${checkboxControlClassName}> ${icon} </span>

          <div part="label" class=${checkboxLabelClassName}>
            <slot></slot>
          </div>
        </label>

        <div aria-hidden=${hasHelpText ? "false" : "true"} id="aria-help-text">
          <slot name="help-text">${this.helpText}</slot>
        </div>

        <div aria-hidden=${hasAlertElement ? "false" : "true"}>
          <slot name="alert"></slot>
        </div>
      </div>
    `;
  }
}
