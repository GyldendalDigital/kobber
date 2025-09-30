import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import componentStyles from "../base/styles/component.styles";
import { buttonStyles } from "./Button.styles";
import { buttonClassNames, buttonName, type ButtonProps } from "./Button.core";
import { literal, html } from "lit/static-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElementWithIcon from "../base/kobber-element-with-icon";
import { customElement } from "../base/utilities/customElementDecorator";
import "../text/text-label/TextLabel";
import { invertColorVariant } from "../base/utilities/invertColorVariant";

/**
 * Button with icon slot
 *
 * @param ariaLabel required when using icon only
 *
 * Figma: https://www.figma.com/design/zMcbm8ujSMldgS1VB70IMP/Styles-%26-komponenter?node-id=111-158&node-type=canvas&m=dev
 */
@customElement(buttonName)
export class Button extends KobberElementWithIcon implements ButtonProps {
  static styles: CSSResultGroup = [componentStyles, buttonStyles];

  @property()
  type: ButtonProps["type"] = "button";

  @property({ attribute: "color-theme" })
  colorTheme: ButtonProps["colorTheme"] = "brand";

  @property({ attribute: "color-level" })
  colorLevel: ButtonProps["colorLevel"] = "primary";

  @property({ attribute: "color-variant" })
  colorVariant: ButtonProps["colorVariant"] = "tone-a";

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

  private isLink() {
    return this.href ? true : false;
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
        data-button-type="${this.type}"
        data-color-theme="${this.colorTheme}"
        data-color-level="${this.colorLevel}"
        data-color-variant="${this.colorVariant}"
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
          color=${ifDefined(this.colorTheme)}
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
