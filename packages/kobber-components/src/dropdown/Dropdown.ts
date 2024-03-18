import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../button/Button";

@customElement("kobber-dropdown")
export class Dropdown extends LitElement {
  static styled = css`
    :host {
    }
  `;

  @property()
  text?: string = "";

  render() {
    return html` <div>
      <kobber-button .text=${`${this.text} 👇`}></kobber-button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>`;
  }
}
