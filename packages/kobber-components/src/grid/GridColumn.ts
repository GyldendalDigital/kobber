import { CSSResultGroup, LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";

@customElement("kobber-grid-column")
export class GridColumn extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      max-width: ${unsafeCSS(layout.maxWidth)};
    }
  `;

  @property({ type: Number })
  span = 1;

  @property({ type: String })
  alignSelf?: string;

  @property({ type: String })
  justifySelf?: string;

  render() {
    return html`
      <style>
        :host {
          grid-column: span ${this.span};
          align-self: ${this.alignSelf};
          justify-self: ${this.justifySelf};
        }
      </style>
      <slot />
    `;
  }
}
