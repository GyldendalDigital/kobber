import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
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
 * TODO:
 * - icons
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
      <button class=${this.classList.value} ?disabled=${this.disabled}>
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
      console.log("should never occur");
      return css``;
    }

    const component = tokens.component.button;
    const typography = tokens.typography.ui.button;

    // TODO:
    // - fix units (px vs rem)
    // - make a "withFallback"-function for states with no value and should use default
    //   (like button disabled values, which are the same for all colors)
    return css`
      button {
        /* Common for all variants */
        display: flex;
        flex-direction: ${unsafeCSS(this.iconSettings === "right" ? "row" : "row-reverse")};
        align-items: center;
        gap: ${component.container.gap}px;
        border: 1px solid transparent;
        border-radius: ${component.container.border.radius}px;
        padding: ${component.container.padding.block}px ${component.container.padding.inline}px;
        cursor: pointer;
        min-height: ${component.container.size.height}px;
        font-size: ${typography.fontSize}px;
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
            component.background.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.disabled,
          )};
          color: ${unsafeCSS(
            component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.disabled,
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
          ? unsafeCSS(component.icon.color[this.color]?.[this.variantFallback()]?.primary.disabled)
          : unsafeCSS(component.icon.color[this.color]?.[this.variantFallback()]?.primary.fallback)};
        --icon-width: ${component.icon.size.width.small}px;
        --icon-height: ${component.icon.size.height.small}px;
      }
    `;
  };
}
