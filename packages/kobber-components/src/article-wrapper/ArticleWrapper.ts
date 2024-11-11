import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import KobberElement from "../base/kobber-element";

@customElement("kobber-article-wrapper")
export class ArticleWrapper extends KobberElement {
  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <slot></slot>
    `;
  }

  themedStyles = () => {
    const article = this.tokens().template["article-wrapper"];

    return css`
      :host {
        display: flex;
        flex-direction: column;
        gap: ${article.gap.horizontal}px;
        overflow: hidden;
      }
    `;
  };
}
