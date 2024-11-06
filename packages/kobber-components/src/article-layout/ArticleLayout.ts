import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";
import { consume } from "@lit/context";

@customElement("kobber-article-layout")
export class ArticleLayout extends LitElement {
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

    return css`
      :host {
        display: flex;
        align-items: flex-center;
        gap: 48px;
      }
    `;
  };
}
