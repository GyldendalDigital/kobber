import { css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import KobberElement from "../base/kobber-element";

@customElement("kobber-ingress")
export class Ingress extends KobberElement {
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
    const text = this.tokens().global.text.primary;
    const highlightColor = this.tokens().component.article.ingress.text.color.highlight;
    const baseColor = this.tokens().component.article.ingress.text.color.base;

    return css`
      :host {
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
