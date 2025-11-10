import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("card")
export class Card extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}
