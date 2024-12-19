import { CSSResultGroup, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import componentStyles from "../base/styles/component.styles";
import { buttonStyles } from "./Button.styles";
import { buttonClassNames, ButtonColor, ButtonLevel, buttonName, ButtonProps, ButtonVariant } from "./Button.core";
import "@gyldendal/kobber-icons/web-components";

/**
 * Button with icon
 *
 * @param ariaLabel required when using icon only
 *
 * Figma: https://www.figma.com/design/zMcbm8ujSMldgS1VB70IMP/Styles-%26-komponenter?node-id=111-158&node-type=canvas&m=dev
 */
@customElement(buttonName)
export class Button extends LitElement implements ButtonProps {
  static styles: CSSResultGroup = [componentStyles, buttonStyles()];

  @property()
  color?: ButtonColor;

  @property()
  variant?: ButtonVariant;

  @property()
  level?: ButtonLevel;

  @property()
  iconFirst?: boolean;

  @property({ type: Boolean })
  disabled = false;

  @state()
  private _hasIcon = false;

  @state()
  private _iconOnly = false;

  @state()
  private _label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    // used for special icon only styling
    const textContent = this.shadowRoot?.host.textContent?.trim();
    this._hasIcon = this.shadowRoot?.host.querySelector("[slot=icon]") !== null;
    this._iconOnly = textContent === "" && this._hasIcon;

    // aria-label moved from host to button
    this._label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");

    if (this._iconOnly && !this._label) {
      console.warn("aria-label is required for icon only buttons");
    }
  }

  render() {
    return html`
      <button
        class=${[
          ...buttonClassNames({
            color: this.color,
            variant: this.variant,
            level: this.level,
            hasIcon: this._hasIcon,
            iconOnly: this._iconOnly,
            iconFirst: this.iconFirst,
          }),
          this.className,
        ].join(" ")}
        ?disabled=${this.disabled}
        aria-label="${this._label}"
      >
        <slot></slot>
        <slot name="icon"></slot>
      </button>
    `;
  }
}
