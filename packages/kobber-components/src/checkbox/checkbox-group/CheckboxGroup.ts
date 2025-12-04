import type { CSSResultGroup } from "lit";
import { property, query, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, unsafeStatic } from "lit/static-html.js";
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState,
} from "../../base/internal/form";
import type { ShoelaceFormControl } from "../../base/internal/shoelace-element";
import ShoelaceElement from "../../base/internal/shoelace-element";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import {
  type Checked,
  checkboxGroupName,
  checkboxInputName,
  type GroupProps,
} from "../Checkbox.core";
import type { CheckboxInput } from "../checkbox-input/CheckboxInput";
import { checkboxGroupStyles } from "./CheckboxGroup.styles";

/**
 * @summary Checkbox groups are used to group multiple [checkboxes](/components/checkbox).
 * @status stable
 * @since 2.0
 *
 * @slot - The default slot where `<kobber-checkbox-button>` elements are placed.
 * @slot label - The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 * @slot help-text - Text that describes how to use the checkbox group. Alternatively, you can use the `help-text` attribute.
 *
 */

type Props = GroupProps & ShoelaceFormControl;

@customElement(checkboxGroupName)
export class CheckboxGroup extends ShoelaceElement implements Props {
  inputsCommonName: string = "";
  disabled?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  input!: HTMLInputElement;
  validationMessage: string = "";

  static styles: CSSResultGroup = [componentStyles, checkboxGroupStyles];

  protected readonly formControlController = new FormControlController(this);
  private customValidityMessage = "";

  @query("slot:not([name])") defaultSlot!: HTMLSlotElement;

  @property()
  type: GroupProps["type"] = "equal";
  @property({ attribute: "hierarchical-checkboxbox-label" })
  hierarchicalCheckboxLabel: GroupProps["hierarchicalCheckboxLabel"] = "";

  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property()
  label: GroupProps["label"] = "";

  /** The name of the checkbox group, submitted as a name/value pair with form data. */
  @property({ attribute: "inputs-common-name" })
  name: GroupProps["inputsCommonName"] = "option";

  @property()
  orientation: GroupProps["orientation"] = "vertical";

  /** The current value of the checkbox group, submitted as a name/value pair with form data. */
  @state() private names: string[] = [];

  @state() private allBoxesAreChecked = false;
  @state() private hierarchicalCheckboxIsChecked: Checked = "unchecked";
  @state() private someButNotAllBoxesAreChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true })
  form: GroupProps["form"] = "";

  /** Ensures a child checkbox is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true })
  required: GroupProps["required"] = false;

  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.names;
    const hasCustomValidityMessage = this.customValidityMessage !== "";

    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }

    return validValidityState;
  }
  value: string | undefined;
  defaultValue?: unknown;
  pattern?: string | undefined;
  min?: string | number | Date | undefined;
  max?: string | number | Date | undefined;
  step?: number | "any" | undefined;
  minlength?: number | undefined;
  maxlength?: number | undefined;
  checked?: boolean | undefined;
  indeterminate?: boolean | undefined;

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private getAllCheckboxes() {
    return [...this.querySelectorAll<CheckboxInput>(checkboxInputName)];
  }

  /**
   * Populate name/value pairs array?
   */
  private async syncCheckboxElements() {
    const checkboxes = this.getAllCheckboxes();
    const numberOfNotDisabledCheckboxes = checkboxes.filter(box => !box.disabled).length;

    await Promise.all(
      // Sync the checked state and size
      checkboxes.map(async checkbox => {
        await checkbox.updateComplete;

        if (checkbox.singleInputName) {
          const index = this.names.indexOf(checkbox.singleInputName);
          if (checkbox.checkedOrIndeterminate === "checked") {
            if (index < 0) {
              this.names.push(checkbox.singleInputName as string);
            }
          } else if (index > -1) {
            this.names.splice(index, 1);
          }
        }
      }),
    );

    if (this.names.length > 0) {
      if (numberOfNotDisabledCheckboxes === this.names.length) {
        this.allBoxesAreChecked = true;
        this.someButNotAllBoxesAreChecked = false;
      } else {
        this.allBoxesAreChecked = false;
        this.someButNotAllBoxesAreChecked = true;
      }
    } else {
      this.allBoxesAreChecked = false;
      this.someButNotAllBoxesAreChecked = false;
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

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.names;
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

  private async handleHierarchicalCheckboxClick(e: Event) {
    e.preventDefault(); // Avoid emitting two clicks
    this.hierarchicalCheckboxIsChecked =
      this.hierarchicalCheckboxIsChecked === "checked" ? "unchecked" : "checked";

    const checkboxes = this.getAllCheckboxes();
    await Promise.all(
      // Sync the checked state and size
      checkboxes.map(async checkbox => {
        await checkbox.updateComplete;
        if (!checkbox.disabled) {
          checkbox.checkedOrIndeterminate =
            this.hierarchicalCheckboxIsChecked === "checked" ? "checked" : "unchecked";
        }
        console.log(`checkbox`);
        console.log(checkbox);
      }),
    );
    this.syncCheckboxElements();
  }

  render() {
    const isHierarchical = this.type === "hierarchical";
    const hierarchicalCheckbox = isHierarchical
      ? html`<${unsafeStatic(checkboxInputName)}
        checked=${this.allBoxesAreChecked ? "checked" : this.someButNotAllBoxesAreChecked ? "indeterminate" : "unchecked"} 
        @click=${this.handleHierarchicalCheckboxClick}
        >
          ${this.hierarchicalCheckboxLabel}
        </${unsafeStatic(checkboxInputName)}>`
      : "";
    const defaultSlot = html`
      <slot class="default-slot" @slotchange=${this.syncCheckboxes} @click=${this.syncCheckboxes}></slot>
    `;

    return html`
      <fieldset
        class="${checkboxGroupName}"
        data-type="${ifDefined(this.type)}"
      >
        <legend>
          <slot name="label">${this.label}</slot>
        </legend>

        ${hierarchicalCheckbox}
        <div data-orientation="${ifDefined(this.orientation)}">${defaultSlot}</div>
        
      </fieldset>
    `;
  }
}
