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
      <button class=${this.classList.value} ?disabled=${this.disabled ? true : false}>
        <span><slot></slot></span>
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
    const typography = tokens.typography.actionitems.button;
    // TODO:
    // - fix units (px vs rem)
    // - make a "withFallback"-function for states with no value and should use default
    //   (like button disabled values, which are the same for all colors)
    return css`
      button {
        /* Common for all variants */

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
        background-color: ${unsafeCSS(component.background.color.primary.carmine.main.primary.fallback)};
        background-color: ${unsafeCSS(this.level === "secondary" ? "transparent" : component.background.color.primary[this.color]?.[this.variantFallback()]?.primary.fallback)};
        color: ${unsafeCSS(component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback)};



        /* Button states */

        &:focus-visible:enabled,
        &.focus-visible {
          outline: none;
          /* TODO: handle secondary level transparent */
          box-shadow: 0 0 0 ${component.focus.border.padding}px
            ${unsafeCSS(component.focus.border.color.primary.focus)};
        }

        &:disabled {
          background-color: ${unsafeCSS(component.background.color.primary[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.disabled)};
          color: ${unsafeCSS(component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.disabled)};
          cursor: auto; 
        }

        &:active:enabled {
        // TODO: Add ripple effect?
        }


        &:hover:enabled,
        &.hover {
          scale: 1.05;
          span {
            padding-bottom:${unsafeCSS(component.container.gap)}px;
            border-bottom: ${unsafeCSS(this.level === "secondary" ? `1px solid ${component.container.border.color[this.color as ButtonBorderColor]?.[this.variantFallback()]?.active}` : null)};
          }
        }
    `;
  };
}
