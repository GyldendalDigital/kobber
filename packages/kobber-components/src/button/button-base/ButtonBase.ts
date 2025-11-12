import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import KobberElementWithIcon from "../../base/kobber-element-with-icon";
import componentStyles from "../../base/styles/component.styles";
import { type BaseButtonProps, buttonClassNames } from "./ButtonBase.core";
import { baseButtonStyles, isColorVariantException } from "./ButtonBase.styles";
import "../../text/text-label/TextLabel";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import type { TextLabelProps } from "../../text/text-label/TextLabel.core";

/** Shared between Button, UiButton and ThemeButton */
export class ButtonBase extends KobberElementWithIcon implements BaseButtonProps {
  static styles: CSSResultGroup = [componentStyles, baseButtonStyles];
  static formAssociated = true;
  private _internals = this.attachInternals();

  // overridden in parent classes
  colorTheme: TextLabelProps["color"] = "brand";
  colorLevel: unknown = "primary";
  colorVariant: TextLabelProps["colorVariant"] = "tone-a";

  @property({ reflect: true })
  type: BaseButtonProps["type"] = "button";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, attribute: "icon-first" })
  iconFirst = false;

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

  /**
   * We usually invert the color variant for the nested TextLabel, but there are exceptions to this rule.
   */
  textLabelColorVariant() {
    return isColorVariantException(this.colorTheme, this.colorLevel)
      ? (this.colorVariant ?? "tone-a")
      : invertColorVariant(this.colorVariant);
  }

  isLink() {
    return !!this.href;
  }

  private handleClick(ev: MouseEvent) {
    if (this.disabled) {
      ev.preventDefault();
      return;
    }

    const form = this._internals.form;
    if (!form) return;

    if (this.type === "submit") {
      form.requestSubmit();
      return;
    }

    if (this.type === "reset") {
      form.reset();
      return;
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    return html`
      <${tag}
        class=${[
          ...buttonClassNames({
            hasIcon: this._hasIcon,
            iconOnly: this._iconOnly,
            iconFirst: this.iconFirst,
            usedInOtherInteractive: this.usedInOtherInteractive,
            isLink: isLink,
          }),
          this.className,
        ].join(" ")}
        data-color="${this.colorTheme}"
        data-color-level="${this.colorLevel}"
        data-color-variant="${this.colorVariant}"
        type="${this.type}"
        ?disabled=${isLink ? undefined : this.disabled}
        href=${ifDefined(isLink && !this.disabled ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label=${ifDefined(this._label)}
        tabindex=${this.disabled || this.usedInOtherInteractive ? "-1" : "0"}
        @click=${this.handleClick}
      >
      ${this.iconFirst ? html`<slot name="icon"></slot>` : ""}
      ${
        !this._iconOnly
          ? html`<kobber-text-label
          .color=${this.colorTheme}
          color-variant=${this.textLabelColorVariant()}
        >
          <slot></slot>
        </kobber-text-label>`
          : ""
      }
      ${!this.iconFirst ? html`<slot name="icon"></slot>` : ""}
      </${tag}>
    `;
  }
}
