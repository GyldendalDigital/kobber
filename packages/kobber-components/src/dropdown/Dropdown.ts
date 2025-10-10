import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "../button/default-button/Button";
import { customElement } from "../base/utilities/customElementDecorator";

/**
 * Dropdown (also referred to as a select) allows choosing a value from a fixed list of available options
 *
 * @deprecated Will be reimplented in a future version.
 */
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
