import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("paper")
export class Paper extends LitElement {
  static styles = css`
    :host {
      background-color: wheat;
      box-shadow: 0 0 4px 4px black;
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}
