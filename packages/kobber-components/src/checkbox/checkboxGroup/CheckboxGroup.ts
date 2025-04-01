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
import type { CheckboxInput } from "../checkboxInput/CheckboxInput";
import { checkboxGroupName, checkboxInputName, checkboxGroupHorizontalClassName, GroupProps } from "../Checkbox.core";
import { checkboxGroupStyles } from "./CheckboxGroup.styles";

/**
 * @summary Checkbox groups are used to group multiple [checkboxes](/components/checkbox) or [checkbox buttons](/components/checkbox-button) so they function as a single form control.
 * @documentation https://shoelace.style/components/checkbox-group
 * @status stable
 * @since 2.0
 *
 * @slot - The default slot where `<kobber-checkbox-button>` elements are placed.
 * @slot label - The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 * @slot help-text - Text that describes how to use the checkbox group. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the checkbox group's selected value changes.
 * @event input - Emitted when the checkbox group receives user input.
 * @event invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 */

type Props = GroupProps & ShoelaceFormControl;

@customElement(checkboxGroupName)
export class CheckboxGroup extends ShoelaceElement implements Props {
  disabled?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  input!: HTMLInputElement;
  validationMessage: string = "";

  static styles: CSSResultGroup = [componentStyles, checkboxGroupStyles];

  protected readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, "help-text", "label");
  private customValidityMessage = "";

  @query("slot:not([name])") defaultSlot!: HTMLSlotElement;

  @state() private url = window.location.href;

  @property({ attribute: "current-value" }) currentValue = "";
  @property({ attribute: "show-group-checkbox", type: Boolean, reflect: true }) showGroupCheckbox = false;

  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = "";

  /** The name of the checkbox group, submitted as a name/value pair with form data. */
  @property() name = "option";

  @property() direction: "vertical" | "horizontal" = "vertical";

  /** The current value of the checkbox group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) value = "";

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = "";

  /** Ensures a child checkbox is checked before allowing the containing form to submit. */
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

  private getAllCheckboxes() {
    return [...this.querySelectorAll<CheckboxInput>(checkboxInputName)];
  }

  private handleCheckboxClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest<CheckboxInput>(checkboxInputName)!;
    const checkboxes = this.getAllCheckboxes();
    const oldValue = this.value;

    if (!target || target.disabled) {
      return;
    }

    this.value = target.value;
    checkboxes.forEach(checkbox => (checkbox.checked = checkbox === target));

    if (this.value !== oldValue) {
      this.emit("change");
      this.emit("input");
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }

    const checkboxes = this.getAllCheckboxes().filter(checkbox => !checkbox.disabled);
    const checkedCheckbox = checkboxes.find(checkbox => checkbox.checked) ?? checkboxes[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = checkboxes.indexOf(checkedCheckbox!) + incr;

    if (index < 0) {
      index = checkboxes.length - 1;
    }

    if (index > checkboxes.length - 1) {
      index = 0;
    }

    this.getAllCheckboxes().forEach(checkbox => {
      checkbox.checked = false;
      checkbox.setAttribute("tabindex", "-1");
    });

    this.value = checkboxes[index]!.value;
    checkboxes[index]!.checked = true;
    this.focusOnCheckbox(checkboxes);
    checkboxes[index]!.setAttribute("tabindex", "0");

    if (this.value !== oldValue) {
      this.emit("change");
      this.emit("input");
    }

    event.preventDefault();
  }

  private handleLabelClick() {
    this.focus();
  }

  private async syncCheckboxElements() {
    const checkboxes = this.getAllCheckboxes();

    await Promise.all(
      // Sync the checked state and size
      checkboxes.map(async checkbox => {
        await checkbox.updateComplete;
        checkbox.checked = checkbox.value === this.value;
      }),
    );

    if (checkboxes.length > 0 && !checkboxes.some(checkbox => checkbox.checked)) {
      checkboxes[0]!.setAttribute("tabindex", "0");
    }
  }

  private syncCheckboxes() {
    if (customElements.get(checkboxInputName)) {
      this.syncCheckboxElements();
      return;
    }

    if (customElements.get(checkboxInputName)) {
      this.syncCheckboxElements();
    } else {
      customElements.whenDefined(checkboxInputName).then(() => this.syncCheckboxes());
    }
  }

  private updateCheckedCheckbox() {
    const checkboxes = this.getAllCheckboxes();
    checkboxes.forEach(checkbox => (checkbox.checked = checkbox.value === this.value));
    this.formControlController.setValidity(this.validity.valid);
  }

  @watch("size", { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncCheckboxes();
  }

  @watch("value")
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedCheckbox();
    }
  }

  @watch("url")
  handleUrlChange() {
    if (window.location.href !== this.url) {
      this.url = window.location.href;
      this.syncCheckboxElements();
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

    this.formControlController.setValidity(isValid);

    return isValid;
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = "") {
    this.customValidityMessage = message;
    this.formControlController.updateValidity();
  }

  private focusOnCheckbox(checkboxes: CheckboxInput[], options?: FocusOptions) {
    const checked = checkboxes.find(checkbox => checkbox.checked);
    const firstEnabledCheckbox = checkboxes.find(checkbox => !checkbox.disabled);
    const checkboxToFocus = checked || firstEnabledCheckbox;
    if (checkboxToFocus) {
      checkboxToFocus.focus(options);
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
        @slotchange=${this.syncCheckboxes}
        @click=${this.handleCheckboxClick}
        @keydown=${this.handleKeyDown}
      ></slot>
    `;

    return html`
      <fieldset
        class="${checkboxGroupName}"
        role="checkboxgroup"
        aria-labelledby="label"
        aria-describedby="aria-help-text"
        aria-errormessage="error-message"
      >
        <legend>
          <slot name="label">${this.label}</slot>
        </legend>

        <div class="${this.direction === "horizontal" ? checkboxGroupHorizontalClassName : ""}">${defaultSlot}</div>

        <div id="aria-help-text" aria-hidden=${hasHelpText ? "false" : "true"}>
          <slot name="help-text"></slot>
        </div>
      </fieldset>
    `;
  }
}
