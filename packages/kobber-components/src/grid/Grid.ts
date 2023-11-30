import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";

@customElement("kobber-grid")
export class Grid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      max-width: ${unsafeCSS(layout.maxWidth)};
      justify-items: center;
    }
  `;

  render() {
    return html`<slot /> `;
  }
}
