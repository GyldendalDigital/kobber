import { css, html } from "lit";

import KobberElement from "../base/kobber-element";
import { customElement } from "lit/decorators.js";

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
    const article = this.tokens().template["text-wrapper"];

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
