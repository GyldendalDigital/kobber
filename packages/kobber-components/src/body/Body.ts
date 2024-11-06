import { css, CSSResultGroup, html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";
import { consume } from "@lit/context";

@customElement("kobber-body")
export class Body extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <p>
        <slot></slot>
      </p>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("theme context not provided");
      return css``;
    }

    const text = tokens.global.text.primary;

    const highlightColor = tokens.component.article.body.text.color.highlight;
    const baseColor = tokens.component.article.body.text.color.base;

    return css`
      p {
        font-weight: ${text.weight.body};
        font-size: ${text.size.body}px;
        line-height: ${text["line-height"].body}px;
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
