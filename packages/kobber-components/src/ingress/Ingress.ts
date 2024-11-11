import { css, CSSResultGroup, html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";
import { consume } from "@lit/context";

@customElement("kobber-ingress")
export class Ingress extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("theme context not provided");
      return css``;
    }

    const text = tokens.global.text.primary;

    const highlightColor = tokens.component.article.ingress.text.color.highlight;
    const baseColor = tokens.component.article.ingress.text.color.base;

    return css`
      div {
        font-weight: ${text.weight.title.medium.medium};
        font-size: ${text.size.title.medium}px;
        line-height: ${text["line-height"].title.medium}px;
        color: ${unsafeCSS(baseColor)};
        white-space: normal; /* Ensures lines flow within the paragraph */
        margin: 0; /* Adjust or remove margin if needed */
      }

      /* Ensures slot content is displayed inline */
      ::slotted(*) {
        display: inline;
      }

      /* Style for highlighted text within slot */
      ::slotted(span.highlight) {
        color: ${unsafeCSS(highlightColor)};
        font-weight: bold;
      }
    `;
  };
}
