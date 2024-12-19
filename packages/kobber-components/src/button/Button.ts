import { CSSResultGroup, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import componentStyles from "../base/styles/component.styles";
import { buttonStyles } from "./Button.styles";
import {
  buttonClassNames,
  ButtonColor,
  ButtonIconPosition,
  ButtonLevel,
  buttonName,
  ButtonVariant,
} from "./Button.core";
import "@gyldendal/kobber-icons/web-components";

/**
 * Button with icon
 *
 * @param ariaLabel required when using icon only
 *
 * Figma: https://www.figma.com/design/zMcbm8ujSMldgS1VB70IMP/Styles-%26-komponenter?node-id=111-158&node-type=canvas&m=dev
 */
@customElement(buttonName)
export class Button extends LitElement {
  static styles: CSSResultGroup = [componentStyles, buttonStyles()];

  @property()
  color: ButtonColor = "aubergine";

  @property()
  variant: ButtonVariant = "supplemental alt";

  @property()
  level: ButtonLevel = "primary";

  @property()
  iconPosition: ButtonIconPosition = "right";

  @property({ type: Boolean })
  disabled = false;

  @state()
  private _hasIcon = false;

  @state()
  private _isIconButton = false;

  @state()
  private _label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    // used for special icon only styling
    const textContent = this.shadowRoot?.host.textContent?.trim();
    this._hasIcon = this.shadowRoot?.host.querySelector("[slot=icon]") !== null;
    this._isIconButton = textContent === "" && this._hasIcon;

    // aria-label moved from host to button
    this._label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");
    if (this._isIconButton && !this._label) {
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
            isIconOnly: this._isIconButton,
            iconPosition: this.iconPosition,
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

  /** Use default tokens if no theme is provided */
  // themedStyles = () => {
  //   if (!this.color || !this.variant || !this.level) return null;

  //   const component = this.tokens().component.button;
  //   const typography = this.tokens().typography.ui.button;
  //   const global = this.tokens().global;

  //   // TODO:
  //   // - icon only tokens: padding
  //   // - make a "withFallback"-function for states with no value and should use default
  //   //   (like button disabled values, which are the same for all colors)
  //   return css`
  //     button {
  //       /* Common for all variants */
  //       display: flex;
  //       flex-direction: ${unsafeCSS(this.iconSettings === "right" ? "row" : "row-reverse")};
  //       align-items: end;
  //       gap: ${this._isIconButton ? 0 : component.container.gap}px;
  //       padding-block: ${this._isIconButton ? 12 : component.container.padding.block}px;
  //       padding-inline: ${this._isIconButton ? 12 : component.container.padding.inline}px;
  //       border-radius: ${component.container.border.radius}px;
  //       border: 2px solid transparent;
  //       cursor: pointer;
  //       min-height: ${component.container.size.height}px;
  //       font-size: ${typography.fontSize / 16}rem;
  //       font-family: ${unsafeCSS(typography.fontFamily)};
  //       font-weight: ${typography.fontWeight};
  //       font-style: ${unsafeCSS(typography.fontStyle)};
  //       font-stretch: ${unsafeCSS(typography.fontStretch)};
  //       transition: scale 200ms ease-in 0s;

  //       /* Different for each variant */
  //       background-color: ${unsafeCSS(
  //         this.level === "secondary"
  //           ? "transparent"
  //           : component.background.color[this.color]?.[this.variantFallback()]?.primary.fallback,
  //       )};
  //       color: ${unsafeCSS(
  //         component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback,
  //       )};

  //       /* Button states */

  //       &:focus-visible:enabled,
  //       &.focus-visible {
  //         outline: none;
  //         /* TODO: handle secondary level transparent */
  //         box-shadow: 0 0 0 ${global.focus.border.width}px ${unsafeCSS(global.focus.color)};
  //       }

  //       &:disabled {
  //         background-color: ${unsafeCSS(
  //           component.background.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback,
  //         )};
  //         color: ${unsafeCSS(
  //           component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback,
  //         )};
  //         cursor: auto;
  //       }

  //       &:active:enabled {
  //         // TODO: Add ripple effect?
  //       }

  //       &:hover:enabled,
  //       &.hover {
  //         scale: 1.05;
  //         span {
  //           border-bottom: ${unsafeCSS(
  //             this.level === "secondary"
  //               ? `1px solid ${component.container.border.color[this.color as ButtonBorderColor]?.[this.variantFallback()]?.secondary.active}`
  //               : null,
  //           )};
  //         }
  //       }
  //     }

  //     ::slotted([slot="icon"]) {
  //       display: ${unsafeCSS(this.iconSettings === "none" ? "none" : "flex")};
  //       color: ${unsafeCSS(component.icon.color[this.color]?.[this.variantFallback()]?.primary.fallback)};
  //       --icon-width: ${component.icon.size.width.small}px;
  //       --icon-height: ${component.icon.size.height.small}px;
  //     }
  //   `;
  // };
}
