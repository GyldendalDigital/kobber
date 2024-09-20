import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { Theme, themeContext } from "../utils/theme-context";

export type ButtonLevel = keyof Theme["tokens"]["component"]["button"]["background"]["color"]["primary"]["neutral"];
export type ButtonBackgroundColorName = keyof Theme["tokens"]["component"]["button"]["background"]["color"]["primary"];
export type ButtonBorderColorName = keyof Theme["tokens"]["component"]["button"]["container"]["border"]["color"];

/**
 * TODO:
 * - icons
 */
@customElement("kobber-button")
export class Button extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property()
  level: ButtonLevel = "main";

  @property()
  backgroundColor: ButtonBackgroundColorName = "fantasy";

  @property()
  borderColor: ButtonBorderColorName = "carmine";

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

  levelFallback = (): Exclude<ButtonLevel, "supplemental alt"> => {
    if (this.level == "supplemental alt") {
      return "supplemental";
    }

    return this.level;
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
          outline: none;
          box-shadow: 0 0 0 ${component.focus.border.padding}
            ${unsafeCSS(component.focus.border.color.primary.focus)};
        }

        &:disabled {
          background-color: ${unsafeCSS(component.background.color.primary.neutral[this.level].primary.disabled)};
          color: ${unsafeCSS(component.text.color.neutral[this.level].primary.disabled)};
          /* TODO: wait for token */
          font-style: italic;
        }

        /* Different for each variant */
        background-color: ${unsafeCSS(
          component.background.color.primary[this.backgroundColor][this.levelFallback()].primary.fallback,
        )};
        color: ${unsafeCSS(component.text.color[this.backgroundColor][this.levelFallback()].primary.fallback)};

        &:hover:enabled,
        &.hover {
          border-color: ${unsafeCSS(this.levelFallback() === "main" ? component.container.border.color[this.borderColor].main.hover : component.container.border.color[this.borderColor][this.levelFallback()].active)};
        }

        &:active:enabled,
        &.active {
          border-color: ${unsafeCSS(component.container.border.color[this.borderColor][this.levelFallback()].active)}
      }
    `;
  };
}
