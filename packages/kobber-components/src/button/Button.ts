import { CSSResultGroup, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import componentStyles from "../base/styles/component.styles";
import { buttonStyles } from "./Button.styles";
import {
  buttonClassNames,
  ButtonColor,
  ButtonLevel,
  buttonName,
  ButtonProps,
  ButtonVariant,
  hasSupplementalAlt,
} from "./Button.core";
import "@gyldendal/kobber-icons/web-components";
import { literal, html } from "lit/static-html.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Button with icon slot
 *
 * @param ariaLabel required when using icon only
 *
 * Figma: https://www.figma.com/design/zMcbm8ujSMldgS1VB70IMP/Styles-%26-komponenter?node-id=111-158&node-type=canvas&m=dev
 */
@customElement(buttonName)
export class Button extends LitElement implements ButtonProps {
  static styles: CSSResultGroup = [componentStyles, buttonStyles];

  @property()
  color?: ButtonColor;

  @property()
  variant?: ButtonVariant;

  @property()
  level?: ButtonLevel;

  @property({ type: Boolean })
  iconFirst = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  fullWidth = false;

  /* Use only in special cases (i.e, as Radio Input) */
  @property({ type: Boolean })
  usedInOtherInteractive = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property()
  href = "";

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property()
  target?: "_blank" | "_parent" | "_self" | "_top";

  /**
   * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   */
  @property() name = "";

  /**
   * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   */
  @property() value = "";

  @state()
  private _hasIcon = false;

  @state()
  private _iconOnly = false;

  @state()
  private _label?: string | null;

  private isLink() {
    return this.href ? true : false;
  }

  connectedCallback() {
    super.connectedCallback();

    // used for special icon only styling
    const hasSlot = Array.from(this.shadowRoot!.host.children).filter(element => element.tagName === "SLOT").length > 0;
    const textContent = this.shadowRoot?.host.textContent?.trim();
    const hasOtherContentThanIcon = textContent !== "" || hasSlot;

    this._hasIcon = this.shadowRoot?.host.querySelector("[slot=icon]") !== null;
    this._iconOnly = !hasOtherContentThanIcon && this._hasIcon;

    // aria-label moved from host to button
    this._label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");

    if (this._iconOnly && !this._label) {
      console.warn("aria-label is required for icon only buttons");
    }
    if (!hasSupplementalAlt(this.color) && this.variant === "supplemental alt") {
      console.warn("variant 'supplemental alt' must match the following function: " + hasSupplementalAlt.toString());
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    return html`
      <${tag}
        class=${[
          ...buttonClassNames({
            color: this.color,
            variant: this.variant,
            level: this.level,
            hasIcon: this._hasIcon,
            iconOnly: this._iconOnly,
            iconFirst: this.iconFirst,
            fullWidth: this.fullWidth,
            usedInOtherInteractive: this.usedInOtherInteractive,
            isLink: isLink,
          }),
          this.className,
        ].join(" ")}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        href=${ifDefined(isLink && !this.disabled ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label=${this._label}
        tabindex=${this.disabled || this.usedInOtherInteractive ? "-1" : "0"}
      >
        <slot></slot>
        <slot name="icon"></slot>
      </${tag}>
    `;
  }
}
