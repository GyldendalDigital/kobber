import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import KobberElementWithIcon from "../../base/kobber-element-with-icon";
import componentStyles from "../../base/styles/component.styles";
import { type BaseButtonProps, buttonClassNames } from "./ButtonBase.core";
import { baseButtonStyles } from "./ButtonBase.styles";
import "../../text/text-label/TextLabel";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import type { TextLabelProps } from "../../text/text-label/TextLabel.core";

/** Shared between Button, UiButton and ThemeButton */
export class ButtonBase extends KobberElementWithIcon implements BaseButtonProps {
  static styles: CSSResultGroup = [componentStyles, baseButtonStyles];

  // overridden in parent classes
  colorTheme: TextLabelProps["color"] = "brand";
  colorLevel: unknown = "primary";
  colorVariant: TextLabelProps["colorVariant"] = "tone-a";

  @property()
  type: BaseButtonProps["type"] = "button";

  @property({ type: Boolean, attribute: "icon-first" })
  iconFirst = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean, attribute: "full-width" })
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

  isLink() {
    return !!this.href;
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
            fullWidth: this.fullWidth,
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
      >
      ${this.iconFirst ? html`<slot name="icon"></slot>` : ""}
      ${
        !this._iconOnly
          ? html`<kobber-text-label
          .color=${this.colorTheme}
          color-variant=${invertColorVariant(this.colorVariant)}
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
