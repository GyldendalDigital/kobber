import { classMap } from "lit/directives/class-map.js";
import { css, CSSResultGroup, html, svg } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { customElement, property, query, state } from "lit/decorators.js";
// import styles from "./checkbox.styles";
import { defaultValue } from "../base/internal/default-value";
import { watch } from "../base/internal/watch";
import ShoelaceElement from "../base/internal/shoelace-element";
import type { ShoelaceFormControl } from "../base/internal/shoelace-element";
import { FormControlController } from "../base/internal/form";
import formControlStyles from "../base/styles/form-control.styles";
import componentStyles from "../base/styles/component.styles";
import { HasSlotController } from "../base/internal/slot";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";
import { consume } from "@lit/context";
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

const checked = html`<icon-check />`;

const indeterminate = svg`<svg class="indeterminate-indicator" xmlns="http://www.w3.org/2000/svg" width="12" height="3" viewBox="0 0 12 3" fill="none">
<rect width="12" height="3" rx="1.5" fill="currentColor"/>
</svg>`;

@customElement("kobber-checkbox")
export class Checkbox extends ShoelaceElement implements ShoelaceFormControl {
  // static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];
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

  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @state() private hasFocus = false;

  @property() title = ""; // make reactive to pass through

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  @property() name = "";

  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  @property() value: string = "";

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

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("change");
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit("blur");
  }

  private handleInput() {
    this.emit("input");
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("focus");
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
    this.formControlController.updateValidity();
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

  // Static CSS that applies to all all instances of this component
  static styles = css`
    :host {
      display: flex;
      align-items: flex-start;
      gap: 4px;
    }
    .checkbox {
      positiov: relative;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
    }
  `;

  render() {
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    const themeStyles = this.themedStyles();
    //
    // NOTE: we use a <div> around the label slot because of this Chrome bug.
    //
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1413733
    //
    return html`
      <style>
        ${themeStyles}}
      </style>
      <div
        class=${classMap({
          "form-control": true,
          "form-control--has-help-text": hasHelpText,
        })}
      >
        <label
          part="base"
          class=${classMap({
            checkbox: true,
            "checkbox--checked": this.checked,
            "checkbox--disabled": this.disabled,
            "checkbox--focused": this.hasFocus,
            "checkbox--indeterminate": this.indeterminate,
          })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
            name=${this.name}
            value=${ifDefined(this.value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate
              ? " control--indeterminate"
              : ""}"
            class="checkbox__control"
          >
            ${this.checked ? checked : ""} ${!this.checked && this.indeterminate ? indeterminate : ""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("should never occur");
      return css``;
    }

    // TODO: Wait for tokens
    // const component = tokens.component.checkbox;

    return css``;
  };
}
