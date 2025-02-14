import { html } from "lit";
import type { CSSResultGroup } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import ShoelaceElement from "../../base/internal/shoelace-element";
import { HasSlotController } from "../../base/internal/slot";
import { watch } from "../../base/internal/watch";
import type { ShoelaceFormControl } from "../../base/internal/shoelace-element";
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState,
} from "../../base/internal/form";
import componentStyles from "../../base/styles/component.styles";
import type RadioInput from "../radioInput/RadioInput";
import { radioGroupName, radioInputName, radioGroupHorizontalClassName, GroupProps } from "../Radio.core";
import { buttonGroupStyles } from "./RadioGroup.styles";

/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://shoelace.style/components/radio-group
 * @status stable
 * @since 2.0
 *
 * @slot - The default slot where `<kobber-radio-button>` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 * @slot help-text - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the radio group's selected value changes.
 * @event input - Emitted when the radio group receives user input.
 * @event invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 */

type Props = GroupProps & ShoelaceFormControl;

@customElement(radioGroupName)
export default class RadioGroup extends ShoelaceElement implements Props {
  disabled?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  input!: HTMLInputElement;

  static styles: CSSResultGroup = [componentStyles, buttonGroupStyles];

  protected readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, "help-text", "label");
  private customValidityMessage = "";
  private validationTimeout: number = 0;

  @query(".radio-group__validation-input") validationInput!: HTMLInputElement;

  @state() private errorMessage = "";

  @query("slot:not([name])") defaultSlot!: HTMLSlotElement;

  @state() private url = window.location.href;

  @property({ attribute: "current-value" }) currentValue = "";

  /**
   * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = "";

  /** The name of the radio group, submitted as a name/value pair with form data. */
  @property() name = "option";

  @property() direction: "vertical" | "horizontal" = "vertical";

  /** The current value of the radio group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) value = "";

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = "";

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";

    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }

    return validValidityState;
  }

  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";

    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }

    return "";
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.value = this.currentValue;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.addEventListener("navigate", (e: any) => {
      // Experimental functionality, does not work in Firefox. Might change in the future.
      /* eslint-enable @typescript-eslint/no-explicit-any */
      this.handleUrlChange();
    });
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private getAllRadios() {
    return [...this.querySelectorAll<RadioInput>(radioInputName)];
  }

  private handleRadioClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest<RadioInput>(radioInputName)!;
    const radios = this.getAllRadios();
    const oldValue = this.value;

    if (!target || target.disabled) {
      return;
    }

    this.value = target.value;
    radios.forEach(radio => (radio.checked = radio === target));

    if (this.value !== oldValue) {
      this.emit("change");
      this.emit("input");
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }

    const radios = this.getAllRadios().filter(radio => !radio.disabled);
    const checkedRadio = radios.find(radio => radio.checked) ?? radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio!) + incr;

    if (index < 0) {
      index = radios.length - 1;
    }

    if (index > radios.length - 1) {
      index = 0;
    }

    this.getAllRadios().forEach(radio => {
      radio.checked = false;
      radio.setAttribute("tabindex", "-1");
    });

    this.value = radios[index]!.value;
    radios[index]!.checked = true;
    this.focusOnRadio(radios);
    radios[index]!.setAttribute("tabindex", "0");

    if (this.value !== oldValue) {
      this.emit("change");
      this.emit("input");
    }

    event.preventDefault();
  }

  private handleLabelClick() {
    this.focus();
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private async syncRadioElements() {
    const radios = this.getAllRadios();

    await Promise.all(
      // Sync the checked state and size
      radios.map(async radio => {
        await radio.updateComplete;
        if (radio.href !== "") {
          radio.checked = this.url.includes(radio.href);
        } else {
          radio.checked = radio.value === this.value;
        }
      }),
    );

    if (radios.length > 0 && !radios.some(radio => radio.checked)) {
      radios[0]!.setAttribute("tabindex", "0");
    }
  }

  private syncRadios() {
    if (customElements.get(radioInputName)) {
      this.syncRadioElements();
      return;
    }

    if (customElements.get(radioInputName)) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined(radioInputName).then(() => this.syncRadios());
    }
  }

  private updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach(radio => (radio.checked = radio.value === this.value));
    this.formControlController.setValidity(this.validity.valid);
  }

  @watch("size", { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncRadios();
  }

  @watch("value")
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }

  @watch("url")
  handleUrlChange() {
    if (window.location.href !== this.url) {
      this.url = window.location.href;
      this.syncRadioElements();
    }
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";

    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }

    return true;
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity(): boolean {
    const isValid = this.validity.valid;

    this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);

    if (!isValid) {
      // Show the browser's constraint validation message
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => (this.validationInput.hidden = true), 10000) as unknown as number;
    }

    return isValid;
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = "") {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Sets focus on the radio-group. */
  public focus(options?: FocusOptions) {
    const radios = this.getAllRadios();

    // Call focus for the checked radio
    // If no radio is checked, focus the first one that is not disabled
    this.focusOnRadio(radios, options);
  }

  private focusOnRadio(radios: RadioInput[], options?: FocusOptions) {
    const checked = radios.find(radio => radio.checked);
    const firstEnabledRadio = radios.find(radio => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;
    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = !!hasHelpTextSlot;
    const defaultSlot = html`
      <slot
        class="default-slot"
        @slotchange=${this.syncRadios}
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
      ></slot>
    `;

    return html`
      <fieldset
        class="${radioGroupName}"
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="aria-help-text"
        aria-errormessage="error-message"
      >
        <label id="label" aria-hidden=${hasLabel ? "false" : "true"} @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
        </label>

        <div class="${this.direction === "horizontal" ? radioGroupHorizontalClassName : ""}">
          <div class="visually-hidden">
            <!-- TODO: Bruker et usynlig tekstfelt for å plassere browservaliderings på ønsket plass. Lag noe bedre. -->
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label>
              <input type="text" ?required=${this.required} tabindex="-1" hidden @invalid=${this.handleInvalid} />
            </label>
          </div>

          ${defaultSlot}
        </div>

        <div id="aria-help-text" aria-hidden=${hasHelpText ? "false" : "true"}>
          <slot name="help-text"></slot>
        </div>
      </fieldset>
    `;
  }
}
