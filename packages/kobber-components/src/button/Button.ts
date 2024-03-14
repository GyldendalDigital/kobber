import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { Theme, themeContext } from "../utils/theme-context";

/** 
 * TODO:
 * - icons
 */
@customElement("kobber-button")
export class Button extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme

  @property()
  color: "default" | "info" | "positive" | "negative" = "default";

  @property()
  level: "primary" | "secondary" = "primary";

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <!-- TODO: set all relevant attributes -->
      <button class=${this.classList.value} ?disabled=${this.attributes.getNamedItem("disabled") ? true : false}>
        <slot></slot>
      </button>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("should never occur")
      return css``;
    }

    // TODO: 
    // - fix units (px vs rem)
    // - make a "withFallback"-function for states with no value and should use default 
    //   (like button disabled values, which are the same for all colors)
    return css`
    button {
      /* Common for all variants */
      border: 1px solid transparent;
      border-radius: ${tokens.component.button.border.radius}px;
      padding: ${tokens.component.button.padding.block}px ${tokens.component.button.padding.inline}px;
      font-size: ${tokens.typography.action.button.fontSize / 16}rem;
      font-family: ${unsafeCSS(tokens.typography.action.button.fontFamily)};
      font-weight: ${tokens.typography.action.button.fontWeight};
      font-style: ${unsafeCSS(tokens.typography.action.button.fontStyle)};
      font-stretch: ${unsafeCSS(tokens.typography.action.button.fontStretch)};

      &:focus:enabled, &.focus {
        outline: none;
        box-shadow: 0 0 0 4px ${unsafeCSS(tokens.semantic.color.focus)};
      }
      
      &:disabled {
        background-color: ${unsafeCSS(tokens.component.button.color.default.disabled.background)};
        color: ${unsafeCSS(tokens.component.button.color.default.disabled.foreground)};
        font-style: ${unsafeCSS(tokens.typography.action.disabled.button.fontStyle)};
      }

      /* Different for each variant */
      background-color: ${unsafeCSS(tokens.component.button.color[this.color].default.background)};
      color: ${unsafeCSS(tokens.component.button.color[this.color].default.foreground)};

      &:hover:enabled, &.hover {
        background-color: ${unsafeCSS(tokens.component.button.color[this.color].hover.background)};
      }

      &:active:enabled, &.active {
        background-color: ${unsafeCSS(tokens.component.button.color[this.color].active.background)};
      }
    }
  `;
  }
}

// color theme nivået på current er feil. varianter bør komme etter properties
// varianter har må ha en bestemt rekkefølge på properties per komponent
// f.eks. button må alltid ha rekkefølgen variants.level.colorTheme.state
// og hvis en av disse mangler, fallbacker vi til button rot-nivået