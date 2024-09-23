import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { Theme, themeContext } from "../utils/theme-context";

export type ButtonVariant = keyof Theme["tokens"]["component"]["button"]["background"]["color"]["primary"]["neutral"];
export type ButtonBackgroundColor = keyof Theme["tokens"]["component"]["button"]["background"]["color"]["primary"];
export type ButtonBorderColor = keyof Theme["tokens"]["component"]["button"]["container"]["border"]["color"];
export type ButtonLevel = keyof Theme["tokens"]["component"]["button"]["text"]["color"]["carmine"]["main"];

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
        /* TODO: wait for token */
        border-radius: ${10}px;

        padding: ${component.container.padding.block}px
          ${component.container.padding.inline}px;
        font-size: ${typography.fontSize / 16}rem;
        font-family: ${unsafeCSS(typography.fontFamily)};
        font-weight: ${typography.fontWeight};
        font-style: ${unsafeCSS(typography.fontStyle)};
        font-stretch: ${unsafeCSS(typography.fontStretch)};

        &:focus:enabled,
        &.focus {
        /* border-radius: ${component.focus.border.radius}px; */
          
          outline: none;
          /* TODO: handle secondary level transparent */
          box-shadow: 0 0 0 ${component.focus.border.padding}px
            ${unsafeCSS(component.focus.border.color.primary.focus)};
        }

        &:disabled {
          background-color: ${unsafeCSS(component.background.color.primary[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.disabled)};
          color: ${unsafeCSS(component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.disabled)};
        }

        /* Different for each variant */
        background-color: ${unsafeCSS(component.background.color.primary.carmine.main.primary.fallback)};
        background-color: ${unsafeCSS(this.level === "secondary" ? "transparent" : component.background.color.primary[this.color]?.[this.variantFallback()]?.primary.fallback)};
        color: ${unsafeCSS(component.text.color[this.color]?.[this.variantFallback()]?.[this.levelFallback()]?.fallback)};

        transition: scale 200ms ease-in 0s;

        &:active:enabled,
        &.active,
        &:hover:enabled,
        &.hover {
          scale: 1.1;
          span {
            padding-bottom:${unsafeCSS(component.container.gap)}px;
            border-bottom: ${unsafeCSS(this.level === "secondary" ? `1px solid ${component.container.border.color[this.color as ButtonBorderColor]?.[this.variantFallback()]?.active}` : null)};
          }
        }
    `;
  };
}
