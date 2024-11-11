import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";
import { consume } from "@lit/context";

@customElement("kobber-article-wrapper")
export class ArticleWrapper extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <div class=${this.classList.value}>
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

    const article = tokens.template["article-wrapper"];

    return css`
      div {
        display: flex;
        flex-direction: column;
        gap: ${article.gap.horizontal}px;
      }
    `;
  };
}
