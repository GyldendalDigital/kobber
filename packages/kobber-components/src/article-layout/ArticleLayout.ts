import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";
import { consume } from "@lit/context";

@customElement("kobber-article-layout")
export class ArticleLayout extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--article-layout-gap);
    }
  `;

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <div class="article-layout">
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

    const article = tokens.template["article-layout"];

    return css`
      :host {
        --article-layout-gap: ${article.gap.horizontal};
      }
    `;
  };
}
