import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property, query, state } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import {
  ButtonBackgroundColor,
  ButtonVariant,
  ButtonLevel,
  ButtonBorderColor,
  ButtonIconSettings,
} from "./Button.types";
import { Theme } from "../utils/theme-context.types";

/**
 * Button with icon
 *
 * @param ariaLabel required when using icon only
 *
 * Figma: https://www.figma.com/design/zMcbm8ujSMldgS1VB70IMP/Styles-%26-komponenter?node-id=111-158&node-type=canvas&m=dev
 */
@customElement("kobber-button")
export class Button extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property()
  color: ButtonBackgroundColor = "carmine";

  @property()
  variant: ButtonVariant = "main";

  @property()
  level: ButtonLevel = "primary";

  @property()
  iconSettings: ButtonIconSettings = "right";

  @property({ type: Boolean })
  disabled = false;

  @state()
  private _isIconButton = false;

  @state()
  private _label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    // used for special icon only styling
    const textContent = this.shadowRoot?.host.textContent?.trim();
    const iconContent = this.shadowRoot?.host.querySelector("[slot=icon]");
    this._isIconButton = textContent === "" && iconContent !== null;

    // aria-label moved from host to button
    this._label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");
    if (this._isIconButton && !this._label) {
      console.warn("aria-label is required for icon only buttons");
    }
  }

  render() {
    if (!this.color) return "Color undefined";
    if (!this.variant) return "Variant undefined";
    if (!this.level) return "Level undefined";

    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <!-- TODO: set all relevant attributes -->
      <button class=${this.classList.value} ?disabled=${this.disabled} aria-label="${this._label}">
        <span><slot></slot></span>
        <slot name="icon"></slot>
      </button>
    `;
  }

  // Hva blir denne brukt til?
  colorFallback = () => {
    return this.color ?? "carmine";
  };

  variantFallback = (): Exclude<ButtonVariant, "supplemental alt"> => {
    // if (this.variant == "supplemental alt") {
    //   return "supplemental";
    // }

    return this.variant as Exclude<ButtonVariant, "supplemental alt">;
  };

  levelFallback = (): Exclude<ButtonLevel, "secondary"> => {
    return this.level as Exclude<ButtonLevel, "secondary">;
  };

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.error("theme context not provided");
      return css``;
    }

    const component = tokens.component.button;
    const typography = tokens.typography.ui.button;

    // TODO:
    // - icon only tokens: padding
    // - make a "withFallback"-function for states with no value and should use default
    //   (like button disabled values, which are the same for all colors)
    return css`
      button {
        /* Common for all variants */
        display: flex;
        flex-direction: ${unsafeCSS(this.iconSettings === "right" ? "row" : "row-reverse")};
        align-items: center;
        gap: ${this._isIconButton ? 0 : component.container.gap}px;
        padding-block: ${this._isIconButton ? 12 : component.container.padding.block}px;
        padding-inline: ${this._isIconButton ? 12 : component.container.padding.inline}px;
        border-radius: ${component.container.border.radius}px;
        border: 2px solid transparent;
        cursor: pointer;
        min-height: ${component.container.size.height}px;
        font-size: ${typography.fontSize / 16}rem;
        font-family: ${unsafeCSS(typography.fontFamily)};
        font-weight: ${typography.fontWeight};
        font-style: ${unsafeCSS(typography.fontStyle)};
        font-stretch: ${unsafeCSS(typography.fontStretch)};
        transition: scale 200ms ease-in 0s;

        /* Different for each variant */
        background-color: ${unsafeCSS(component.background.color.carmine.main.primary.fallback)};
        background-color: ${unsafeCSS(
          this.level === "secondary"
            ? "transparent"
            : component.background.color[this.color]?.[this.variantFallback()]?.primary.fallback,
        )};
        color: ${unsafeCSS(
          component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback,
        )};

        /* Button states */

        &:focus-visible:enabled,
        &.focus-visible {
          outline: none;
          /* TODO: handle secondary level transparent */
          box-shadow: 0 0 0 ${tokens.global.focus.border.width}px ${unsafeCSS(tokens.global.focus.color)};
        }

        &:disabled {
          background-color: ${unsafeCSS(
            component.background.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback,
          )};
          color: ${unsafeCSS(
            component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback,
          )};
          cursor: auto;
        }

        &:active:enabled {
          // TODO: Add ripple effect?
        }

        &:hover:enabled,
        &.hover {
          scale: 1.05;
          span {
            border-bottom: ${unsafeCSS(
              this.level === "secondary"
                ? `1px solid ${component.container.border.color[this.color as ButtonBorderColor]?.[this.variantFallback()]?.secondary.active}`
                : null,
            )};
          }
        }
      }

      ::slotted([slot="icon"]) {
        display: ${unsafeCSS(this.iconSettings === "none" ? "none" : "flex")};
        color: ${this.disabled === true
          ? unsafeCSS(component.icon.color[this.color]?.[this.variantFallback()]?.primary.fallback)
          : unsafeCSS(component.icon.color[this.color]?.[this.variantFallback()]?.primary.fallback)};
        --icon-width: ${component.icon.size.width.small}px;
        --icon-height: ${component.icon.size.height.small}px;
      }
    `;
  };
}
